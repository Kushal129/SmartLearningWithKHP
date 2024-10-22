import React from 'react';
import myimg from '../../public/my.png';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen p-4">
            <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl text-center font-extrabold text-purple-900 mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to SmartLearning with KHP! We're dedicated to providing top-notch cybersecurity education,
                    guiding you from novice to expert. Our team of professionals offers clear, comprehensive content
                    to help you master the intricacies of cybersecurity. Whether you're starting out or advancing your skills,
                    our structured curriculum covers essential concepts and cutting-edge techniques. Our goal is to empower you
                    with the knowledge and practical skills needed to excel in the rapidly evolving field of cybersecurity.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-semibold text-purple-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            We aim to be the leading innovator in cybersecurity education, constantly adapting our content
                            and methods to meet industry demands. By leveraging cutting-edge technologies and approaches,
                            we strive to provide unparalleled learning experiences that equip individuals and organizations
                            with the tools to achieve cybersecurity excellence and resilience.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-semibold text-purple-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to deliver accessible, high-quality cybersecurity education that empowers learners
                            to thrive in the digital world. We provide clear, practical insights and solutions, fostering a
                            comprehensive understanding of cybersecurity principles. We're committed to building strong
                            relationships through exceptional support and creating an environment where expertise meets excellence.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-4">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Team Member 1 */}
                        <div className="overflow-hidden w-55">
                            <img src={myimg} alt="CEO | Kushal Pipaliya" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-md font-semibold text-purple-900">Kushal Pipaliya</h3>
                                <p className="text-gray-600 text-[9px]">CEO | Cybersecurity Expert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
