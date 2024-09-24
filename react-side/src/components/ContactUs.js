import React from 'react';
import { useState, useEffect } from "react";
import './Company.css';

const ContactUs = () => {

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [contactUs, setContactUs] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value

        setContactUs({...contactUs, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send contactUs data to server here
        console.log(contactUs);
        // setContactUs({username: "", email: "", message: ""});
    }

    return (
        <div className="contact-us-container">
            <section className="contact-us-content">
                <h2>Let's Start a Conversation</h2>
            </section>
            <section className="section-contact">
                <div className="container grid grid-two-cols">
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" autoComplete="off" value={contactUs.username} onChange={handleInput}  required />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" autoComplete="off" value={contactUs.email} onChange={handleInput} required />
                            </div>

                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message" cols="30" rows="5" autoComplete="off" value={contactUs.message} onChange={handleInput} required></textarea>
                            </div>

                            <button type="submit">submit</button>
                        </form>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
