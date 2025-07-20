import React, { useEffect, useState } from 'react'

;

const Que1 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await fetch('http://localhost:3000/admin');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);  
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  
  if (loading) return <div className="spinner">Loading...{loading}</div>;

  
  if (error) return <div className="error">Error: {error}</div>;

  
  return (
    <div className="data-container">
      {/* Customize this based on your data structure */}
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
};




export default Que1
