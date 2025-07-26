

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Sales.css';

// const Sales = () => {
//   const [sales, setSales] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [quantitySold, setQuantitySold] = useState('');
//   const [totalPrice, setTotalPrice] = useState('');
//   const [saleDate, setSaleDate] = useState('');
//   const [editId, setEditId] = useState(null);

//   const token = localStorage.getItem('token');
//   const api = axios.create({
//     baseURL: 'https://localhost:5001/api',
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   useEffect(() => {
//     fetchSales();
//   }, []);

//   const fetchSales = async () => {
//     try {
//       const response = await api.get('/sales');
//       setSales(response.data);
//     } catch (error) {
//       console.error('Error fetching sales:', error);
//     }
//   };

//   const handleAddOrUpdate = async () => {
//     if (!medicineId || !quantitySold || !totalPrice || !saleDate) return;

//     const saleData = {
//       medicineId: parseInt(medicineId),
//       quantitySold: parseInt(quantitySold),
//       totalPrice: parseFloat(totalPrice),
//       saleDate: new Date(saleDate).toISOString(),
//       storeId: 1,
//     };

//     try {
//       if (editId) {
//         await api.put(`/sales/${editId}`, { ...saleData, id: editId });
//       } else {
//         await api.post('/sales', saleData);
//       }
//       resetForm();
//       fetchSales();
//     } catch (error) {
//       console.error('Error saving sale:', error);
//     }
//   };

//   const handleEdit = (sale) => {
//     setEditId(sale.id);
//     setMedicineId(sale.medicineId);
//     setQuantitySold(sale.quantitySold);
//     setTotalPrice(sale.totalPrice);
//     setSaleDate(sale.saleDate.split('T')[0]);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await api.delete(`/sales/${id}`);
//       fetchSales();
//     } catch (error) {
//       console.error('Error deleting sale:', error);
//     }
//   };

//   const resetForm = () => {
//     setEditId(null);
//     setMedicineId('');
//     setQuantitySold('');
//     setTotalPrice('');
//     setSaleDate('');
//   };

//   return (
//     <div className="sales-container">
//       <h2 className="sales-heading">Sales Management</h2>

//       <div className="sales-form">
//         <input
//           type="number"
//           placeholder="Medicine ID"
//           value={medicineId}
//           onChange={(e) => setMedicineId(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Quantity Sold"
//           value={quantitySold}
//           onChange={(e) => setQuantitySold(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Total Price"
//           value={totalPrice}
//           onChange={(e) => setTotalPrice(e.target.value)}
//         />
//         <input
//           type="date"
//           value={saleDate}
//           onChange={(e) => setSaleDate(e.target.value)}
//         />
//         <button className="add-button" onClick={handleAddOrUpdate}>
//           {editId ? 'Update Sale' : 'Add Sale'}
//         </button>
//         {editId && <button onClick={resetForm} className="cancel-button">Cancel</button>}
//       </div>

//       <table className="sales-table">
//         <thead>
//           <tr>
//             <th>Medicine ID</th>
//             <th>Quantity</th>
//             <th>Total Price</th>
//             <th>Sale Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sales.map((sale) => (
//             <tr key={sale.id}>
//               <td>{sale.medicineId}</td>
//               <td>{sale.quantitySold}</td>
//               <td>{sale.totalPrice}</td>
//               <td>{new Date(sale.saleDate).toLocaleDateString()}</td>
//               <td>
//                 <button className="edit-btn" onClick={() => handleEdit(sale)}>Edit</button>
//                 <button className="delete-btn" onClick={() => handleDelete(sale.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Sales;

import React, { useEffect, useState } from 'react';
import './Sales.css';
import axios from '../api/axios';
import RevenueChart from '../components/RevenueChart';

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [medicineId, setMedicineId] = useState('');
  const [quantitySold, setQuantitySold] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [saleDate, setSaleDate] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchSales = async () => {
    try {
      const res = await axios.get('/sales');
      setSales(res.data);
    } catch (err) {
      console.error('Failed to load sales:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { medicineId, quantitySold, totalPrice, saleDate };

    try {
      if (editingId) {
        await axios.put(`/sales/${editingId}`, { id: editingId, ...payload });
      } else {
        await axios.post('/sales', payload);
      }

      clearForm();
      fetchSales();
    } catch (err) {
      console.error('Error submitting sale:', err);
    }
  };

  const handleEdit = (sale) => {
    setEditingId(sale.id);
    setMedicineId(sale.medicineId);
    setQuantitySold(sale.quantitySold);
    setTotalPrice(sale.totalPrice);
    setSaleDate(sale.saleDate.split('T')[0]);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure to delete this sale?')) return;
    try {
      await axios.delete(`/sales/${id}`);
      fetchSales();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const clearForm = () => {
    setMedicineId('');
    setQuantitySold('');
    setTotalPrice('');
    setSaleDate('');
    setEditingId(null);
  };

  const revenueData = () => {
    const result = {};
    sales.forEach((s) => {
      const month = new Date(s.saleDate).toLocaleString('default', { month: 'short' });
      result[month] = (result[month] || 0) + parseFloat(s.totalPrice);
    });
    return Object.keys(result).map((month) => ({
      month,
      revenue: result[month]
    }));
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="sales-page">
      {/* Heading */}
      <h2 className="page-title">Sales</h2>

      {/* Form */}
      <form className="sales-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Medicine ID"
          value={medicineId}
          onChange={(e) => setMedicineId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantitySold}
          onChange={(e) => setQuantitySold(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Total Price"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          required
        />
        <input
          type="date"
          value={saleDate}
          onChange={(e) => setSaleDate(e.target.value)}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add Sale'}</button>
        {editingId && <button type="button" onClick={clearForm}>Cancel</button>}
      </form>

      {/* Revenue Chart Section */}
      <h3 className="section-title">Monthly Revenue</h3>
      <div className="chart-wrapper">
        <RevenueChart data={revenueData()} />
      </div>

      {/* Sales Table */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Medicine ID</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Sale Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.medicineId}</td>
              <td>{sale.quantitySold}</td>
              <td>{sale.totalPrice}</td>
              <td>{new Date(sale.saleDate).toLocaleDateString()}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(sale)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(sale.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;

