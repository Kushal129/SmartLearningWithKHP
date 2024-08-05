import React, { useState, useEffect } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../public/kalilinuxinstall/1.png';
import img2 from '../../public/kalilinuxinstall/2.png';
import img3 from '../../public/kalilinuxinstall/3.png';
import img4 from '../../public/kalilinuxinstall/4.png';
import img5 from '../../public/kalilinuxinstall/5.png';
import img6 from '../../public/kalilinuxinstall/6.png';
import img7 from '../../public/kalilinuxinstall/7.png';
import img8 from '../../public/kalilinuxinstall/8.png';
import img9 from '../../public/kalilinuxinstall/9.png';
import img10 from '../../public/kalilinuxinstall/10.png';
import img11 from '../../public/kalilinuxinstall/11.png';
import img12 from '../../public/kalilinuxinstall/12.png';
import img13 from '../../public/kalilinuxinstall/13.png';
import img14 from '../../public/kalilinuxinstall/14.png';
import img15 from '../../public/kalilinuxinstall/15.png';
import img16 from '../../public/kalilinuxinstall/16.png';
import img17 from '../../public/kalilinuxinstall/17.png';
import img18 from '../../public/kalilinuxinstall/18.png';
import img19 from '../../public/kalilinuxinstall/19.png';
import img20 from '../../public/kalilinuxinstall/20.png';
import img21 from '../../public/kalilinuxinstall/21.png';

// Example dynamic data structure
const dynamicData = {
  topicName: 'Kali Linux Installation In VMware',
  logo: 'https://www.svgrepo.com/show/330767/kalilinux.svg',
  intro: `Kali Linux, formerly known as BackTrack Linux, is a versatile and freely accessible Debian-based Linux distribution designed for
  advanced penetration testing and security auditing. It supports multiple platforms, making it available to both professional cybersecurity experts and
  enthusiasts. This distribution is equipped with an extensive suite of tools, configurations, and scripts tailored specifically for 
  tasks such as computer forensics, reverse engineering, and vulnerability assessment. By providing these industry-specific resources, 
  Kali Linux allows users to concentrate on security-focused activities rather than peripheral concerns. Geared towards experienced penetration testers,
  Kali Linux's documentation presumes a foundational knowledge of Linux. For more insights into what sets Kali Linux apart, refer to the guide.`,
  topicContent: 'Installing Kali Linux into VMware Step by Step.',
  description: `
  <div class='text-left'>
    <p><strong>Step 1:</strong> Download and install VMware from the official website. 
    <a class='hover:text-blue-600 font-semibold' href='https://www.vmware.com/info/workstation-player/evaluation'>click</a></p>
    <p><strong>Step 2:</strong> Download the latest version of Kali Linux. 
    <a class='hover:text-blue-600 font-semibold' href='https://www.kali.org/get-kali/#kali-installer-images'>click</a></p>
    <p><strong>Step 3:</strong> Open VMware and click <span class='text-purple-600'>' Create a new virtual machine '</span>. Select <span class='text-purple-600'>' Typical '</span> then Next.</p>
    <p><strong>Step 4:</strong> Then Select <span class='text-purple-600'>' Installer disc image file (iso) -[2 option] '</span>. Then browse the Downloaded KaliLinux ISO image and Next.</p>
    <p><strong>Step 5:</strong> Select Linux and Version is Ubuntu 64-bit and Next.</p>
    <p><strong>Step 6:</strong> Give a Machine Name and Choose location Where you install Kali Linux.</p>
    <p><strong>Step 7:</strong> Give size for Kali Linux (at least 40GB) and select <span class='text-purple-600'>' Split virtual disk into multiple files '</span> then Next.</p>
    <p><strong>Step 8:</strong> Click <span class='text-purple-600'>' Finish '</span> and then Reopen VMware and Click your machine and <span class='text-purple-600'>' Power on '</span>.</p>
  </div>
  `,
  codeExamples: [
    {
      title: 'Update and Upgrade',
      code: "sudo apt update -y && sudo apt upgrade -y"
    },
  ],
  steps: [
    img1, img2,
    img3, img4, img5,
    img6, img7,
    img8, img9,
    img10, img11,
    img12, img13,
    img14, img15,
    img16, img17,
    img18, img19,
    img20, img21,
  ],
  videoUrl: 'https://www.youtube.com/embed/examplevideo'
};

