import React from 'react';
import myimg from '../../public/my.png';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen p-4">
            <div className="container mx-auto max-w-5xl bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl text-center font-extrabold text-purple-900 mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to our company! We specialize in delivering comprehensive cybersecurity education
                    designed to take you from a beginner to a master in the field. Our team of seasoned
                    experts is dedicated to providing in-depth, yet easy-to-understand content that empowers you
                    to navigate the complex world of cybersecurity with confidence. Whether you're just starting out or
                    looking to deepen your expertise, we offer a structured learning path that covers everything from
                    fundamental concepts to advanced techniques. Our mission is to equip you with the knowledge and skills
                    needed to protect and secure digital environments effectively, ensuring that you stay ahead in this ever-evolving field.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-semibold text-purple-900 mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            Our vision is to lead the cybersecurity education sector by continuously evolving our content and methods to meet
                            the dynamic needs of our learners. We are committed to fostering a culture of innovation and excellence,
                            ensuring that our resources and teachings stay at the cutting edge of the industry. By embracing new technologies and
                            approaches, we aim to deliver exceptional educational experiences that empower individuals and organizations to achieve
                            unparalleled cybersecurity proficiency and resilience.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-semibold text-purple-900 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to deliver comprehensive and cutting-edge cybersecurity education that empowers individuals and 
                            organizations to navigate and excel in the digital landscape. We are committed to providing clear, actionable 
                            insights and practical solutions, fostering a deep understanding of cybersecurity from foundational concepts to 
                            advanced techniques. Our goal is to build lasting relationships through exceptional support and by creating a learning 
                            environment where expertise meets excellence.
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
                                <p className="text-gray-600 text-[9px]">CEO | BSc IT, Cybersecurity Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
