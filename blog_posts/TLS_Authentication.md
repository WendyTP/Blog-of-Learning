## TLS Authentication

Being able to transfer data in an encrypted form is all well and good, but what if the source of that encrypted data is malicious? For example, you could be communicating with what you think is your bank, but is in fact a third-party impersonating your bank. Having an encrypted communication channel in this situation doesn't keep you secure from that malicious third-party. In fact it could put you more at risk; since the channel is encrypted you might be more willing to share sensitive data such as credit card details. What we need is a means of identifying the other party in our message exchange.

During the TLS Handshake, as part of its response to the `ClientHello` message, the server provides its certificate. As outlined in the Encryption section, part of the function of this certificate is so that the client can use the Public Key contained within it during the key exchange process. Another function of this certificate is to provide a means of identification for the party providing it.

The certificate will contain various pieces of information, including who the owner is. The certificate on its own isn't much proof of anything, however. Since such certificates are publicly available to anyone, a malicious third-party could easily access one and present it as its own. The certificate, and the Public Key it contains, are only one part of an overall system of authentication.

The exact way that the Public Key is used during this process varies depending on the Authentication algorithm selected as part of the Cipher Suite. Generally however, this process will be something along the following lines:

- The server sends its certificate, which includes its *public* key.
- The server creates a 'signature' in the form of some data encrypted with the server's *private* key.
- The signature is transmitted in a message along with the original data from which the signature was created.
- On receipt of the message, the client decrypts the signature using the server's public key and compares the decrypted data to the original version.
- If the two versions match then the encrypted version could only have been created by a party in possession of the private key.

Following a process such as this we can identify that the server which provided the certificate during the initial part of the TLS Handshake as being in possession of the private key, and therefore the actual owner of the certificate.

There's still an issue here though. What's to stop a malicious third-party creating their own key pair and certificate identifying them as, say, a well-known bank? Just as it's possible to create a fake an ID card in the real world, it's possible to create a fake digital certificate. How are we to know if a certificate is genuine or not? This is where Certificate Authorities come in.

## Certificate Authorities and the Chain of Trust

If you are presented with a piece of identification, you are much more likely to accept it as genuine if it has been issued by a trustworthy source. When it comes to digital certificates, the trustworthy sources are called Certificate Authorities (CAs).

When a CA issues a certificate, it does a couple of important things:

1. Verifies that the party requesting the certificate is who they say they are. The way that this is done is up to the CA and will depend to an extent on the type of certificate being issued. In the case of a domain validated server certificate, for example, it can involve proving that you own the domain by uploading a specific file to a server that is accessible by the domain for which the certificate is being issued.
2. Digitally signs the certificate being issued. This is often done by encrypting some data with the CA's own private key and using this encrypted data as a 'signature'. The unencrypted version of the data is also added to the certificate. In order to verify that the certificate was issued by the CA, the signature can be decrypted using the CA's public key and checked for a match against the unencrypted version.

So who exactly are these Certificate Authorities, and why should we trust them? There are different 'levels' of CA. An 'Intermediate CA' can be any company or body authorised by a 'Root CA' to issue certificates on its behalf. A widely-used Intermediate CA is Let's Encrypt, who provide free, automated certificates.

Google have their own Intermediate CA called Google Internet Authority, who issue certificates for all of Google's own domains. If you view the certificate for [`https://www.google.com`](https://www.google.com/), you'll be able to see this Intermediate CA listed in the Certificate Hierarchy. The way you view the Certificate Hierarchy will vary depending on the browser you use. For Chrome, click on the padlock icon in the address bar and in the resulting pop-up menu click on 'Certificate'.



<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-authentication-browser-padlock-modal.png" alt="Screenshot of clicking on padlock icon in Google Chrome, and the resulting popup menu" style="zoom: 50%;" />



In the Certificate Viewer, click on the 'Details' tab. At the top you should be able to see the Certificate Hierarchy.



<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-authentication-browser-certification-path.png" alt="Screenshot of Certificate Viewer details tab, showing Certificate Hierarchy for google.com" style="zoom:50%;" />



If you select `www.google.com` in the Certificate Hierarchy List and then click on `Issuer` in the Certificate Fields window, the Field Value should show something like `CN = Google Internet Authority G3` (CN here refers to Common Name), which indicates that Google Internet Authority is the issuer of the certificate for `www.google.com`.

If you select `Google Internet Authority` in the Certificate Hierarchy List and follow the same process, you should see that the issuer for this certificate is GlobalSign. This is the 'chain of trust' from google.com to Google Internet Authority to GlobalSign.

If you do the same thing again to check the issuer of GlobalSign's certificate however, you'll see that this is also GlobalSign. GlobalSign is a root CA and its certificate is what's known as a Root Certificate. Root Certificates are 'self-signed', and are essentially the end-point of the chain of trust.

Client software, such as browsers, store a list of these authorities along with their Root Certificates (which includes their public key). When receiving a certificate for checking, the browser can go up the chain to the Root Certificate stored in its list.



<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-authentication-chain-of-trust.png" alt="Diagram showing chain of trust structure" style="zoom:50%;" />



The purpose of this chain-like structure is the level of security it provides. The private keys of the Root CAs are kept behind many layers of security in order to be kept as inaccessible as possible. As such they don't issue end-user certificates, but leave that up to the Intermediate CAs. Additionally, if the private key of an Intermediate CA somehow became compromised, the root CA can revoke the certificate for Intermediate, therefore invalidating all of the certificates down the chain from it, and simply issue a new one.

It is necessary that such a 'chain of trust' would need to have an end-point, but if no-one is authenticating the Root CAs other than themselves, how do we know we can trust them? The answer to this is simply their reputation gained through prominence and longevity. Root CAs are essentially a small group of organisations approved by browser and operating system vendors.

Ultimately this system still relies on trust, and as such isn't infallible. In 2015 [Symantec issued some fake Google Certificates](https://www.itpro.co.uk/security/25315/symantec-employees-fired-over-fake-security-certificates). Although the issue was quickly spotted and fixed, it shows that this security infrastructure isn't necessarily 100% reliable.