const mainCategories = [
    {
        title: 'Nmap Overview',
        subcategories: [
            {
                title: 'What is Nmap',
                description: `Nmap (Network Mapper) is a free and open-source tool used for network discovery and security auditing. It helps users identify active devices on a network, detect open ports, and determine which services and applications are running. Developed by Gordon Lyon (Fyodor), Nmap simplifies network mapping and port scanning, and has been featured in various media including "The Matrix" and "Mr. Robot".`,
                codeExamples: [],
                additionalPointstitle : [],
                additionalPoints: [],

                images: [],
                links: []
            },
            {
                title: 'What is Port Scan',
                description: `Port scanning is a technique used to identify open ports and vulnerabilities in a network. Security professionals use it to assess network security, while hackers use it to find potential entry points. By sending signals to various ports, a scanner can determine which ones are open and potentially exploitable.`,
                codeExamples: [
                    {
                        code: 'nmap -p 1-65535 192.168.1.1',
                        description: 'Performs a full port scan on the specified IP address, scanning all 65,535 ports. [ -p Specify port range ]'
                    }
                ],
                additionalPointstitle : [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Port Scanning Techniques',
                description: 'Port scanning helps discover open ports and services on a network. Here are some common techniques:',
                additionalPointstitle : ' Basic Port Scanning',
                additionalPoints: [
                    'Ping Scan: Sends ICMP echo requests to determine which hosts are up.',
                    'Vanilla Scan: Connects to all 65,536 ports to identify open ones.',
                    'SYN Scan: Sends SYN packets to detect open ports without completing the handshake.',
                    'XMAS and FIN Scans: Uses specific flags to evade detection and gather system information.',
                    'FTP Bounce Scan: Leverages FTP servers to obscure the origin of the scan.',
                    'Sweep Scan: Sends traffic to ports across multiple systems to identify active hosts.'
                ],
                codeExamples: [],
                images: [],
                links: []
            },
            {
                title: '7 Layers of OSI Model',
                description: 'The OSI (Open Systems Interconnection) model is a framework for understanding how different network protocols interact. It is divided into seven layers, each with its specific function and role in the communication process.',
                additionalPoints: [
                    '<span class="font-bold">1. Physical Layer (Layer 1):</span> This layer deals with the physical connection between devices. It includes the hardware elements such as cables, switches, and the electrical signals transmitted over them.',
                    '<span class="font-bold">2. Data Link Layer (Layer 2):</span> Responsible for <span class="text-purple-500">node-to-node</span> data transfer, it handles error detection and correction from the Physical layer. It includes protocols like Ethernet and MAC addresses.',
                    '<span class="font-bold">3. Network Layer (Layer 3):</span> Manages packet forwarding, including routing through intermediate routers. The Internet Protocol (IP) operates at this layer.',
                    '<span class="font-bold">4. Transport Layer (Layer 4):</span> Ensures reliable data transfer between devices. It includes protocols such as TCP (Transmission Control Protocol) and UDP (User Datagram Protocol), which handle error recovery and data flow control.',
                    '<span class="font-bold">5. Session Layer (Layer 5):</span> Manages sessions or connections between applications. It is responsible for establishing, maintaining, and terminating connections.',
                    '<span class="font-bold">6. Presentation Layer (Layer 6):</span> Translates data formats between the application layer and the network. It handles data encryption, decryption, and compression.',
                    '<span class="font-bold">7. Application Layer (Layer 7):</span> The top layer where network services and applications interact with the network. It includes protocols like HTTP, FTP, and SMTP that provide network services to end-users.'
                ],
                codeExamples: [],
                images: ['https://media.fs.com/images/community/upload/kindEditor/202107/29/original-seven-layers-of-osi-model-1627523878-JYjV8oybcC.png'],
                links: []
            },                      
            // {
            //     title: 'Analyzing Network Layer Using Wireshark',
            //     description: 'Learn how to use Wireshark to analyze and troubleshoot network layer traffic.',
            //     codeExamples: [],
            //     additionalPointstitle : [],
            //     additionalPoints: [],
            //     images: [],
            //     links: []
            // }
        ]
    },

    // {
    //     title: 'Scanning Techniques',
    //     subcategories: [
    //         {
    //             title: 'Scanning TCP and UDP Ports',
    //             description: 'Techniques for scanning both TCP and UDP ports to discover services and vulnerabilities.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Top Headers',
    //             description: 'Identification and analysis of common network headers.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Complete 3 Way Handshake',
    //             description: 'Understanding and analyzing the TCP three-way handshake process.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Network Discovery',
    //             description: 'Methods for discovering devices and services on a network.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap SYN, ACK, UDP, ARP Scan (Bypass Firewall)',
    //             description: 'Advanced scanning techniques using SYN, ACK, UDP, and ARP to bypass firewalls and other network defenses.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap ICMP Timestamp, Traceroute, DNS Resolution',
    //             description: 'Using Nmap for ICMP timestamp requests, traceroute, and DNS resolution to gather network information.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },
    // {
    //     title: 'Advanced Nmap Usage',
    //     subcategories: [
    //         {
    //             title: 'Nmap Scanning Linux-Based Machines',
    //             description: 'Techniques and tips for scanning Linux-based systems with Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Port Specification and Scan Order',
    //             description: 'How to specify ports and control scan order in Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Scan Techniques (-sS, -ST, -SA, -SW, -SM)',
    //             description: 'Explanation of different Nmap scan techniques including SYN scan, TCP connect scan, and others.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap OS and Service Detection, Aggressive Scan, UDP',
    //             description: 'Methods for detecting operating systems, services, and using aggressive scan options in Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Range Scan, Results Diagnosis',
    //             description: 'How to perform range scans and analyze scan results effectively.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Output and Verbosity',
    //             description: 'Understanding and customizing Nmap output and verbosity levels.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },
    // {
    //     title: 'IDS Evasion Techniques',
    //     subcategories: [
    //         {
    //             title: 'Nmap IDS Evasion Null Scan',
    //             description: 'Techniques for evading Intrusion Detection Systems (IDS) using Null scans.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion Packet Fragmentation',
    //             description: 'Using packet fragmentation to evade IDS and firewalls.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion FIN Scan',
    //             description: 'Evasion techniques using FIN scan to bypass network defenses.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion XMAS Scan',
    //             description: 'Using XMAS scan to avoid detection by IDS systems.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion IP Spoofing (Decoy)',
    //             description: 'Techniques for using IP spoofing and decoys to evade detection.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion How to Detect Firewall',
    //             description: 'Techniques for detecting firewalls using Nmap IDS evasion methods.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap IDS Evasion Mac Spoofing, IP Spoofing, Proxies',
    //             description: 'Using MAC and IP spoofing, and proxies to evade network defenses.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },
    // {
    //     title: 'Timing and Performance',
    //     subcategories: [
    //         {
    //             title: 'Nmap Timing Template TO, T1, T2, T3, T4, T5',
    //             description: 'Overview of Nmap timing templates and their impact on scan performance.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Scan Delay and Host Timeout',
    //             description: 'Configuring scan delays and host timeouts to optimize Nmap performance.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },
    // {
    //     title: 'Scripting and Enumeration',
    //     subcategories: [
    //         {
    //             title: 'Nmap Script Scanning',
    //             description: 'Using Nmap scripting to automate and extend scanning capabilities.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Banner Grabbing',
    //             description: 'Techniques for banner grabbing to gather information about services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Whois Lookup',
    //             description: 'Performing Whois lookups with Nmap for domain information.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Subdomain Brute Force',
    //             description: 'Techniques for brute-forcing subdomains using Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Finding Hidden Directories',
    //             description: 'Using Nmap to discover hidden directories on web servers.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap How to Detect Web Firewalls',
    //             description: 'Techniques for detecting web application firewalls using Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap MySQL Enumeration',
    //             description: 'Enumerating MySQL databases and services with Nmap.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Vulnerability Scanning Using Nmap',
    //             description: 'Using Nmap for vulnerability scanning and assessment.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Installing Webmap',
    //             description: 'Guide on installing and setting up Webmap for web application scanning.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Nmap Scanning and Generating a Report',
    //             description: 'Techniques for scanning with Nmap and generating detailed reports.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },
    // {
    //     title: 'Service and Protocol Enumeration',
    //     subcategories: [
    //         {
    //             title: 'FTP Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting FTP services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'SSH Enumeration and Exploitation Using msfconsole and Hydra',
    //             description: 'Using msfconsole and Hydra for SSH enumeration and exploitation.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Telnet Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation techniques for Telnet services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'SMTP Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting SMTP services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Port 80 Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation techniques for services running on port 80.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'NetBIOS Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting NetBIOS services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Rexec Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of Rexec services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Java RMI Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting Java RMI services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'MySQL Enumeration and Exploitation',
    //             description: 'Enumerating and exploiting MySQL services and databases.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'PostgreSQL Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of PostgreSQL services and databases.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'VNC Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting VNC services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'X11 Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of X11 services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Apache Tomcat Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting Apache Tomcat services.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Exploiting Ruby DRB Vulnerability',
    //             description: 'Exploiting the Ruby DRB (Distributed Ruby) vulnerability.',
    //             codeExamples: [],
    //             additionalPointstitle : [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // }
];

export default mainCategories;
