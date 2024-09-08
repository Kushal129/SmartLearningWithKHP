import linux from '../public/Linux.png';
const ShortlyData = [
    {
        title: 'The Importance of Network Security',
        image: 'https://miro.medium.com/v2/resize:fit:727/1*lcIpELmVt8tJhXmjUBw8pg.png',
        description: 'An overview of why network security is crucial for protecting sensitive information and preventing unauthorized access. This includes common threats and best practices for securing a network.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '9:00 AM'
    },
    {
        title: 'Understanding Firewalls',
        image: 'https://www.compuquip.com/hs-fs/hubfs/images/blog-images/firewall-monitoring-best-practices.jpg?width=1800&name=firewall-monitoring-best-practices.jpg',
        description: 'Explains the role of firewalls in network security, including different types of firewalls, how they work, and their importance in filtering traffic and preventing attacks.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '10:00 AM'
    },
    {
        title: 'Introduction to VPNs',
        image: 'https://www.ipvanish.com/wp-content/uploads/2023/02/vpn-meaning_IPV-blog.png',
        description: 'Details the function of Virtual Private Networks (VPNs) in ensuring secure remote access and data protection over public networks. Discusses VPN types and encryption methods.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '11:00 AM'
    },
    {
        title: 'Network Protocols Overview',
        image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/05/Networking-Protocols.jpg',
        description: 'Covers fundamental network protocols such as TCP/IP, UDP, and HTTP. Provides insights into how these protocols facilitate communication and data transfer across networks.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '12:00 PM'
    },
    {
        title: 'The Role of Encryption in Networking',
        image: 'https://images.ctfassets.net/yewqr8zk7e5s/migrated-4572/61ee98fb5087c9873948b5473cfafb16/encryption-encoding-hashing.jpg',
        description: 'Discusses the principles of encryption and its critical role in protecting data transmitted over networks. Includes different encryption techniques and their applications.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '1:00 PM'
    },
    {
        title: 'Defending Against DDoS Attacks',
        image: 'https://www.getfoundquick.com/wp-content/uploads/2017/09/shutterstock_496665325-2.jpg',
        description: 'Explains Distributed Denial of Service (DDoS) attacks, including how they are executed and strategies for mitigating their impact on network availability and performance.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '2:00 PM'
    },
    {
        title: 'Network Segmentation Strategies',
        image: 'https://www.alvaka.net/wp-content/uploads/2021/07/Network_Segmentation.png',
        description: 'Explores network segmentation techniques and their benefits for improving network security. Discusses how segmentation helps in isolating sensitive data and limiting potential attack surfaces.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '3:00 PM'
    },
    {
        title: 'Implementing Zero Trust Architecture',
        image: 'https://utimaco.com/sites/default/files/2022-08/Utimaco_blog_zero_trust.jpg',
        description: 'Describes the Zero Trust Architecture model, which requires strict identity verification for every user and device attempting to access resources, regardless of their location.',
        additionalPoints: [],
        date: '2024-08-18',
        time: '4:00 PM'
    },
    {
        title: 'Understanding IP Header Structures',
        image: 'https://static.thegeekstuff.com/wp-content/uploads/2012/03/ip-header-2.png',
        description: 'Explains the structure of IP headers in network packets. IP headers contain critical information for routing and delivering packets across networks, such as source and destination IP addresses, packet length, and protocol type. Understanding these structures is essential for network troubleshooting and security.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '10:00 AM'
    },
    {
        title: 'TCP vs UDP: A Comparative Overview',
        image: 'https://www.freecodecamp.org/news/content/images/2021/07/udp-and-tcp-comparison.jpg',
        description: 'This comparison highlights the key differences between TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is a connection-oriented protocol that ensures reliable, ordered, and error-checked delivery of data between applications. In contrast, UDP is a connectionless protocol that offers faster data transfer but does not guarantee delivery or order. Understanding these differences is crucial for selecting the appropriate protocol based on application needs and network conditions.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '2:00 PM'
    },
    {
        title: 'Dark & Deep Web: Understanding the Layers of the Internet',
        image: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_640/https://s22908.pcdn.co/wp-content/uploads/2020/07/deep-web-iceberg.jpg',
        description: 'The deep web encompasses all online content not indexed by standard search engines, including private databases and fee-for-service sites. The dark web, a subset of the deep web, is accessible only through specialized networks like Tor and allows for anonymous communication and transactions. While the deep web enhances privacy and access to information, the dark web poses security risks and can be used for illicit activities, impacting overall internet quality.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '12:00 AM'
    },
    {
        title: 'Steps in Sending Data Over the Internet',
        image: 'https://img.freepik.com/premium-vector/technology-sending-data-files-internet-network-sending-files-via-email-system_111088-507.jpg',
        description: 'During the process of sending data over the Internet, the steps occur in the following order: 1. **DNS Resolution** - Resolving the domain name to an IP address. 2. **Routing** - Determining the path the data will take through the network. 3. **Data Transmission** - Sending the actual data to the destination.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '4:00 PM'
    },
    {
        title: 'List of TCP/IP Protocols',
        image: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/b/7/3/b73dc9c176_50175729_tcp.jpg',
        description: 'The following are key protocols in the TCP/IP protocol suite: TCP, UDP, IP, ICMP, ARP, SMTP, HTTP, FTP, SNMP, and DHCP.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '4:15 PM'
    },
    {
        title: 'Regional Internet Registries (RIRs)',
        image: 'https://www.nro.net/wp-content/uploads/RIR-Map-Website-1024x576.jpg',
        description: 'Regional Internet Registries (RIRs) manage the allocation and registration of IP addresses within their respective regions. Examples of RIRs include **ARIN** (American Registry for Internet Numbers) and **RIPE NCC** (Réseaux IP Européens Network Coordination Centre).',
        date: '2024-08-19',
        additionalPoints: [],
        time: '4:00 PM'
    },
    {
        title: 'IP Fragmentation',
        image: 'https://image.slideserve.com/1385714/ip-fragmentation-l.jpg',
        description: 'When a host dispatches an IP packet onto the network, its size must adhere to the maximum limit supported by the local network, known as the Maximum Transmission Unit (MTU). In Ethernet networks, the standard MTU is 1500 bytes. If a datagram size is smaller than or equal to the MTU, it is transmitted without fragmentation. If the datagram size exceeds the MTU, the router fragments the datagram into smaller pieces, each fitting within the MTU size.',
        date: '2024-08-19',
        additionalPoints: [],
        time: '4:40 PM'
    },
    {
        title: 'What is a Subnet?',
        image: 'https://grammartop.com/wp-content/uploads/2021/03/subnet-be9f63652366340caa7bfcbede74bda073bb974b.png',
        description: 'A subnet, or sub-network, is a segmented component within a larger network, representing a logical division of an IP network into smaller segments. For instance, a network with the IP address 192.168.1.0/24 can be divided into multiple subnets. By subnetting, you might create two subnets: 192.168.1.0/25 and 192.168.1.128/25. This division reduces broadcast traffic and improves efficiency. Organizations use subnets to manage large networks, such as creating separate subnets for different departments to enhance performance and simplify network management.',
        date: '2024-08-19',
        additionalPoints: [],
        time: '4:50 PM'
    },
    {
        title: 'What is a Subnet Mask?',
        image: 'https://www.labsrc.com/wp-content/uploads/2016/04/hi-subnetmask.png',
        description: 'A subnet mask is used to divide an IP network into subnets and helps routers route data packets to the correct destination within a network. It works alongside an IP address to define the network and host portions of an address. For example, with an IP address of 192.0.2.15 and a subnet mask of 255.255.255.0 (or /24), the network portion is 192.0.2.0. Routers use the subnet mask to determine the correct subnet for forwarding the packet. In this case, the subnet mask helps route the packet to the appropriate subnet where the destination IP address 192.0.2.15 resides.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '4:55 PM'
    },
    {
        title: 'IPv4 vs IPv6',
        image: 'https://www.setakit.com/wp-content/uploads/2022/05/IPV4-vs-IPV6.png',
        description: 'IPv4 and IPv6 are two versions of the Internet Protocol used to identify and locate devices on a network. IPv4, with a 32-bit address space, supports approximately 4.3 billion addresses, while IPv6, with a 128-bit address space, supports about 340 undecillion addresses, addressing the limitations of IPv4. IPv6 also includes improved features such as simplified header format, better support for Quality of Service (QoS), and built-in security with IPsec. Transitioning from IPv4 to IPv6 addresses the growing need for more IP addresses due to the increasing number of devices connected to the Internet.',
        additionalPoints: [],
        date: '2024-08-19',
        time: '5:00 PM'
    },
    {
        title: 'Sub-Netting & Super-Netting',
        image: 'https://cdn.comparitech.com/wp-content/uploads/2020/06/Supernetting-vs-Subnetting-diagram.jpg',
        description: 'Sub-Netting divides a large network into smaller subnets, which helps in better management and utilization of IP addresses. Super-Netting, on the other hand, merges multiple networks into a larger network, increasing the number of available host addresses and optimizing IP address allocation.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:05 AM'
    },
    {
        title: 'Types of Routing Protocols',
        image: 'https://cdn.educba.com/academy/wp-content/uploads/2019/05/Routing-Protocol.jpg',
        description: 'Routing protocols are categorized into two main types: Static and Dynamic. Static Routing involves manually adding routes to the routing table, suitable for small, stable networks. Dynamic Routing, on the other hand, automatically adjusts routing tables based on network conditions, making it ideal for larger, more complex networks with changing routes.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:08 AM'
    },
    {
        title: 'Understanding VLAN',
        image: 'https://nordvpn.com/wp-content/uploads/blog-featured-what-is-a-vlan.svg',
        description: 'A Virtual Local Area Network (VLAN) extends a LAN virtually, allowing devices across multiple networks to form a single logical network. VLANs simplify network management but can be challenging to configure individually in large networks.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:12 AM'
    },
    {
        title: 'VLAN Trunking Protocol (VTP)',
        image: 'https://www.networkacademy.io/sites/default/files/inline-images/VLANs%20on%20multiple%20switches%20without%20trunk.gif',
        description: 'VLAN Trunking Protocol (VTP) helps manage VLANs across multiple switches by designating one switch as a VTP server and others as VTP clients. VTP operates in three modes: Server (for adding, modifying, and deleting VLANs), Client (for receiving VLAN information but not modifying it), and Transparent (for local VLAN changes without affecting other switches).',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:16 AM'
    },
    {
        title: 'Network Address Translation (NAT)',
        image: 'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_01_MicrosoftTeams-image-242.jpg',
        description: 'Network Address Translation (NAT) allows a single public IP address to represent multiple private IP addresses. It conserves public IP addresses by translating internal network addresses to unique global addresses and hides the internal network for added security. NAT helps organizations avoid purchasing extra IP addresses by enabling multiple computers to share the same public IP address.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:20 AM'
    },
    {
        title: 'SSL/TLS VPN Overview',
        image: 'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/a/9/a9c1478f2dcc4cadc5c4b49660e641c3060843abb0c542daa779781acc8cd6aa/ssl-vpn-mc-slide1.png',
        description: 'SSL/TLS VPNs create a secure connection between your device and a VPN gateway through your web browser. This connection encrypts your data, making it safe from prying eyes. Even though the name includes SSL, today’s SSL VPNs actually use the more secure TLS protocol. They are easy to set up and use, and they help enforce access rules to keep things secure.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:25 AM'
    },
    {
        title: 'Types of SSL/TLS VPN',
        image: 'https://www.fortinet.com/content/dam/fortinet/images/cyberglossary/types-ssl-vpn.jpg',
        description: 'There are two main types of SSL/TLS VPNs: Portal VPN and Tunnel VPN. A Portal VPN gives you a web page with links to access your network resources. It’s easy to use but only supports one connection at a time and is best for browser-based access. A Tunnel VPN creates a secure path for your data, allowing multiple simultaneous connections to different resources, whether on your company’s network or in the cloud.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:30 AM'
    },
    {
        title: 'Routing Protocols for Internal Networks',
        image: 'https://simplificandoredes.com/wp-content/uploads/2023/08/routing_protocol_english.jpg',
        description: 'The routing protocols typically used for interior gateway routing within an Autonomous System (AS) are: OSPF (Open Shortest Path First), a link-state protocol ideal for large networks; RIP (Routing Information Protocol), a distance-vector protocol suitable for smaller networks; and EIGRP (Enhanced Interior Gateway Routing Protocol), a hybrid protocol combining link-state and distance-vector features. BGP (Border Gateway Protocol) is used for routing between different ASes, not within a single AS.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:33 AM'
    },
    {
        title: 'VPN Types Ranked by Security',
        image: 'https://yourvpnservice.com/wp-content/uploads/2018/03/what-is-vpn.png',
        description: 'Here is a list of common VPN types ranked from least secure to most secure: 1. **PPTP (Point-to-Point Tunneling Protocol)**: Least secure due to known vulnerabilities and outdated encryption methods. 2. **L2TP/IPsec (Layer 2 Tunneling Protocol with IPsec)**: More secure than PPTP as it combines L2TP with IPsec for better encryption, but still not as robust as OpenVPN. 3. **OpenVPN**: Most secure, offering strong encryption and high configurability, making it the best choice for secure communications.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '09:35 AM'
    },
    {
        title: 'SSL/TLS Protocols',
        image: 'https://learnwoo.com/wp-content/uploads/2021/04/SSL-TLC.png',
        description: 'SSL/TLS operates at the Transport Layer of the OSI model, providing encryption and secure communication for protocols like HTTP, FTP, and SMTP. While SSL (Secure Sockets Layer) is the predecessor of TLS (Transport Layer Security), both are crucial for securing data in transit across networks.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '10:00 AM'
    },
    {
        title: 'Firewall Protocols & Its Types',
        image: 'https://static.javatpoint.com/tutorial/firewall/images/types-of-firewall.png',
        description: 'Firewall protocols operate at different layers of the OSI model: \n\n- [ Link Layer : Defines the media access control (MAC) method and provides minor error-detection facilities. ] \n-  [ Network Layer: Specifies whole-network addressing schemes, routing, and network control schemes. ] \n- [ Transport Layer: Uses IP as the network protocol for transport protocols such as TCP, UDP, and ICMP. ]',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:00 PM'
    },
    {
        title: 'Understanding IDS & IPS',
        image: 'https://miro.medium.com/v2/resize:fit:743/1*AQjWHmXQaHCYJLpwqCvcAg.png',
        description: 'An Intrusion Detection System (IDS) detects vulnerability exploits against target applications or computers, while an Intrusion Prevention System (IPS) monitors for malicious activity and takes action to prevent it. IDS and IPS systems are crucial for monitoring networks, detecting incidents, logging information, preventing incidents, and reporting to security administrators. They help identify security policy issues and prevent attackers during network reconnaissance.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:10 PM'
    },
    {
        title: 'Types of Detection in IDS/IPS',
        image: 'https://i.ytimg.com/vi/cGIgJOICpX0/maxresdefault.jpg',
        description: 'IDS and IPS use two main types of detection: \n\n- **Signature-based Detection**: Notifies administrators of predefined signatures associated with known attacks. \n- **Anomaly-based Detection**: Monitors behavior patterns to detect new or unknown threats, making it more effective than signature-based systems for detecting novel attacks.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:15 PM'
    },
    {
        title: 'Types of IDS',
        image: 'https://st2.depositphotos.com/2547605/44074/v/450/depositphotos_440748738-stock-illustration-ids-intrusion-detection-system-acronym.jpg',
        description: 'IDS types include: \n\n- **Network Intrusion Detection Systems (NIDS)**: Monitors traffic through sensors placed on the network. \n- **Host Intrusion Detection Systems (HIDS)**: Monitors traffic on individual devices for more control. \n- **Protocol-based Intrusion Detection Systems (PIDS)**: Monitors traffic for specific application protocols, securing server communications. \n- **Application Protocol-based Intrusion Detection Systems (APIDS)**: Monitors traffic across multiple servers, focusing on application protocols. \n- **Hybrid Intrusion Detection Systems**: Combines features of multiple IDS types for comprehensive monitoring.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:05 PM'
    },
    {
        title: 'Understanding Network Packet Analysis',
        image: 'https://miro.medium.com/v2/resize:fit:393/1*lxFCPlDWGFK4UasVMP3Szg.png',
        description: 'Network Packet Analysis, or packet sniffing, involves intercepting and capturing real-time data as it moves across a network. This technique helps understand network activity, detect threats, and troubleshoot performance issues. Packet analysis follows three steps: Collecting raw data from the network, Converting it to a readable format, and Analyzing the details of protocols and configurations. It’s useful for network security, performance troubleshooting, and forensic investigations.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:30 PM'
    },
    {
        title: 'Steps in Network Packet Analysis',
        image: 'https://api.contentstack.io/v2/uploads/59837abdc4a37728602aa589/download?uid=blt7ec7626d9925ead1',
        description: 'The three common steps in network packet analysis are: \n\n- **Collect**: Choose a network interface to listen on and capture raw data. \n- **Convert**: Transform the binary data into a human-readable format. \n- **Analyze**: Examine the data to understand protocol details and network activity. This process helps in identifying unusual activity and troubleshooting network issues.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:35 PM'
    },
    {
        title: 'Applications of Network Packet Analysis',
        image: 'https://images.contentstack.io/v3/assets/blt28ff6c4a2cf43126/blt9ea70f86d8376c8a/6500fd206c15897946a30292/Packet_Analyzer_-_Network_Analysis_&_Scanning_Tool_0_Features_Array_Item_-_features_item_image.webp?auto=webp&disable=upscale&width=1920&quality=75',
        description: 'Network packet analysis can be used for various purposes including: \n\n- **Forensic Investigations**: To find evidence of nefarious online behavior, data breaches, and malware infections. \n- **Performance Troubleshooting**: To diagnose issues like packet loss or network latency. \n- **Security Monitoring**: To detect unauthorized access and intrusion attempts. \n- **Reconstructing Data**: To reconstruct files and documents sent over the network.',
        additionalPoints: [],
        date: '2024-08-23',
        time: '12:40 PM'
    },
    {
        title: 'Fixed Error Oh no! Something has gone wrong Kali Linux fixed',
        image: 'https://www.linux.org/attachments/screen-kali-2-jpg.14029/',
        description: 'Steps to resolve a common error in Kali Linux by updating and resetting the system. Follow these commands to fix the issue:',
        additionalPoints: [
            'First, run and then press `Ctrl + Alt + F2`',
            'sudo apt-get update -y',
            'sudo apt-get upgrade -y',
            'Reset Kali Linux to factory setting',
            'sudo apt-get install dconf-editor -y',
            'dconf reset -f /',
            'exit',
            'restart',
        ],
        date: '2024-08-31',
        time: '10:40 AM'
    },
    {
        title: 'What is Cloud Computing?',
        image: 'https://strucsoftsolutions.com/wp-content/uploads/2023/02/elements_of_cloud_computing_2021.png',
        description: 'Cloud computing delivers computing services like servers, storage, databases, networking, and more over the internet instead of local devices.',
        additionalPoints: [
            'On-demand self-service: Users can get services like storage or servers whenever they need without waiting for anyone.',
            'Broad network access: Cloud services are available anywhere using devices like phones, laptops, or tablets.',
            'Resource pooling: Cloud providers share resources like servers to serve multiple users, adjusting based on demand.',
            'Rapid elasticity: Cloud services can grow or shrink quickly based on how much you need.',
            'Measured service: You only pay for what you use, and the system tracks your usage automatically.'
        ],
        date: '2024-09-06',
        time: '10:00 AM'
    },
    {
        title: 'Four Pillars of Cloud Security',
        image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gP3iGEl2-7dZKzo92YFiIA.jpeg',
        description: 'Key components of cloud security to protect data and systems.',
        additionalPoints: [
            'Visibility and Compliance: Ensuring all assets are secure and follow the rules.',
            'Compute-based Security: Protecting systems and services in the cloud from threats.',
            'Network Protections: Securing traffic and data within the cloud.',
            'Identity and Access Management: Managing who can access what in the cloud.'
        ],
        date: '2024-09-06',
        time: '10:20 AM'
    },
    {
        title: 'Risks & Threats of Cloud Security',
        image: 'https://apac.lumen.com/wp-content/uploads/2023/06/Cloud-Security-Hero-1200x628.webp',
        description: 'Common risks that affect cloud security.',
        additionalPoints: [
            'System Misconfigurations: Mistakes like wrong settings can lead to security holes.',
            'Online Account Hacking: Weak passwords make it easy for hackers to get in.',
            'Zero-Day Attacks: Hackers exploit new weaknesses before they are fixed.',
            'Insider Threats: Employees may accidentally cause security problems.',
            'Malware: Cloud makes sharing easier, but also spreads malware.',
            'Data Loss: Hackers may delete or lock data for ransom, and errors during migration can cause data loss.'
        ],
        date: '2024-09-06',
        time: '12:00 PM'
    },
    {
        title: 'Understanding NTLM & Kerberos',
        image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*wrdvpUZwnG1slN0bCHqMGg.png',
        description: 'NTLM and Kerberos are protocols for user authentication.',
        additionalPoints: [
            'NTLM: An older protocol for user authentication, using password hashing.',
            'Kerberos: A newer protocol using tickets and encryption for secure authentication.',
            'NTLM v/s Kerberos: NTLM uses a 3-step process and password hashing, while Kerberos uses tickets and encryption for stronger security.'
        ],
        date: '2024-09-06',
        time: '10:40 PM'
    },
    {
        title: 'What are sid Security Identifiers?',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/getting_SID_command_line_1.jpg',
        description: 'SIDs are unique strings in Windows used to identify computers, users, and groups.',
        additionalPoints: [
            'Well-known SIDs: Predefined for specific roles like "Administrators" or "Everyone".',
            'Relative Identifier (RID): Unique part added to the domain SID.',
            'Security Account Manager (SAM): Root SID used to generate unique identifiers.',
            'Active Directory (AD): Based on domain SID with unique IDs for each object.',
            'Virtual Account (VA): SIDs for virtual accounts that run services separately.',
            'Command to check SID: Use "wmic useraccount get name,sid" in Command Prompt or check in "regedit" under HKEY_LOCAL_MACHINE > SOFTWARE > Microsoft > Windows NT > CurrentVersion > ProfileList.'
        ],
        date: '2024-09-06',
        time: '2:30 PM'
    },
    {
        title: 'Direct Sudo Login (Reset Password)',
        image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/09/Sudo-users.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5',
        description: 'Follow these steps to reset your password if you forget it.',
        additionalPoints: [
            '1. Shutdown Kali and press "e" to edit the boot options.',
            '2. Scroll down to the line starting with "ro quiet splash" and change it to "rw init=/bin/bash".',
            '3. Press "Ctrl + X" to boot into the command-line interface.',
            '4. Once in the CLI, type "passwd" to enter a new root password.',
            '5. After setting the new password, run "exec /sbin/init" to proceed with the boot.'
        ],
        date: '2024-09-07',
        time: '2:30 PM'
    },
    {
        title: 'Linux Init Commands',
        image: linux,
        description: 'Explanation of init commands for different system states.',
        additionalPoints: [
            'init 0 - Shut down the system',
            'init 6 - Restart the system',
            'init 1 - Single-user mode (maintenance mode)',
            'init 2 - Multi-user mode without networking',
            'init 3 - Multi-user mode with networking',
            'init 4 - Unused/Customizable mode',
            'init 5 - Multi-user mode with graphical interface'
        ],
        date: '2024-09-08',
        time: '12:30 PM'
    },
];

export default ShortlyData;
