import codeimg1 from '../../Data/Sql_Injection/DVWAimg/codeimg1.png';
import codeimg2 from '../../Data/Sql_Injection/DVWAimg/codeimg2.png';
import id2img from '../../Data/Sql_Injection/DVWAimg/id2img.png';
import sql_leb_img1 from '../../Data/Sql_Injection/sqllebsimg/s1.png';

const sqlInjectionData = [
    {
        id: 1,
        title: "Installation DVWA in Kali Linux",
        description: "Damn Vulnerable Web Application, shorter DVWA, is a PHP/MySQL web application that is damn vulnerable. The main goal of this pentesting playground is to aid penetration testers and security professionals to test their skills and tools. In addition it can aid web devs better understand how to secure web apps, but also to aid students/teachers to learn all about web app security and possible vulnerabilities.",
        despoints: [],
        pointsTitle: "Steps to Install DVWA :",
        points: [
            '1: Open terminal and give root Permission <span class="text-purple-500">sudo apt update -y && sudo apt upgrade -y </span>.',
            '2: Open terminal and write this code <span class="text-purple-500"> sudo apt install docker.io </span>. for docker instatiation.',
            '3: Open terminal and write Below Commands.',
        ],
        code: [
            {
                title: '',
                code: 'git clone https://github.com/eystsen/pentestlab.git',
                codeimgs: []
            },
            {
                title: '',
                code: 'cd pentestlab',
                codeimgs: []
            },
            {
                title: 'Its show available pentest applications',
                code: './pentestlab.sh list',
                codeimgs: []
            },
            {
                title: '',
                code: './pentestlab.sh start dvwa',
                codeimgs: []
            },
            {
                title: 'After Installating dvwa, open your browser and open this.',
                code: ' http://127.8.0.1',
                codeimgs: []
            },
            {
                title: 'The Default username and password is ',
                code: 'admin | password',
                codeimgs: []
            }
        ],
        note: 'Note:- When you Successfully login then Scroll down and one button will be Must click. its Create/reset database. Then You again login.',
        subdesc: 'Now Its Successfully, in storming into your kali linux. when you need to use this Open browser and. write thsi url :- http://127.8.0.1 ',
        images: [
            // {
            //     src: "path_to_image_2.jpg",
            //     alt: "Description of Image 2"
            // }
        ]
    },

    {
        id: 2,
        title: "SQL Injection With DVWA",
        description: "SQL Injection is a vulnerability that allows attackers to manipulate SQL queries executed by a web application. This can lead to unauthorized access, data leaks, and other security issues. Below are some common SQL Injection tricks and techniques",
        despoints: [],
        pointsTitle: "Steps to Perform SQL Injection with DVWA :",

        points: [
            '1: Go to the Sql Injection Option. and you can see <span class="text-[#A1CC33] rounded-md bg-[#2f2f2f] p-1"> the Vulnerability: SQL Injection </span>',
            '2: Enter User ID: 1 in the input field. its give the some information. [ First name: Gordon Surname: Brown ]',
            '3: Then you have Run SQL injection. View source code button.',
        ],
        code: [
            {
                title: `Now Enter this 1 ' or '1' = '1  input Field Looks like this USER ID: <span class="text-black rounded-md px-2 py-1 bg-gray-200">1 ' or '1' = '1 </span>`,
                code: `Query looks: - SELECT first_name, last_name FROM users WHERE user_id = '1' or '1' = '1';`,
                codeimgs: [
                    {
                        src: codeimg1,
                        alt: "Example 1: SQL Injection with '1' OR '1' = '1"
                    }
                ]
            },
            {
                title: `Now Enter this ' UNION SELECT user , password FROM users# input Field Looks like this USER ID: <span class="text-black rounded-md px-2 py-1 bg-gray-200">' UNION SELECT user , password FROM users# </span>`,
                code: `Query looks: - SELECT first_name, last_name FROM users WHERE user_id = ' UNION SELECT user , password FROM users# '; `,
                codeimgs: [
                    {
                        src: codeimg2,
                        alt: "Example 1: SQL Injection with '1' OR '1' = '1"
                    }
                ]
            },
        ],
        note: 'NOTE: This is Low Level security you can update the security level and perfoem Sql injection queries.',
        subdesc: 'This Image represents the security level change setting page.',
        images: [
            {
                src: id2img,
                alt: "DVWA Security Level settings. LOW , HIGH , etc."
            },
        ]

    },

    {
        id: 3,
        title: " Sql Injection Vulnerability Attack Using Lab's",
        description: "We install a Lab into the Metasploit 2. and we can find vernability into that system.",
        despoints: [
            `1. First Open kali linux then open this link <a href="https://github.com/Audi-1/sqli-labs.git" class="px-1 rounded-md text-purple-500">Click.</a> and <span class="bg-gray-300 p-1 rounded-lg text-red-400">Note: got to <span class="bg-green-500 text-white rounded-lg px-1"><> code </span></span> button then click the <span class="font-bold">Download ZIP</span> option.`,


            '2. Now open terminal and give super user prmination. then write this Commands <span class="font-bold">cd Downloads</span>. Then enter this Command <span class="font-bold">sudo mv sqli-labs-master.zip /var/www/html/ </span>',

            '3. Then open terminal and changw the directory to <span class="font-bold">sudo cd /var/www/</span>. then start the service apache2 using this command <span class="font-bold">service apache2 start</span>',

            '4. Then enter this command <span class="font-bold">ifconfig</span> then its show interface list inside of you can consider eth0 and copy the Ip address <span class="font-bold ">ex. 192.168.?.?</span>.',

            `5. Then Open Metasploitable-2 machine  & Login default username and password is <span class="font-bold">msfadmin</span> | if you dont't have ? <a href="https://sourceforge.net/projects/metasploitable/files/latest/download" class="text-purple-500">Download.</a>`,

            `6. Then goto cd /var/www/ and Give sudo permission <span class="font-bold">sudo -s </span> . then ping the ip address <span class="font-bold">192.168.?</span> if you can see the response. then good to go.`,

            `7. Now we download the file from kali linux using this command <span class="font-bold">wget http://(ip)/sqli-labs-master.zip</span> then Verify it is download or not using <span class="font-bold">ls</span> command. then Unzip file <span class="font-bold">unzip sqli-labs-master.zip</span>.`,

            `8. Now Successfully install labs into Metasploitable machine. if we can use this then start Metasploitable and copy the ip address. then go to other machine and open browser and write Metasploitable ip address and /sqli-labs-master or copy this. <span class="font-bold">http://192.168.?.?/sqli-labs-master/</span>`,

        ],
        pointsTitle: "Use sql-labs-master stap by stap.",
        points: [
            `1. <span class="text-red-700">Note: If you first time open must follow this </span> first go to <span class="text-pink-400">Setup/reset Database for labs</span> then go back and downside we can show all labs.`,

            `<span class="font-bold">Now you can find Vulnerability into all this machines.</span>`
        ],
        code: [],
        note: "",
        subdesc: "",
        images: [
            {
                src: sql_leb_img1,
                alt: "sql_leb_img."
            },
        ]
    },


    // {
    //     id:,
    //     title: "",
    //     description: ".",
    //     despoints: [],
    //     pointsTitle: "",
    //     points: [],
    //     code: [],
    //     note: "",
    //     subdesc: "",
    //     images: []
    // },


];

export default sqlInjectionData;
