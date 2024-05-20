import React, { useState } from 'react';
import axios from 'axios';
import copi from "./../../assets/copi.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/sendEmail', formData); // Send form data to the server
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <div className="bg-light p-3" style={{ minHeight: '40vh' }}>
            <div className="row">
                <div className="col-md-6  p-5 h-full">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <div className="text-start mt-3">
                            <button type="submit" className="btn text-light" style={{ backgroundColor: '#c19a6b ' }}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center" style={{ rotate: '-20deg' }}>
                    <img src={copi} alt="coffeeso image" className='animate__animated animate__infinite animate__rotateIn' />
                    <h1 className="pacifico-regular">CoffeeSo</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;
