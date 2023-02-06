## TLS Encryption

Encryption is a major component of the security provided by TLS. The way in which TLS sets up an encrypted connection is via a process known as the **TLS Handshake**. Before we look in more detail at how this process works, let's first try to understand the problem that it aims to solve.

### Cryptography

Cryptography, that is to say the use of techniques for securing communication, has been in use for thousands of years. An ancient example is the Caesar cipher, which was a simple substitution cipher used by Julius Caesar to encrypt sensitive stategic messages he sent to his commanders during the various military campaigns undertaken by the Roman Empire.

<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-caesar-cipher.png" alt="Simple graphic illustrating the mechanics of a substitution cipher" style="zoom: 33%;" />

Simple substitution ciphers such as this are a fairly weak form of encryption however, and are relatively easy to 'crack'.

In the 16th Century, a French cryptographer called Blaise de Vigenere popularised a new cryptographic system which came to be known as the Vigenere cipher. In this system, as with the Caesar cipher, letter substitution is still used to encrypt the plain text. The major difference in Vigenere is that rather than a fixed pattern of substitution, a keyword is used along with a [tabula recta](https://en.wikipedia.org/wiki/Tabula_recta) in order to produce the cipher text. The theory behind this approach is that only those also in possession of the keyword can decrypt the ciphertext.

<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-vigenere-cipher.png" alt="Simple graphic illustrating the mechanics of the Vigenere cipher" style="zoom:50%;" />

### Symmetric Key Encryption

Cryptography has evolved over time with regards to the complexity of encryption algorithms and the sophistication of encryption keys. Despite these advances, the underlying concept seen in the Vigenere cipher, whereby sender and receiver share a common encryption key, is still used in modern cryptographic systems. **A shared key** system such as this is known as symmetric key encryption.

Alice and Bob want to exchange messages securely. They both agree on a secret key and keep a copy of it. Alice can then encrypt a message using the key and send it to Bob. Bob can decrypt the message using the same key. The same process can be carried out in the other direction for messages that Bob sends to Alice.

<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-symmetric.png" alt="Simple Alice and Bob graphic illustrating the mechanics of symmetric key encryption" style="zoom:33%;" />

In order to work securely, this system relies on the sender and receiver both having access to the key and no one else being able to access it. 

What we need is a mechanism whereby we can encrypt the encryption key itself, so that even if it is intercepted it can't be used.

### Asymmetric Key Encryption

Asymmetric key encryption, also known as public key encryption, uses a *pair* of keys: a *public* key, and a *private* key. Unlike the symmetric system where the same key is used to encrypt and decrypt messages, in the asymmetric system the keys in the pair are non-identical: the public key is used to encrypt and the private key to decrypt.

The exact mechanism by which these keys are generated is beyond the scope of this course. The important thing to understand is that messages encrypted with the public key can *only* be decrypted with the private key. The public key is made openly available but the private key is kept in the sole possession of the message receiver.

Alice wants to receive encrypted messages. She generates a public key and a private key. She makes the public key available but keeps the private key to herself. Bob uses Alice's public key to encrypt a message and send it to Alice. Alice decrypts Bob's message using her private key.

<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-asymmetric.png" alt="Simple Alice and Bob graphic illustrating the mechanics of asymmetric key encryption" style="zoom:33%;" />

An important thing to note here is that this encryption is primarily intended to work in one direction. Bob can send Alice messages encrypted with the public key which she can then decrypt with the private one. The same key pair would not be used in the other direction for secure communication, since anyone with access to the public key can decrypt the message.

### The TLS Handshake

To securely send messages via HTTP we want both the request *and* the response to be encrypted in a such a way that they can only be decrypted by the intended recipient. The most efficient way to do this is via symmetric key cryptography. If we want to use symmetric keys however, we also need a way to securely exchange the symmetric key.

The clever thing about TLS is the way that it uses a combination of symmetric and asymmetric cryptography. The bulk of the message exchange is conducted via symmetric key encryption, but the initial symmetric key exchange is conducted using asymmetric key encryption. The process by which the initial secure connection is set up is conducted during what is known as the TLS handshake.

TLS assumes TCP is being used at the Transport layer, and the TLS Handshake takes place after the TCP Handshake. A step-by-step description of the TLS Handshake process might look something like this:

1. The TLS Handshake begins with a `ClientHello` message which is sent immediately after the TCP `ACK`. Among other things, this message contains the maximum version of the TLS protocol that the client can support, and a list of Cipher Suites that the client is able to use (we'll discuss Ciper Suites a little later on).
2. On receiving the `ClientHello` message, the server responds with a message of its own. This message includes a `ServerHello`, which sets the protocol version and Cipher Suite, as well as other related information. As part of this message the server also sends its certificate (which contains its public key), and a `ServerHelloDone` marker which indicates to the client that it has finished with this step of the handshake.
3. Once the client has received the `ServerHelloDone` marker, it will initiate the key exchange process. It's this key exchange process that ultimately enables both the client and server to securely obtain a copy of the symmetric encryption key that will be used for the bulk of the secure message transfer between the two parties. The exact process for generating the symmetric keys will vary depending on which key exchange algorithm was selected as part of the Cipher Suite (e.g. RSA, Diffie-Hellman, etc). You don't need to worry about the distinctions between these key exchange mechanisms, but as an example RSA works in the following way:
   - The client generates what's known as a 'pre-master secret', encrypts it using the server's public key, and sends it to the server.
   - The server will receive the encrypted 'pre-master secret' and decrypt it using its private key.
   - Both client and server will use the 'pre-master' secret, along with some other pre-agreed parameters, to generate the same symmetric key.
   - As part of the communication which includes the `ClientKeyExchange` message (e.g. the pre-master secret), the client also sends a `ChangeCipherSpec` flag, which tells the server that encrypted communications should now start using the symmetric keys. Additionally this communication includes a `Finished` flag to indicate that the client is now done with the TLS Handshake.

4. The server also sends a message with `ChangeCipherSpec` and `Finished` flags. The client and server can now begin secure communication using the symmetric key.

<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-encryption-tls-handshake.png" alt="Graphic illustrating the steps of TLS Handshake" style="zoom: 50%;" />

The key points to remember about the TLS Handshake process is that it is used to:

- Agree which version of TLS to be used in establishing a secure connection.
- Agree on the various algorithms that will be included in the cipher suite.
- Enable the exchange of symmetric keys that will be used for message encryption.

Something you should be aware of is that one of the implications of this complexity is its impact on performance. The TLS handshake can add up to two round-trip of latency (depending on the TLS version) to the establishment of a connection between client and server prior to the point where any application data can be sent. This is on top of the initial round trip resulting from the TCP Handshake.

Note: there is a protocol called **Datagram Transport Layer Security (DTLS)**, which is based on TLS. This protocol is specifically for use with network connections which use UDP rather than TCP at the Transport layer.

## Cipher Suites

During the description of the TLS Handshake, we mentioned Cipher Suites a few times. So what exactly is a Cipher Suite?

A *cipher* is a cryptographic algorithm; in other words they are sets of steps for performing encryption, decryption, and other related tasks. A *cipher suite* is a suite, or set, of ciphers.

TLS uses different ciphers for different aspects of establishing and maintaining a secure connection. There are various different algorithms for the performing the key exchange process, as well as for carrying out authentication, symmetric key encryption, and checking message integrity.

The algorithms for performing each of these tasks, when combined, form the *cipher suite*. The suite to be used is agreed as part of the TLS Handshake. As part of the `ClientHello` message, the client sends a list of algorithms it supports for each required task, and the server chooses from these according to which algorithms it also supports.