import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';

const AdminKaliLinux = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(['']);
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleAddPoint = () => {
    setPoints([...points, '']);
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setPoints(newPoints);
  };

  const handleRemovePoint = (index) => {
    const newPoints = points.filter((_, i) => i !== index);
    setPoints(newPoints);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      points: points.filter(point => point.trim() !== ''),
      path: link,
      icon: image,
      date,
      time
    };
    
    // Show input data in alert box
    alert(JSON.stringify(formData, null, 2));

    // Here you would typically send the data to your backend or state management system
    console.log(formData);

    // Reset form after submission
    setTitle('');
    setDescription('');
    setPoints(['']);
    setLink('');
    setImage('');
    setDate('');
    setTime('');
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Kali Linux Content Management</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Points</label>
          {points.map((point, index) => (
            <div key={index} className="flex items-center mt-2">
              <input
                type="text"
                value={point}
                onChange={(e) => handlePointChange(index, e.target.value)}
                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => handleRemovePoint(index)}
                className="ml-2 p-2 text-red-600 hover:text-red-800"
              >
                <FaTrash />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddPoint}
            className="mt-2 flex items-center text-purple-600 hover:text-purple-800"
          >
            <FaPlus className="mr-1" /> Add Point
          </button>
        </div>

        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Path</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Icon URL</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <FaSave className="mr-2" /> Save Content
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminKaliLinux;
