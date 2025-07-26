
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './SearchPage.css'; // for optional styling

// const SearchPage = () => {
//   const [query, setQuery] = useState('');
//   const [medicines, setMedicines] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem('token'); // moved inside useEffect

//     axios.get('https://localhost:7180/api/Medicine', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       setMedicines(res.data);
//       setFiltered(res.data);
//     })
//     .catch((err) => {
//       console.error('Error fetching medicines:', err);
//     });
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setQuery(value);
//     const result = medicines.filter((item) =>
//       item.name.toLowerCase().includes(value) ||
//       item.serialNumber.toLowerCase().includes(value) ||
//       item.category.toLowerCase().includes(value)
//     );
//     setFiltered(result);
//   };

//   return (
//     <div className="search-container">
//       <h2>Search Inventory</h2>
//       <input
//         type="text"
//         value={query}
//         onChange={handleSearch}
//         placeholder="Search by name, serial number, or category"
//         className="search-input"
//       />
//       <div className="card-grid">
//         {filtered.map((med) => (
//           <div className="medicine-card" key={med.id}>
//             <h4>{med.name}</h4>
//             <p>Serial #: {med.serialNumber}</p>
//             <p>Category: {med.category}</p>
//             <p>Stock: {med.stock}</p>
//             <p>Expiry: {med.expiryDate?.split('T')[0]}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get('q') || '';
  const [query, setQuery] = useState(queryParam);
  const [medicines, setMedicines] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('https://localhost:7180/api/Medicine', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      setMedicines(res.data);
      const result = res.data.filter((item) =>
        item.name.toLowerCase().includes(queryParam.toLowerCase()) ||
        item.serialNumber.toLowerCase().includes(queryParam.toLowerCase()) ||
        item.category.toLowerCase().includes(queryParam.toLowerCase())
      );
      setFiltered(result);
    })
    .catch((err) => {
      console.error('Error fetching medicines:', err);
    });
  }, [queryParam]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    const result = medicines.filter((item) =>
      item.name.toLowerCase().includes(value) ||
      item.serialNumber.toLowerCase().includes(value) ||
      item.category.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <div className="search-container">
      <h2>Search Inventory</h2>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search by name, serial number, or category"
        className="search-input"
      />
      <div className="card-grid">
        {filtered.map((med) => (
          <div className="medicine-card" key={med.id}>
            <h4>{med.name}</h4>
            <p>Serial #: {med.serialNumber}</p>
            <p>Category: {med.category}</p>
            <p>Stock: {med.stock}</p>
            <p>Expiry: {med.expiryDate?.split('T')[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