const basicCommands = [
  {
    title: 'List Directory Contents',
    command: 'ls -l'
  },
  {
    title: 'Change Directory',
    command: 'cd [directory]'
  },
  {
    title: 'Copy Files or Directories',
    command: 'cp [source] [destination]'
  },
  {
    title: 'Move or Rename Files or Directories',
    command: 'mv [source] [destination]'
  },
  {
    title: 'Remove Files or Directories',
    command: 'rm [file]'
  },
  {
    title: 'Display File Contents',
    command: 'cat [file]'
  },
  {
    title: 'Search for a String in a File',
    command: 'grep [pattern] [file]'
  },
  {
    title: 'Install a Package',
    command: 'apt-get install [package]'
  },
  {
    title: 'Update Package Lists',
    command: 'apt-get update'
  },
  {
    title: 'Upgrade All Installed Packages',
    command: 'apt-get upgrade'
  },
  {
    title: 'Show Disk Usage',
    command: 'df -h'
  },
  {
    title: 'Show Free Memory',
    command: 'free -h'
  },
  {
    title: 'Display Current Working Directory',
    command: 'pwd'
  },
  {
    title: 'Show Process Information',
    command: 'ps aux'
  },
  {
    title: 'Terminate a Process',
    command: 'kill [PID]'
  },
  {
    title: 'Display System Information',
    command: 'uname -a'
  },
  {
    title: 'Create a Directory',
    command: 'mkdir [directory]'
  },
  {
    title: 'Remove an Empty Directory',
    command: 'rmdir [directory]'
  },
  {
    title: 'Change File Permissions',
    command: 'chmod [permissions] [file]'
  },
  {
    title: 'Change File Ownership',
    command: 'chown [user]:[group] [file]'
  },
  {
    title: 'Show Active Network Connections',
    command: 'netstat -tuln'
  },
  {
    title: 'Display Network Configuration',
    command: 'ifconfig'
  },
  {
    title: 'Test Network Connectivity',
    command: 'ping [hostname/IP]'
  },
  {
    title: 'Trace Network Route',
    command: 'traceroute [hostname/IP]'
  },
  {
    title: 'Check Disk Space Usage',
    command: 'du -sh [directory]'
  },
  {
    title: 'View Log Files',
    command: 'tail -f /var/log/[logfile]'
  },
  {
    title: 'Search for Files',
    command: 'find [directory] -name [filename]'
  },
  {
    title: 'Archive Files',
    command: 'tar -cvf [archive.tar] [files/directories]'
  },
  {
    title: 'Extract Files from Archive',
    command: 'tar -xvf [archive.tar]'
  },
  {
    title: 'Display Last Logged-In Users',
    command: 'last'
  }
];



const BasicCommandsSection = () => (
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-4">Basic Kali Linux Commands</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-gray-100 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">Command</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {basicCommands.map((cmd, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{cmd.command}</td>
              <td className="px-4 py-2">{cmd.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image Modal"
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    overlayClassName="fixed inset-0"
  >
    <div className="relative bg-white p-2 rounded-md max-w-4xl mx-auto">
      <button
        onClick={onRequestClose}
        className="absolute top-1 right-2 text-white hover:text-gray-300 text-2xl rounded-full p-2"
        aria-label="Close modal"
      >
        &times;
      </button>
      <img src={imageUrl} alt="Modal Content" className="max-w-full max-h-[80vh] object-contain" />
    </div>
  </Modal>
);

const CodeExample = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      (err) => alert('Failed to copy text: ', err)
    );
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 relative">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <pre className="bg-gray-800 text-white p-4 rounded whitespace-pre-wrap">{code}</pre>
      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded shadow-md hover:bg-purple-600"
      >
        {copied ? 'Copied' : <FaRegCopy />}
      </button>
    </div>
  );
};

const ImageGallery = ({ images, onImageClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {images.map((src, index) => (
      <div key={index} className="relative cursor-pointer" onClick={() => onImageClick(src)}>
        <img src={src} alt={`Step ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
        <div className="absolute bottom-0 left-0 rounded-r-lg bg-black text-white p-2 text-sm">
          Step {index + 1}
        </div>
      </div>
    ))}
  </div>
);

const KaliInstallationPage = () => {
  const { topicName, logo, topicContent, description, codeExamples, intro, steps, videoUrl } = dynamicData;
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    Modal.setAppElement('#root'); // Set the app element for accessibility
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="p-6 inline-block bg-gradient-to-b from-[#496ad7] via-transparent to-transparent min-h-screen rounded-lg" style={{ height: '80vh' }}>
      <header className="mb-6 text-center">
        <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{topicName}</h1>
      </header>
      <section className="mb-6">
        <p className="text-center text-gray-700 mb-4 text-md">{intro}</p>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{topicContent}</h2>
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
      </section>
      <section className="mb-6">
        <h1 className="text-3xl text-center font-bold mb-6">Kali Linux Installation Steps</h1>
        <p className="font-semibold text-gray-700 mb-5 text-md">Here are the steps to install Kali Linux:</p>
        <ImageGallery images={steps} onImageClick={openModal} />
      </section>

      {/* Uncomment this section if you want to include the video guide */}
      {/* <section className="mb-6">
        <h1 className="text-3xl text-center font-bold mb-6">Video Guide</h1>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section> */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
        <p className="font-semibold text-gray-700 mb-5 text-md">Open terminal and write this command.</p>
        {codeExamples.map((example, index) => (
          <CodeExample key={index} title={example.title} code={example.code} />
        ))}
      </section>
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} imageUrl={selectedImage} />

      <BasicCommandsSection />
    </div>
  );
};

export default KaliInstallationPage;
