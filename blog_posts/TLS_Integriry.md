## TLS Integriry

The Encryption and Authentication capabilities of TLS already provide us with a pretty secure system. To add a further layer of security, TLS provides the functionality to check the integrity of data transported via the protocol.

To get a clearer picture of how this functionality works, we need to take a step back and look at how the TLS protocol encapsulates data.

### TLS Encapsulation

The OSI model defines TLS as a Session layer protocol, and so existing in between Application layer (where HTTP resides) and the Transport layer (where TCP resides). Although, as previously stated, we're not too interested in the specifics of how the OSI Model defines these intervening layers, when thinking about TLS it can be useful to think of it as operating between HTTP and TCP.

Just like other protocols we've looked at in this course, TLS sends messages in a certain format. This format can vary depending on the the particular function that TLS is performing, but when it is transporting application data TLS encapsulates that data in the same way that we've seen with other Protocol Data Units. In other words, the data to be transported forms a payload, and meta data is attached in the form of header and trailer fields.



<img src="https://da77jsbdz4r05.cloudfront.net/images/ls170/tls-integrity-tls-record-structure.png" alt="Diagram showing structure of TLS record" style="zoom: 33%;" />



The main field that interests us in terms of providing message integrity is the `MAC` field.

### Message Authentication Code (MAC)

The `MAC` field is similar in concept to the checksum fields we've already seen in other PDUs, although there is a difference in implementation as well as overall intention. The checksum field in, say, a TCP Segment is intended for error detection (i.e. to test if some data was corrupted during transport). The intention of the `MAC` field in a TLS record is to add a layer of security by providing a means of checking that the message hasn't been altered or tampered with in transit.

The way this is implemented is through the use of a hashing algorithm. It works something like this:

1. The sender will create what's called a *digest* of the data payload. This is effectively a small amount of data derived from the actual data that will be sent in the message. The digest is created using a specific hashing algorithm combined with a pre-agreed hash value. This hashing algorithm to be used and hash value will have been agreed as part of the TLS Handshake process when the Cipher Suite is negotiated.
2. The sender will then encrypt the data payload using the symmetric key (as described earlier in the Encryption section), encapsulate it into a TLS record, and pass this record down to the Transport layer to be sent to the other party.
3. Upon receipt of the message, the receiver will decrypt the data payload using the symmetric key. The receiver will then also create a digest of the payload using the same algorithm and hash value. If the two digests match, this confirms the integrity of the message.

