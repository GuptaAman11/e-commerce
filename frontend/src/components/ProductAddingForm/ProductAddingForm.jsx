import React, { useState } from 'react';
const ProductAddingForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      title,
      image,
    };
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      <label className="block text-sm font-medium text-gray-600">Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <label className="block text-sm font-medium text-gray-600 mt-4">Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <label className="block text-sm font-medium text-gray-600 mt-4">Title:</label>
      <input
        type="text" value={title} onChange={(e) => setTitle(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <label className="block text-sm font-medium text-gray-600 mt-4">Image:</label>
      <input
        type="text" value={image} onChange={(e) => setImage(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductAddingForm;
