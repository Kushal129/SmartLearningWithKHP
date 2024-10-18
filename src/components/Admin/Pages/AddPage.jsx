import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import MDEditor from '@uiw/react-md-editor';
import { storage } from '../../Admin/firebase';
import { ref, listAll, uploadString } from 'firebase/storage';

const AddPage = () => {
    const [fileName, setFileName] = useState('');
    const [content, setContent] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleFileNameSubmit = (e) => {
        e.preventDefault();
        if (!fileName.endsWith('.json')) {
            toast.error('File name must end with .json');
            return;
        }
        setIsEditing(true);
    };

    const handleSavePage = async () => {
        try {
            const pageRef = ref(storage, `Pages/${fileName}`);
            await uploadString(pageRef, content, 'raw');
            toast.success('Page created successfully!');
            setFileName('');
            setContent('');
            setIsEditing(false); // Reset editing mode after saving
        } catch (error) {
            console.error("Error saving page:", error);
            toast.error('Failed to save page.');
        }
    };

    return (
        <div className="w-full h-full p-4">
            <h1 className="text-3xl text-center font-bold mb-4">Add New Page</h1>
            {isEditing ? (
                <>
                    <MDEditor
                        value={content}
                        onChange={setContent}
                        height={400}
                        preview="edit" // Enable live preview
                        className="mb-4" // Margin bottom for spacing
                    />
                    <button
                        onClick={handleSavePage}
                        className="bg-green-500 text-white rounded-md p-2 mt-2 w-full transition duration-300 hover:bg-green-600"
                    >
                        Save Page
                    </button>
                </>
            ) : (
                <div className='p-5'>
                    <form onSubmit={handleFileNameSubmit}>
                        <input
                            type="text"
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Enter file name with .json"
                            className="border rounded-md p-2 mb-4 w-full"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md p-2 w-full transition duration-300 hover:bg-blue-600"
                        >
                            Next
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddPage;