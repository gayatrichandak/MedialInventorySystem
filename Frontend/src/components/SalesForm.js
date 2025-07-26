import React, { useState, useEffect } from 'react';

const SalesForm = ({ onSubmit, initialData = null, onCancel }) => {
  const [form, setForm] = useState({
    medicineName: '',
    quantity: '',
    date: '',
    totalPrice: ''
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="medicine-form">
      <input name="medicineName" value={form.medicineName} onChange={handleChange} placeholder="Medicine Name" required />
      <input name="quantity" value={form.quantity} onChange={handleChange} type="number" placeholder="Quantity" required />
      <input name="totalPrice" value={form.totalPrice} onChange={handleChange} type="number" placeholder="Total Price" required />
      <input name="date" value={form.date} onChange={handleChange} type="date" placeholder="Date" required />
      <button type="submit">{initialData ? 'Update' : 'Add'} Sale</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default SalesForm;
