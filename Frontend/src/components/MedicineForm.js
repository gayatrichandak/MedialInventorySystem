import React, { useState, useEffect } from 'react';

const MedicineForm = ({ onSubmit, initialData = null, onCancel }) => {
  const [medicine, setMedicine] = useState({
    name: '',
    serialNumber: '',
    category: '',
    quantity: '',
    price: '',
    expiryDate: ''
  });

  useEffect(() => {
    if (initialData) {
      setMedicine(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(medicine);
  };

  return (
    <form onSubmit={handleSubmit} className="medicine-form">
      <input name="name" value={medicine.name} onChange={handleChange} placeholder="Name" required />
      <input name="serialNumber" value={medicine.serialNumber} onChange={handleChange} placeholder="Serial Number" required />
      <input name="category" value={medicine.category} onChange={handleChange} placeholder="Category" />
      <input name="quantity" value={medicine.quantity} onChange={handleChange} placeholder="Quantity" type="number" required />
      <input name="price" value={medicine.price} onChange={handleChange} placeholder="Price" type="number" required />
      <input name="expiryDate" value={medicine.expiryDate} onChange={handleChange} placeholder="Expiry Date" type="date" required />

      <button type="submit">{initialData ? 'Update' : 'Add'} Medicine</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default MedicineForm;
