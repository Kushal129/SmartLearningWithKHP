const ports = [
    {
        number: 1,
        category: 'Networking',
        service: '<span class="font-semibold">ICMP Echo Reply</span>',
        description: '<span class="font-bold">ICMP Echo Reply</span> is used to respond to ICMP Echo Requests, typically used for testing network connectivity (ping).'
    },
    {
        number: 7,
        category: 'Networking',
        service: '<span class="font-semibold">ICMP Echo Request</span>',
        description: '<span class="font-bold">ICMP Echo Request</span> is used to request a response from a remote host, commonly used for testing network connectivity (ping).'
    },
    {
        number: 20,
        category: 'Networking',
        service: '<span class="font-semibold">FTP Data Transfer</span>',
        description: 'Used for <span class="font-bold">File Transfer Protocol (FTP)</span> data transfer. FTP control commands are handled on port 21.'
    },
    {
        number: 21,
        category: 'Networking',
        service: '<span class="font-semibold">FTP Control</span>',
        description: 'Handles <span class="font-bold">FTP control commands</span> used to manage file transfers over the network.'
    },
    {
        number: 22,
        category: 'Networking',
        service: '<span class="font-semibold">SSH</span>',
        description: 'Used for <span class="font-bold">Secure Shell (SSH)</span> access, providing encrypted communication for secure remote login and data transfer.'
    },
    {
        number: 23,
        category: 'Networking',
        service: '<span class="font-semibold">Telnet</span>',
        description: '<span class="font-bold">Telnet</span> provides unencrypted text communications. It is generally considered insecure due to lack of encryption.'
    },
    {
        number: 25,
        category: 'Email',
        service: '<span class="font-semibold">SMTP</span>',
        description: '<span class="font-bold">Simple Mail Transfer Protocol (SMTP)</span> is used for sending emails between servers.'
    },
    {
        number: 53,
        category: 'Networking',
        service: '<span class="font-semibold">DNS</span>',
        description: '<span class="font-bold">Domain Name System (DNS)</span> translates domain names (like www.example.com) into IP addresses needed for network communication.'
    },
    {
        number: 67,
        category: 'Networking',
        service: '<span class="font-semibold">DHCP Server</span>',
        description: '<span class="font-bold">Dynamic Host Configuration Protocol (DHCP)</span> server assigns IP addresses to client devices on a network.'
    },
    {
        number: 68,
        category: 'Networking',
        service: '<span class="font-semibold">DHCP Client</span>',
        description: '<span class="font-bold">DHCP Client</span> receives IP address assignments from the DHCP server.'
    },
    {
        number: 80,
        category: 'Web',
        service: '<span class="font-semibold">HTTP</span>',
        description: '<span class="font-bold">HyperText Transfer Protocol (HTTP)</span> is used for transmitting web pages and other content over the internet.'
    },
    {
        number: 110,
        category: 'Email',
        service: '<span class="font-semibold">POP3</span>',
        description: '<span class="font-bold">Post Office Protocol version 3 (POP3)</span> is used for receiving and downloading emails from a mail server to a client device.'
    },
    {
        number: 123,
        category: 'Networking',
        service: '<span class="font-semibold">NTP</span>',
        description: '<span class="font-bold">Network Time Protocol (NTP)</span> is used to synchronize the clocks of computers over a network, ensuring accurate timekeeping.'
    },
    {
        number: 135,
        category: 'Networking',
        service: '<span class="font-semibold">MS RPC</span>',
        description: '<span class="font-bold">Microsoft Remote Procedure Call (MS RPC)</span> is used for various Microsoft network services and remote management tasks.'
    },
    {
        number: 139,
        category: 'Networking',
        service: '<span class="font-semibold">NetBIOS Session</span>',
        description: '<span class="font-bold">NetBIOS Session Service</span> is used for session services in NetBIOS over TCP/IP, primarily for file and printer sharing.'
    },
    {
        number: 143,
        category: 'Email',
        service: '<span class="font-semibold">IMAP</span>',
        description: '<span class="font-bold">Internet Message Access Protocol (IMAP)</span> is used for accessing and managing emails on a mail server, allowing multiple devices to interact with the same mailbox.'
    },
    {
        number: 443,
        category: 'Web',
        service: '<span class="font-semibold">HTTPS</span>',
        description: '<span class="font-bold">HyperText Transfer Protocol Secure (HTTPS)</span> is a secure version of HTTP that encrypts data exchanged between web browsers and servers.'
    },
    {
        number: 3306,
        category: 'Database',
        service: '<span class="font-semibold">MySQL</span>',
        description: '<span class="font-bold">MySQL</span> database connections use this port to communicate with MySQL databases for data management.'
    },
    {
        number: 3389,
        category: 'Remote Access',
        service: '<span class="font-semibold">RDP</span>',
        description: '<span class="font-bold">Remote Desktop Protocol (RDP)</span> allows users to connect to and control remote computers over a network.'
    },
    {
        number: 5432,
        category: 'Database',
        service: '<span class="font-semibold">PostgreSQL</span>',
        description: '<span class="font-bold">PostgreSQL</span> database connections use this port for interaction with PostgreSQL databases.'
    },
    {
        number: 5900,
        category: 'Remote Access',
        service: '<span class="font-semibold">VNC</span>',
        description: '<span class="font-bold">Virtual Network Computing (VNC)</span> allows remote desktop access, enabling users to view and control their computers from another location.'
    },
    {
        number: 6379,
        category: 'Database',
        service: '<span class="font-semibold">Redis</span>',
        description: '<span class="font-bold">Redis</span> database connections use this port for interacting with Redis, an in-memory data structure store often used for caching.'
    },
    {
        number: 8080,
        category: 'Web',
        service: '<span class="font-semibold">HTTP Alternate</span>',
        description: '<span class="font-bold">HTTP Alternate</span> is often used as an alternative port for HTTP traffic, commonly employed for web servers running on non-standard ports.'
    },
    {
        number: 8443,
        category: 'Web',
        service: '<span class="font-semibold">HTTPS Alternate</span>',
        description: '<span class="font-bold">HTTPS Alternate</span> is used as an alternative port for HTTPS traffic, similar to port 443 but for different use cases or configurations.'
    },
    {
        number: 1521,
        category: 'Database',
        service: '<span class="font-semibold">Oracle DB</span>',
        description: '<span class="font-bold">Oracle Database</span> uses this port for client-server communication.'
    },
    {
        number: 27017,
        category: 'Database',
        service: '<span class="font-semibold">MongoDB</span>',
        description: '<span class="font-bold">MongoDB</span> uses this port for database communication.'
    },
    {
        number: 5000,
        category: 'Networking',
        service: '<span class="font-semibold">UPnP</span>',
        description: '<span class="font-bold">Universal Plug and Play (UPnP)</span> is used for network device discovery and management.'
    },
    {
        number: 9200,
        category: 'Search',
        service: '<span class="font-semibold">Elasticsearch</span>',
        description: '<span class="font-bold">Elasticsearch</span> uses this port for search and analytics services.'
    },
    {
        number: 10000,
        category: 'Administration',
        service: '<span class="font-semibold">Webmin</span>',
        description: '<span class="font-bold">Webmin</span> is a web-based interface for system administration.'
    },
    {
        number: 10001,
        category: 'Networking',
        service: '<span class="font-semibold">SCTP</span>',
        description: '<span class="font-bold">SCTP</span> (Stream Control Transmission Protocol) is a transport layer protocol used for network communication.'
    },
    {
        number: 6660,
        category: 'Chat',
        service: '<span class="font-semibold">IRC</span>',
        description: '<span class="font-bold">Internet Relay Chat (IRC)</span> is used for real-time text-based communication.'
    },
    {
        number: 6667,
        category: 'Chat',
        service: '<span class="font-semibold">IRC</span>',
        description: '<span class="font-bold">Internet Relay Chat (IRC)</span> is a popular port for IRC servers and clients.'
    }
];
export default ports;