import React, { useState } from 'react';
import Navbar from '../components/Navbar';   
import MainBanner from '../components/MainBanner'; 
import SignUpButton from '../components/SignUpButton'; 
import PageUnderDevelopment from '../components/PageUnderDevelopment'; 
import "../styles/Contact.css";





function ContactUsForm() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form data here, such as sending it to a server or displaying it
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;




// In case if need to use back, otherwise ignore

// const Contact = () => {
//   return (
//       <>
//       <Navbar />
//       <MainBanner />
//       <SignUpButton />
//       <PageUnderDevelopment />
//     </>
//   )
// }