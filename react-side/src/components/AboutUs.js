import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Company.css';

const AboutUs = () => {
    const navigate = useNavigate();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="about-us-container">
            <section className="about-us-content">
                <h1 className="about-us-heading">Hard work is hard enough</h1>
                <p className="about-us-text">
                    Almost 3 billion people in the world work hands-on jobs – they fix doors, clean floors, manage stores, load crates, guard gates, set plates...
                    Managing a business with employees like these is hard work – they have too many apps for work yet still lack the right ones.
                </p>
                <p className="about-us-text">
                    We developed <strong>one complete solution</strong> for managers to easily run everyday operations, share knowledge, keep teams connected, and focus on growing the business and the bottom line.
                </p>
            </section>
            <section className="about-us-images">
                <div className="about-us-image about-us-image1"></div>
                <div className="about-us-image about-us-image2"></div>
                <div className="about-us-image about-us-image3"></div>
            </section>
        </div>

        <div className="about-us-section">
        <div className="about-us-header">
            <h2>INNOVATING EVERYDAY WORK FOR</h2>
            <div className="about-us-categories">
                <div className="category">
                    <div className="icon">👔</div>
                    <h3>Managers</h3>
                    <p>Bringing clarity and simplicity for smarter, faster decisions</p>
                </div>
                <div className="category">
                    <div className="icon">👥</div>
                    <h3>Employees</h3>
                    <p>Providing tools to accelerate productivity and foster connectivity</p>
                </div>
                <div className="category">
                    <div className="icon">🏪</div>
                    <h3>Businesses</h3>
                    <p>Setting the foundation to focus on growth and fuel success</p>
                </div>
            </div>
        </div>

        <div className="about-us-stats">
            <h2>NUMBERS WE'RE PROUD OF</h2>
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-number">295M</div>
                    <p>Shifts scheduled</p>
                </div>
                <div className="stat-item">
                    <div className="stat-number">2.2M</div>
                    <p>Tasks completed</p>
                </div>
                <div className="stat-item">
                    <div className="stat-number">80</div>
                    <p>Countries served</p>
                </div>
                <div className="stat-item">
                    <div className="stat-number">1M</div>
                    <p>Active users</p>
                </div>
            </div>
        </div>
        </div>
        <div className='about-us-contact-us'>
            <button className="contact-us-button" onClick={() => navigate('/contact-us')}>
                <span>Contact Us</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </div>
        </>
    );
}

export default AboutUs;
