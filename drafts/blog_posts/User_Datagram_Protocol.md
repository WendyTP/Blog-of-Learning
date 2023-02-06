## User Datagram Protocol (UDP)

Contrary to TCP, UDP is a connectionless system.

The Protocol Data Unit (PDU) of UDP is known as a Datagram. It also encapsulates data from the layer above into a payload and then adds header information.

![Diagram of a UDP datagram header, showing Source Port, Destination Port, UDP length, and Checksum fields](https://da77jsbdz4r05.cloudfront.net/images/ls170/transport-udp-datagram-header.png)

The header only has four fields: Source Port, Destination Port, UDP Length (the length, in bits, of the Datagram, including any encapsulated data), and a Checksum field to provide for error detection. 

(The Checksum field is optional if using IPv4 at the Network layer;  if using IPv6, you need to include a Checksum in the Datagram since IPv6 packets don't include one themselves.)

#### UDP functioning

Through the use of the Source and Destination Port numbers, UDP provides multiplexing in the same way that TCP does. Unlike TCP however, it doesn't do anything to resolve the inherent unreliability of the layers below it. I

Compared to TCP:

- UDP provides no guarantee of message delivery
- It provides no guarantee of message delivery order
- It provides no built-in congestion avoidance or flow-control mechanisms
- It provides no connection state tracking, since it is a connectionless protocol

#### The advantage of UDP

UDP is unreliable compared to TCP, however, it does have an advantage over TCP -- simplicity. This simplicity provides two things to a software engineer: **speed and flexibility**.

UDP is a connectionless protocol. Applications using UDP at the Transport layer can just start sending data without having to wait for a connection to be established with the application process of the receiver. 

In addition to this, the lack of acknowledgements and retransmissions means that the actual data delivery itself is faster; once a datagram is sent it doesn't have to be sent again. Latency is less of an issue since without acknowledgements **data essentially just flows one way: from sender to receiver**. 

The lack of in-order delivery also removes the issue of Head-of-line blocking (at least at the Transport layer).

#### The use case of UDP

It's likely that someone building a UDP-based application will want to implement some of the services that UDP doesn't natively provide. Which services those would be, and the way they're implemented, would be up to whoever was building the application though. 

For example, you might want your application to have in-order delivery, but at the same time not be worried about the occasional piece of lost data. You could implement sequencing, but choose not to implement data retransmission. The specifics of which services to include are in left up to the software engineer and can be implemented at the application level, effectively using UDP as a 'base template' to build on top of.

An example of such an application would be a voice or video calling application. The occasional piece of dropped data leading to a slightly glitchy call or a few pixels of video not rendering properly is worth the trade off of the speed provided by the protocol which allows the application to work even over long distances where there is high latency. Another example would be online gaming where the occasional loss of data causing a slight glitch is more acceptable than having significant lag in the gaming experience.

While UDP provides a lot of flexibility and freedom, with that freedom comes a certain amount of responsibility. 

There are various best practices that should be adhered to nevertheless. For example, it would be expected that your UDP-based application implements some form of congestion avoidance in order to prevent it overwhelming the network.