

import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import MedicineForm from '../components/MedicineForm';
import './Medicines.css';


const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const fetchMedicines = async () => {
    try {
      const res = await API.get('/Medicine');
      setMedicines(res.data);
    } catch (err) {
      console.error('Error fetching medicines', err);
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this medicine?')) return;
    try {
      await API.delete(`/Medicine/${id}`);
      fetchMedicines();
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (formData.id) {
        await API.put(`/Medicine/${formData.id}`, formData);
      } else {
        await API.post('/Medicine', formData);
      }
      fetchMedicines();
      setSelectedMedicine(null);
    } catch (err) {
      console.error('Save failed', err);
    }
  };

  return (
    <div className="medicine-container">
      <h2 className="medicine-title">Medicine Inventory</h2>

      <MedicineForm onSubmit={handleFormSubmit} medicine={selectedMedicine} />

      <table className="medicine-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Expiry</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.category}</td>
              <td>{med.quantity}</td>
              <td>{med.expiryDate?.split('T')[0]}</td>
              <td>₹ {med.price}</td>
              <td>
                <button onClick={() => handleEdit(med)}>Edit</button>
                <button onClick={() => handleDelete(med.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicines;
