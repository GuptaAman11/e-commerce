import React, { useState } from 'react'; 
import { useAddProduct } from '../../hooks/Product';

const ProductAddingForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [cat, setCat] = useState('');
  const {addProduct} = useAddProduct()

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addProduct(name ,description ,price ,cat)

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

      <label className="block text-sm font-medium text-gray-600 mt-4">Price:</label>
      <input
        type="text" value={price} onChange={(e) => setPrice(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <label className="block text-sm font-medium text-gray-600 mt-4">Cat:</label>
      <input
        type="text"  onChange={(e) => setCat(e.target.value)}
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
