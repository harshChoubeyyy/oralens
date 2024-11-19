import React, { useState, useEffect } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    file: null,
  });

 
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData({
        ...parsedData,
        file: null, 
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = () => {
   
    const { name, age } = formData; 
    const dataToStore = { name, age };
    localStorage.setItem('formData', JSON.stringify(dataToStore));
    alert('Form Data Saved to Local Storage!');
  };

  return (
    <div className="container">
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
      <h1>Healthcare Dashboard</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '100%' }}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '100%' }}
        />
      </label>
      <label>
        File:
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
      </label>
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Submit
      </button>
    </div>
    </div>
  );
};

export default App;


