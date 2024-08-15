const mainCategories = [
    {
        title: 'Nmap Overview',
        subcategories: [
            {
                title: 'What is Nmap',
                description: `Nmap (Network Mapper) is a free and open-source tool used for network discovery and security auditing. It helps users identify active devices on a network, detect open ports, and determine which services and applications are running. Developed by Gordon Lyon (Fyodor), Nmap simplifies network mapping and port scanning, and has been featured in various media including "The Matrix" and "Mr. Robot".`,
                codeExamples: [],
                additionalPointstitle: [],
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
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Port Scanning Techniques',
                description: 'Port scanning helps discover open ports and services on a network. Here are some common techniques:',
                additionalPointstitle: ' Basic Port Scanning',
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
            {
                title: 'Analyzing Network Layer Using Wireshark',
                // description: 'Learn how to use Wireshark to analyze and troubleshoot network layer traffic.',
                description: 'We can also analyze troubleshoot network layer traffic using Wireshark.',
                codeExamples: [],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },

    {
        title: 'Scanning Techniques',
        subcategories: [
            {
                title: 'Scanning TCP and UDP Ports',
                description: 'Techniques for scanning both TCP and UDP ports to discover services and vulnerabilities. TCP implementation or related the <span class="font-semibold"> Department of Defense </span> organization. ',
                codeExamples: [
                    {
                        code: 'nmap 192.168.1.1',
                        description: 'We execute this it bydefault scanning TCP. also we have separate command <span class="font-semibold">nmap -sT 192.168.1.1 </span>'
                    },
                    {
                        code: 'nmap -sU 192.168.1.1',
                        description: 'We execute this it scanning UDP.'
                    },
                    {
                        code: 'nmap -sU -sT -p- 192.168.1.1',
                        description: 'We execute this it scanning UDP and TCP both at a time on all ports its time cunsuimg. <span class="text-red-400">Note: In real word if you can run this the Firewall will blocked you because its time cunsuimg scanning and its all ports scan.</span>'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: ['If you whant show results use wiershark'],
                images: [],
                links: []
            },

            {
                title: 'Top Headers',
                description: 'Identification and analysis of common network headers.',
                codeExamples: [],
                additionalPointstitle: [],
                additionalPoints: [
                    '<span class="font-semibold">SYN (Synchronize):</span> This is like sending a request to start a conversation. When one computer wants to connect with another, it sends a SYN packet to initiate the connection. If the other computer agrees, it responds with a SYN/ACK packet to confirm.',
                    '<span class="font-semibold">URG (Urgent):</span> This flag tells the receiving computer to prioritize certain data as urgent. If a packet has the URG flag set, it means the data should be processed immediately, even if there are other data packets waiting.',
                    '<span class="font-semibold">ACK (Acknowledgement):</span> This is a confirmation signal. When a computer receives data, it sends back an ACK packet to let the sender know that the data has been received successfully.',
                    '<span class="font-semibold">PSH (Push):</span> The PSH flag indicates that data should be sent to the receiving application right away. It’s like telling the computer to deliver the data immediately, rather than holding onto it for a while.',
                    '<span class="font-semibold">FIN (Finish):</span> When a computer wants to end a connection, it sends a FIN packet. This tells the other computer that it’s done with the conversation and wants to close the connection. If you see a packet with both SYN and FIN flags, it’s unusual and might indicate an attempt to attack.',
                    '<span class="font-semibold">RST (Reset):</span> This flag is used to reset or abort a connection. It often happens when a packet is sent to a closed port, signaling that the connection should be terminated. It can also be used to close a connection if something goes wrong.',
                ],
                images: ['../../../public/nmap/topheaders.svg'],
                links: []
            },
            {
                title: 'Complete 3 Way Handshake',
                description: `Three-way handshaking is a method used to establish a connection between two computers over a network.
                              This process ensures that both computers are ready to communicate and have agreed on the connection details before they start exchanging data. (You can Practice in Wireshark)`,
                codeExamples: [],
                additionalPointstitle: ['Here’s a simple explanation.'],
                additionalPoints: [`
                    <span class="font-semibold">STEP 1: A CONNECTION BETWEEN SERVER AND CLIENT IS ESTABLISHED - </span>First, a connection between server and client is established, so the target server must have open ports that can accept and initiate new connections. The client node sends a SYN (Synchronize Sequence Number) data packet over an IP network to a server on the same or an external network.
                                                        This SYN packet is a random sequence number that the client wants to use for the communication (for example, X). The objective of this packet is to ask/infer if the server is open for new connections..`,
                    `<span class="font-semibold">STEP 2: THE SERVER RECEIVES THE SYN PACKET FROM THE CLIENT NODE - </span> When the server receives the SYN packet from the client node, it responds and returns a confirmation receipt the ACK (Acknowledgement Sequence Number) packet or SYN/ACK packet. This packet includes two sequence numbers.
                                                        The first one is ACK one, which is set by the server to one more than the sequence number it received from the client (e.g. X+1).
                                                        The second one is the SYN sent by the server, which is another random sequence number (for example, Y).
                                                        This sequence indicates that the server correctly acknowledged the client's packet, and that is sending its own to be acknowledged as well..`,
                    `<span class="font-semibold">STEP 3: CLIENT NODE RECEIVES THE SYN/ACK FROM THE SERVER AND RESPONDS WITH AN ACK PACKET - </span>After the client receives the SYN/ACK from the server, it sends back an ACK packet with an incremented sequence number (Y+1). This process ensures both sides acknowledge each other’s sequence numbers. Once this exchange is complete, the connection is established, allowing for stable communication. This setup helps detect any missing or out-of-order segments before data transfer begins.`],
                images: ['../../../public/nmap/3wayhdsk.jpg'],
                links: []
            },
            {
                title: 'Network Discovery',
                description: 'Methods for discovering devices and services on a network.',
                codeExamples: [
                    {
                        code: 'nmap -sn 192.168.1.1',
                        description: 'This command is not scan ports its show Host is Up or Down. we also say it is a ping scanning'
                    },
                    {
                        code: 'sudo netdiscover -i (Your interface ex. eth0 or wlan0)',
                        description: 'This command is used to discover devices on a network by sending ARP requests and listening for responses. It helps identify active hosts and their IP addresses on the specified network interface (e.g., eth0 or wlan0).'
                    },
                    {
                        code: 'nmap -sn 192.168.1.1-255 --exclude 192.168.1.169',
                        description: 'This command performs a ping scan (`-sn`) to identify live hosts within the IP range 192.168.1.1 to 192.168.1.255, while excluding (avoid) the host with IP address 192.168.1.169 from the scan. It helps quickly determine which devices are active on the specified network range.'
                    },
                    {
                        code: 'nmap -sn -iL <filename>',
                        description: 'This command performs a ping scan (`-sn`) on a list of IP addresses or hostnames specified in a file (IPList.txt). It helps to identify which hosts in the provided list are online without performing a port scan.'
                    },
                    {
                        code: 'nmap -sn 192.168.1.1-255 --excludefile <filename>',
                        description: 'This command performs a ping scan (`-sn`) on the IP range 192.168.1.1 to 192.168.1.255, excluding hosts listed in (` NotScanIP.txt `). Its avoid files. IP address.'
                    },

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },


            {
                title: 'Nmap SYN, ACK, UDP, ARP Scan | -PS/PA/PU (Bypass Firewall)',
                description: 'Advanced scanning techniques using SYN, ACK, UDP, and ARP to bypass firewalls and other network defenses.Sometime you Try to ping any server.You wont get any kind of response form it Because might be due to firewall or something.Mostly its block your ICMP Pecket. that time we Perform these commands. ',
                codeExamples: [
                    {
                        code: 'nmap -Pn 192.168.1.1 192.168.1.22',
                        description: `This command is doesn't perform three way handshaking. You can still catch how many ports are open. this is the most used command in namp.`
                    },
                    {
                        code: 'nmap -sn -A 192.168.1.1',
                        description: 'This command is used when Your (`-sn`) firewall detect and not give result. that time Use these command it will send a RST packet.'
                    },
                    {
                        code: 'nmap -sn -PR 192.168.1.2',
                        description: `This command is use for send ARP ping scan. and its also show MAC address. <span class="text-red-500">Note: its only work when you in Local network or you can inside of Target network.</span>`
                    },
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap ICMP Timestamp, Traceroute, DNS Resolution | -PE/PP/PM ',
                description: 'Using Nmap for ICMP timestamp requests, traceroute, and DNS resolution to gather network information.',
                codeExamples: [
                    {
                        code: 'nmap -PE 192.168.1.1',
                        description: 'Sends ICMP echo request packets to the target to check if it is up. Can be used to measure round-trip time (RTT). <span class="text-red-500">Note: May bypass firewalls if the server is not properly configured.</span>'
                    },
                    {
                        code: 'nmap -PP 192.168.1.1',
                        description: 'Performs a ping scan using ICMP Timestamp Request packets to check if the host is up.'
                    },
                    {
                        code: 'nmap -PM 192.168.1.1',
                        description: 'Uses ICMP Port Unreachable packets to check if the target host is responsive.'
                    },
                    {
                        code: 'sudo nmap -sn nmap.scanme.org --traceroute',
                        description: 'Performs a ping scan (`-sn`) on the domain `nmap.scanme.org` and includes a traceroute to display the network path taken to reach the target.'
                    },
                    {
                        code: 'nmap -R 192.168.1.1',
                        description: 'Performs a reverse DNS lookup (`-R`) on the IP address 192.168.1.1 to find the hostname associated with it.'
                    }

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },

    {
        title: 'Advanced Nmap Usage',
        subcategories: [
            {
                title: 'Nmap Scanning Linux-Based Machines',
                description: 'Techniques and tips for scanning Linux-based systems with Nmap.',
                codeExamples: [],
                additionalPointstitle: ['Set Metasploitable Into VMware'],
                additionalPoints: [
                    'First You can goto the Locations where you download. then go view and Enable file name extension.',
                    'Then Double click to the <span class="text-yellow-600">Metasploitable.vmx</span> file'
                ],
                images: [],
                links: ['https://sourceforge.net/projects/metasploitable/files/latest/download']
            },
            {
                title: 'Nmap Port Specification and Scan Order',
                description: 'How to specify ports and control scan order in Nmap.',
                codeExamples: [
                    {
                        code: 'nmap -p 1-200 192.168.1.1',
                        description: 'Scans ports 1 through 200 on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'nmap -p 22,88,8080,135 192.168.1.1',
                        description: 'Scans specific ports 22, 88, 8080, and 135 on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -sU -p 53,67,69,123,161 192.168.1.1',
                        description: 'Performs a UDP scan on ports 53, 67, 69, 123, and 161 on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo -F 192.168.1.1',
                        description: 'Performs a scan on the top 100 most commonly used ports on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -F --exclude-ports 80,111,139 192.168.1.1',
                        description: 'Performs a fast scan of the most common ports, excluding ports 80, 111, and 139 on the target IP address 192.168.1.1.'
                    }

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap Scan Techniques (-sS, -ST, -SA, -SW, -SM)',
                description: 'Explanation of different Nmap scan techniques including SYN scan, TCP connect scan, and others.',
                codeExamples: [
                    {
                        code: 'nmap -sS -p 80 192.168.1.1',
                        description: 'Performs a SYN scan on port 80. It doesn\'t complete the TCP handshake, which can help avoid triggering some firewalls.'
                    },
                    {
                        code: 'nmap -sT -p 21 192.168.1.1',
                        description: 'Performs a TCP connect scan on port 21, completing the full TCP handshake.'
                    },
                    {
                        code: 'nmap -sA -p 21 192.168.1.1',
                        description: 'Performs a TCP ACK scan on port 21 to determine if the port is filtered or unfiltered.'
                    },
                    {
                        code: 'nmap -sW -p 21 192.168.1.1',
                        description: 'Performs a TCP window scan on port 21 to infer the presence of firewalls and packet filtering.'
                    },
                    {
                        code: 'nmap -sM -p 21 192.168.1.1',
                        description: 'Performs a TCP Maimon scan on port 21, which sends SYN, ACK, and FIN flags to probe the target.'
                    },
                    {
                        code: 'nmap -sX -p 21 192.168.1.1',
                        description: 'Performs a TCP Xmas tree scan on port 21 by sending packets with FIN, PSH, and URG flags set.'
                    }

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap OS and Service Detection, Aggressive Scan, Reason , UDP',
                description: 'Methods for detecting operating systems, services, and using aggressive scan options in Nmap.',
                codeExamples: [
                    {
                        code: 'nmap -O 192.168.1.1',
                        description: 'Detects the operating system of the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap --osscan-guess 192.168.1.1',
                        description: 'Attempts to guess the operating system of the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap --osscan-limit 192.168.1.1',
                        description: 'Performs an OS detection scan on the target IP address 192.168.1.1, limited to common operating systems.'
                    },
                    {
                        code: 'nmap -sV 192.168.1.1',
                        description: 'Detects and displays the versions of services running on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -sS -sV 192.168.1.1',
                        description: 'Performs a SYN scan to identify open ports and service versions on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -sS -sC -sV -o 192.168.1.1',
                        description: 'Performs a SYN scan with default scripts and service version detection on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -sS -A 192.168.1.1',
                        description: '<span class="text-red-500">Note: This scan is very noisy and can generate a lot of traffic. Use with caution.</span>'
                    },
                    {
                        code: 'sudo nmap -sU -p 137 192.168.1.1',
                        description: 'Performs a UDP scan on port 137 to check for Windows NetBIOS services on the target IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -sV -p 137 192.168.1.1 --reason',
                        description: 'Performs a service version scan (`-sV`) on port 137 of the target IP address 192.168.1.1 and provides an explanation for the scan results (`--reason`).'
                    }

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap Output and Verbosity',
                description: 'Understanding and customizing Nmap output and verbosity levels.',
                codeExamples: [
                    {
                        code: 'sudo nmap -sS -A 192.168.1.1 --reason -oA nmapscan',
                        description: 'Performs a SYN scan with OS detection and explanation for results. Saves output in all formats (XML, grepable, and normal) with the base name "nmapscan".'
                    },
                    {
                        code: 'sudo nmap -sS -A 192.168.1.1 --reason -oN nmap.txt',
                        description: 'Performs a SYN scan with OS detection and explanation for results. Saves output in a normal text file named "nmap.txt".'
                    },
                    {
                        code: 'sudo nmap -vv -sS -A 192.168.1.1 --reason -oN nmap.txt',
                        description: 'Performs a SYN scan with OS detection and explanation for results. Uses verbose mode (`-vv`) to provide more detailed output if you add more v then give more deeply output, saved in "nmap.txt".'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },


    {
        title: 'IDS Evasion Techniques',
        subcategories: [
            {
                title: 'Nmap IDS Evasion Null Scan',
                description: 'Techniques for evading Intrusion Detection Systems (IDS) using Null scans.',
                codeExamples: [
                    {
                        code: 'sudo nmap -sN 192.168.1.1',
                        description: 'Performs a Null scan by sending packets with no TCP flags set, which can sometimes evade (Intrusion detection systems)IDS/IPS (Intrusion prevention systems) systems. .'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []

            },
            {
                title: 'Nmap IDS Evasion Packet Fragmentation',
                description: 'Using packet fragmentation to evade IDS and firewalls.',
                codeExamples: [
                    {
                        code: 'nmap -f -p80 192.168.1.1',
                        description: 'Sends packets with fragmentation enabled on port 80. The packet size is 8 bytes by default, but it can be increased as needed.'
                    },
                    {
                        code: 'sudo nmap --mtu 16 -p80 192.168.1.1',
                        description: 'Uses a Maximum Transmission Unit (MTU) of 16 bytes for packet fragmentation on port 80. This can help evade firewalls by adjusting the packet size.'
                    }

                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap IDS Evasion FIN Scan',
                description: 'Evasion techniques using FIN scan to bypass network defenses.',
                codeExamples: [
                    {
                        code: 'nmap -sF 192.168.1.1',
                        description: 'Performs a FIN scan on the target IP address 192.168.1.1 by sending packets with the FIN flag set. This scan can help identify open ports by observing how the target responds.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap IDS Evasion XMAS Scan',
                description: 'Using XMAS scan to avoid detection by IDS systems.',
                codeExamples: [
                    {
                        code: 'nmap -sX 192.168.1.1',
                        description: 'Performs an Xmas tree scan by sending packets with FIN, PSH, and URG flags set. This scan can help identify open ports and may bypass some firewalls.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap IDS Evasion IP Spoofing (Decoy)',
                description: 'Techniques for using IP spoofing (Bunch of random IP address.) and decoys to evade detection.',
                codeExamples: [
                    {
                        code: 'nmap -D 192.168.1.22 192.168.1.1',
                        description: 'Uses a decoy IP address (192.168.1.22) to obscure the true source of the scan while targeting IP address 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -D RMD:10 192.168.1.1',
                        description: 'Uses randomized decoy IP addresses (10 different IPs) to obscure the source of the scan on the target IP address 192.168.1.1. <span class="text-red-500">Note: Your real IP address will be used at the end of the scan.</span>'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap IDS Evasion How to Detect Firewall',
                description: 'Techniques for detecting firewalls using Nmap IDS evasion methods.',
                codeExamples: [
                    {
                        code: 'nmap -sA 192.168.1.1',
                        description: 'Performs an ACK scan to map out firewall rules. If the output shows "unfiltered," it indicates that the target has no firewall filtering the port. If the output shows "filtered," it suggests that the port is being filtered by a firewall.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap IDS Evasion Mac Spoofing, IP Spoofing, Proxies',
                description: 'Techniques for evading network defenses using MAC and IP spoofing, proxies, and TTL manipulation.',
                codeExamples: [
                    {
                        code: 'sudo nmap -SpoofMac 00:11:22:33:44:55 192.168.1.1',
                        description: 'Performs a scan using MAC address spoofing with the specified address to evade MAC-based filtering. <span class="text-red-500">Note: This technique works only on local networks.</span>'
                    },
                    {
                        code: 'sudo nmap -S 192.168.2.1 192.168.1.1',
                        description: 'Uses IP spoofing to scan the target IP address 192.168.1.1, making it appear as if the scan is coming from IP address 192.168.2.1.'
                    },
                    {
                        code: 'sudo nmap -D RND:10 192.168.1.1',
                        description: 'Employs 10 random decoy IP addresses to obscure the true source of the scan while targeting 192.168.1.1.'
                    },
                    {
                        code: 'sudo nmap -p 80 --proxy http://proxyserver:port --ttl 64 192.168.1.1',
                        description: 'Scans port 80 on the target IP address 192.168.1.1 using a specified HTTP proxy server with a TTL of 64 to hide the true source of the scan and potentially evade detection.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },

    {
        title: "Nmap Timing Template TO, T1, T2, T3, T4, T5",
        description: "Overview of Nmap timing templates and their impact on scan performance, allowing users to adjust scan speed and stealth based on their needs.",
        subcategories: [
            {
                title: "Nmap Timing Templates",
                description: "Understanding Nmap timing templates helps in configuring scan performance to balance between speed and stealth. Each template adjusts the timing and rate of probes to suit different scanning needs.",
                codeExamples: [
                    {
                        code: "nmap -T0 192.168.1.1 --host-timeout 60m",
                        description: "Uses the T0 (paranoid) timing template for a very slow scan with a 60-minute timeout per host to ensure thorough scanning."
                    },
                    {
                        code: "nmap -T1 192.168.1.1 --scan-delay 1s",
                        description: "Uses the T1 (sneaky) timing template with a 1-second delay between probes to reduce the likelihood of detection."
                    },
                    {
                        code: "nmap -T2 192.168.1.1 --min-rate 10",
                        description: "Uses the T2 (polite) timing template with a minimum rate of 10 packets per second, balancing speed and stealth."
                    },
                    {
                        code: "nmap -T3 192.168.1.1 --max-rate 100",
                        description: "Uses the T3 (normal) timing template with a maximum rate of 100 packets per second, providing a balance between scan speed and network load."
                    },
                    {
                        code: "nmap -T4 192.168.1.1 --scan-delay 0.5s --min-rate 50",
                        description: "Uses the T4 (aggressive) timing template with a 0.5-second delay between probes and a minimum rate of 50 packets per second for faster scanning."
                    },
                    {
                        code: "nmap -T5 192.168.1.1 --scan-delay 0.1s --max-rate 200",
                        description: "Uses the T5 (insane) timing template with a 0.1-second delay between probes and a maximum rate of 200 packets per second for the fastest scan possible."
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },

    {
        title: "Nmap Scanning Techniques",
        subcategories: [
            {
                title: "Nmap Scanning Techniques",
                description: "Exploring advanced Nmap scanning techniques to perform stealthy and detailed scans while managing network impact and scan performance.",
                codeExamples: [
                    {
                        code: "nmap 192.168.1.1 -T1 --min-parallelism 1 -Pn",
                        description: "Performs a scan on the target IP address 192.168.1.1 using the T1 (sneaky) timing template for a slower and more stealthy scan. The `--min-parallelism 1` option limits the parallelism to 1 scan at a time, further reducing the scan speed. The `-Pn` option disables host discovery, treating all hosts as online."
                    },
                    {
                        code: "nmap --scan-delay 2s 192.168.1.1",
                        description: "Sets a 2-second delay between each probe to reduce network load and avoid detection. Combined with `-A` for enabling OS detection and version detection, `-T1` for a slow scan, `-Pn` to skip host discovery, and `-vvv` for increased verbosity, this command performs a thorough and stealthy scan while minimizing network impact and enhancing output details."
                    },
                    {
                        code: "nmap --host-timeout 30m 192.168.1.1",
                        description: "Sets a 30-minute timeout for each host, ensuring Nmap waits longer for responses before concluding that a host is down."
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            }
        ]
    },

    {
        title: 'Scripting and Enumeration',
        subcategories: [
            {
                title: 'Nmap Script Scanning',
                description: 'Nmap Script Scanning leverages the Nmap Scripting Engine (NSE) to automate various network scanning tasks and vulnerability assessments. By using a wide array of pre-built scripts, users can perform in-depth scans, discover vulnerabilities, gather additional information about services, and automate complex scanning processes. This feature enhances the power of Nmap, making it not only a port scanner but also a versatile tool for network exploration and security auditing.',
                codeExamples: [
                    {
                        code: 'ls -al /usr/share/nmap/scripts',
                        description: 'Lists available Nmap scripts, including hidden ones. This helps you view the scripts available for use.'
                    },
                    {
                        code: 'sudo nmap --script-updatedb',
                        description: 'Updates the Nmap script database to ensure you have the latest scripts available for your scans.'
                    },
                    {
                        code: 'ls -al /usr/share/nmap/scripts | grep "ftp"',
                        description: 'Lists all Nmap FTP scripts. and in  duble cuts enter name witchb scriopts you want'
                    },
                    {
                        code: "nmap -p21 --script=ftp-anon.nse 192.168.1.1",
                        description: "Scans port 21 (FTP) on the target IP address 192.168.1.1 using the `ftp-anon.nse` script. This script checks if the FTP server allows anonymous login, which can reveal potential security risks or misconfigurations in the FTP service."
                    },
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap Banner Grabbing',
                description: 'Techniques for banner grabbing to gather information about services.',
                codeExamples: [
                    {
                        code: 'ls -al /usr/share/nmap/scripts | grep "banner"',
                        description: ''
                    },
                    {
                        code: 'nmap -p- --script=banner.nse 192.168.1.1',
                        description: ''
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap Whois Lookup',
                description: 'Performing Whois lookups with Nmap for domain information.',
                codeExamples: [
                    {
                        code: "nmap -sn --script=whois-domain.nse microsoft.com",
                        description: "Performs a DNS query and uses the `whois-domain.nse` script to gather WHOIS information about the domain 'microsoft.com'. This script helps in identifying domain registration details and other related information."
                    },
                    {
                        code: "nmap -sn --script=whois-ip.nse 192.168.1.1",
                        description: "Uses the `whois-ip.nse` script to gather WHOIS information about the IP address '192.168.1.1'. This script provides details about the IP address's registration and ownership."
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap Subdomain Brute Force',
                description: 'Techniques for brute-forcing subdomains using Nmap. This Script you can download from github <a href="https://github.com/danielmiessler/SecLists.git" class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">Download</a>. Clode this <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600"> git clone url </sapan>. and ypu can also use inbilt kali wordlist. path is <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">ls -al /usr/share/nmap/scripts/</span>',
                codeExamples: [
                    {
                        code: "nmap --script=dns-brute.nse --script-args dns-brute.threads=100,dns-brute.hostlist=/usr/share/wordlists/dirbuster/directory-list-1.0.txt nmap.org",
                        description: "Uses the `dns-brute.nse` script to perform DNS brute-forcing on 'nmap.org'. The `--script-args` specify that 100 threads should be used for the brute-force process and that the script should use the specified wordlist ('/usr/share/wordlists/dirbuster/directory-list-1.0.txt') to enumerate subdomains."
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: ['https://nmap.org/nsedoc/scripts/dns-brute.html']
            },
            {
                title: 'Nmap Finding Hidden Directories',
                description: 'Using Nmap to discover hidden directories on web servers.',
                codeExamples: [
                    {
                        code: "nmap -p80 --script=http-enum.nse 192.168.1.1",
                        description: "Uses the `http-enum.nse` script to enumerate directories and files on the web server running on port 80 of '192.168.1.1'. This script helps in discovering hidden directories and common files."
                    },
                    {
                        code: "nmap -p80 --script=http* 192.168.1.1",
                        description: "Runs all Nmap scripts related to HTTP services on port 80 of '192.168.1.1'. This command utilizes any script in the Nmap script library that starts with 'http' to perform a comprehensive assessment of HTTP services."
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap How to Detect Web Firewalls',
                description: 'Techniques for detecting web application firewalls using Nmap.',
                codeExamples: [
                    {
                        code: "nmap -p80 --script=http-waf-detect.nse 192.168.1.1",
                        description:`Uses the 'http-waf-detect.nse' script to detect the presence of a Web Application Firewall (WAF) on port 80 of '192.168.1.1'. If a WAF is detected, it will show a message indicating the presence of a WAF. <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">http-waf-detect:</span>`
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Nmap MySQL Enumeration',
                description: 'Enumerating MySQL databases and services with Nmap.',
                codeExamples: [
                    {
                        code: 'ls -al /usr/share/nmap/scripts | grep "mysql"',
                        "description": "Lists all Nmap scripts related to MySQL to identify available MySQL-related scripts in the Nmap script directory."
                    },
                    {
                        code: "nmap -p3306 --script=<script-name>.nse 192.168.1.1",
                        description: 'Scans port 3306 on 192.168.1.1 using the specified MySQL script. Replace <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600"> script-name </span> with the actual script name identified from the previous command.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: []
            },
            {
                title: 'Vulnerability Scanning Using Nmap',
                description: 'Using Nmap for vulnerability scanning and assessment.',
                codeExamples: [
                    {
                        code: 'nmap -sV --script=vulners.nse 192.168.1.1',
                        description: 'Scans the target IP address (192.168.1.1) to detect vulnerabilities using the vulners script for version detection.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: ['During the scan, review the links provided to gain additional insights and learn more about the vulnerabilities detected.'],
                images: [],
                links: []
            },
            {
                title: 'Installing Webmap',
                description: 'Guide on installing and setting up Webmap for web application scanning.',
                codeExamples: [
                    {
                        code: 'sudo apt update -y && sudo apt upgrade -y',
                        description: 'Updates the package list and upgrades existing packages to ensure the system is up-to-date.'
                    },
                    {
                        code: 'sudo apt install docker.io -y',
                        description: 'Installs Docker, which is required to run the Webmap container.'
                    },
                    {
                        code: 'sudo systemctl enable docker',
                        description: 'Enables the Docker service to start on boot.'
                    },
                    {
                        code: 'sudo systemctl start docker',
                        description: 'Starts the Docker service. After running this command, use <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">ifconfig</span> to verify the Docker0 interface is active.'
                    },
                    {
                        code: 'sudo mkdir docker',
                        description: 'Creates a directory named `docker` for storing Docker-related files.'
                    },
                    {
                        code: `sudo docker run -d --name webmap -h webmap -p 8000:8000 -v /tmp/webmap:/opt/xml reborntc/webmap`,
                        description: 'Runs the Webmap container. After execution, wait for the download to complete. Verify successful download by running <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">sudo docker images</span> and ensure the Webmap image is listed.'
                    },                    
                    {
                        code: 'sudo docker ps -a',
                        description: 'Displays all Docker containers, including their status. Check for a container with <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">0000:8000</span>. Alternatively, you can access Webmap in a browser at <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">127.0.0.1:8000</span> or <span class="bg-gray-200 pl-2 pr-2 rounded-md text-purple-600">eth0IP:8000</span>.'
                    },
                    {
                        code: 'sudo docker exec -ti webmap /root/token',
                        description: 'Generates a token. Copy the token from the output and paste it into your browser to access Webmap.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [],
                images: [],
                links: [
                    'https://github.com/SabyasachiRana/WebMap.git'
                ]
            },                      
            {
                title:'Nmap Scanning and Generating a Report',
                description: 'Techniques for scanning with Nmap and generating detailed reports.',
                codeExamples: [
                    {
                        code: 'sudo nmap -sV --script=vulners 192.168.1.1 -oX web.xml',
                        description: 'Performs a scan using Nmap with version detection and vulnerability script, saving the output in XML format.'
                    }
                ],
                additionalPointstitle: [],
                additionalPoints: [
                    '1. First, perform scanning using Given command (You can modify this code as you need.).This command will take some time to complete. After the scan is finished, copy the XML file.',
                    '2. Navigate to the <span class="bg-gray-200 pl-2 pr-2 rounded text-purple-600">File System > temp </span>folder. Right-click the folder, open the terminal, and use <span class="bg-gray-200 pl-2 pr-2 rounded text-purple-600">sudo su</span> to gain superuser privileges. Then, move the XML file to the Webmap folder using the command: <span class="bg-gray-200 pl-2 pr-2 rounded text-purple-600" >mv web.xmlfile-path  /tmp/webmap </span>.',
                    '3. Open Webmap and You can see the file.',
                    // also do  <span class="bg-gray-200 pl-2 pr-2 rounded text-purple-600">File > Import > Open File</span> and select the xml file.
                    '4. Explore the results in Webmap and practice analyzing the data.'
                ],
                images: [],
                links: ['https://github.com/SabyasachiRana/WebMap.git']
            }            
        ]
    },

    // {
    //     title: 'Service and Protocol Enumeration',
    //     subcategories: [
    //         {
    //             title: 'FTP Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting FTP services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'SSH Enumeration and Exploitation Using msfconsole and Hydra',
    //             description: 'Using msfconsole and Hydra for SSH enumeration and exploitation.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Telnet Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation techniques for Telnet services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'SMTP Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting SMTP services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Port 80 Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation techniques for services running on port 80.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'NetBIOS Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting NetBIOS services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Rexec Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of Rexec services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Java RMI Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting Java RMI services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'MySQL Enumeration and Exploitation',
    //             description: 'Enumerating and exploiting MySQL services and databases.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'PostgreSQL Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of PostgreSQL services and databases.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'VNC Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting VNC services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'X11 Enumeration and Exploitation',
    //             description: 'Enumeration and exploitation of X11 services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Apache Tomcat Enumeration and Exploitation',
    //             description: 'Techniques for enumerating and exploiting Apache Tomcat services.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         },
    //         {
    //             title: 'Exploiting Ruby DRB Vulnerability',
    //             description: 'Exploiting the Ruby DRB (Distributed Ruby) vulnerability.',
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // },


    // {
    //     title: 'Other Topic Under Development..... :)',
    //     subcategories: [
    //         {
    //             title: [],
    //             description: [],
    //             codeExamples: [],
    //             additionalPointstitle: [],
    //             additionalPoints: [],
    //             images: [],
    //             links: []
    //         }
    //     ]
    // }
];

export default mainCategories;
