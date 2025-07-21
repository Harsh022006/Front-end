import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, selectfilteredItems } from './searchSlice';

const Searchfilter = () => {
    const dispatch = useDispatch();
    const filteredItems = useSelector(selectfilteredItems);

    const handleChange = (e) => {
        dispatch(setSearch(e.target.value));
        console.log('Search:', e.target.value);
    };

    console.log('filtered Items:', filteredItems);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>React Redux Search Filter</h2>

            <input
                type="text"
                placeholder="Search Items..."
                onChange={handleChange}
                style={{
                    padding: '8px',
                    width: '250px',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                }}
            />
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, idx) => <li key={idx}>{item}</li>)
                ) : (
                    <li>No matching items found.</li>
                )}
            </ul>
        </div>
    );
};

export default Searchfilter;