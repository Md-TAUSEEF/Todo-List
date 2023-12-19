import React, { useState } from 'react';
import './Todolist.css';
import { auth } from './Firebase'; // Import auth from the modular SDK
import { useNavigate } from 'react-router-dom';

export default function Todolist() {
  const [activity, setActivity] = useState('');
  const [listdata, setListdata] = useState([]);
  const navigate = useNavigate();

  const addActivity = () => {
    setListdata((prevListData) => {
      const updatedData = [...prevListData, activity];
      setActivity('');
      return updatedData;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listdata.filter((elem, id) => {
      return i !== id;
    });
    setListdata(updatedListData);
  };

  const removeAll = () => {
    setListdata([]);
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => navigate('/Login'))
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input
          type='text'
          placeholder='Add Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is your List :{')'}</p>

        {listdata.length !== 0 &&
          listdata.map((data, i) => (
            <div key={i}>
              <div className='listData'>{data}</div>
              <div className='btn-position'>
                <button onClick={() => removeActivity(i)}>remove (-)</button>
              </div>
            </div>
          ))}

        {listdata.length >= 1 && <button onClick={removeAll}>Remove All</button>}
      </div>
      <div className='signoutbtn'>
        <button onClick={handleSignOut}>Signout</button>
      </div>
    </>
  );
}
