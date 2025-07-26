import React, { useEffect, useState } from 'react'


const Spinner = () => <div>Loading...</div>;

const Que1 = () => {
  const [data, setData] = useState(null);     
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);     
        const response = await fetch('https://dummyjson.com/carts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);       
        setError(null);         
      } catch (err) {
        setError(err.message);
        setData(null);          
      } finally {
        setLoading(false);     
      }
    };

    fetchData();
  }, []);

  if (loading) return <Spinner />;

  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};



export default Que1

