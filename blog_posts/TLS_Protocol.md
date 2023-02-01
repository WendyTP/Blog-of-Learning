## Transport Layer Security (TLS) Protocol

The Transport Layer Security (TLS) protocol started life as a protocol called SSL (Secure Sockets Layer). Although it was standardised and renamed as TLS in 1999 by the IETF, the two terms are often still used interchangeably.

There are three important security services that are provided by TLS: **Encryption**, **Authentication**, and **Integrity**. Each of these services are important in their own right, but when combined they provide for very secure message exchange over what is essentially an unsecure channel. Let's look a bit more closely at the nature of these services.

**Encryption:** a process of encoding a message so that it can only be read by those with an authorized means of decoding the message

**Authentication:** a process to verify the identity of a particular party in the message exchange

**Integrity:** a process to detect whether a message has been interfered with or faked

It isn't mandatory for an application which uses TLS that all three of these services are used simultaneously. For example, you could design your application to accept encrypted messages from a sender without authenticating who they are. In practice however, all three services are generally used together to provide the most secure connection possible