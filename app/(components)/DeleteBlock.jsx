"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
require('dotenv').config()


const DeleteBlock = ({ id }) => {
  const [formData, setFormData] = useState({ name: '' });
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const AdminPsw = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
     e.preventDefault();
    if (formData.name !== AdminPsw) {
      alert(`Invalid password - ADMIN ACCESS DENIED`)
      setShowForm(false);
      router.refresh()
    } 
    else {
      alert(`Correct password - ADMIN ACCESS GRANTED`)
      await handleDelete()
    }
  };

  const deleteTicket = async () => {
    console.log(`Deleting ticket with id: ${id}`);
    setShowForm(true);
  };

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      setShowForm(false);  // Close the form after successful delete
      router.refresh();
    }
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <div>
      <FontAwesomeIcon 
        icon={faX} 
        className="text-red-400 hover:cursor-pointer hover:text-red-200" 
        onClick={deleteTicket} 
      />
      {showForm && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={closeModal}>X</button>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Enter password: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter password"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
              
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: 'blue-accent',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
  zIndex: 1001,
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
};

export default DeleteBlock;
