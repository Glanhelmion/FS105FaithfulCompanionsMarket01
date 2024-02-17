import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/FAQ.css";

const FAQs = () => {
    
    const [faqs, setFaqs] = useState([
        
        { question: "SECTION: GENERAL FAQs | What is Faithful Companion Market?", answer: "Faithful Companion Market is an online platform dedicated to providing a diverse range of pets and pet-related products, including cats, dogs, birds, fishes, pet food, and accessories." },
        { question: "How do I create an account?", answer: "You can create an account by clicking the 'Sign Up' button on our homepage and following the simple registration process."},
        { question: "Is it safe to purchase on your website?", answer: "Absolutely! We use the latest security measures to ensure your personal information and payment details are secure."},
        { question: "SECTION: ABOUT PETS | Are the pets on sale healthy and vaccinated?", answer:"Yes, all pets are health-checked, vaccinated, and receive regular veterinary care."},
        { question: "Can I get advice on choosing the right pet?", answer:"Certainly! Our team of pet experts is available to help you select a pet that suits your lifestyle and preferences."},
        { question: "Do you provide pet registration and microchipping services?", answer:"Yes, we offer pet registration and microchipping services. Details can be found under our 'Services' section."},
        { question: "SECTION: Pet Food and Accessories | What types of pet food do you offer?", answer:"We offer a wide range of pet food for cats, dogs, birds, and fishes, including dry, wet, and specialized dietary options."},
        { question: "How do I know which pet food is right for my pet?", answer:"Our detailed product descriptions and expert advice can help you choose the best food for your pet's age, breed, and health needs."},
        { question: "What kind of pet accessories do you sell?", answer:"We sell a variety of accessories such as collars, leashes, beds, toys, grooming tools, and more, tailored for different types of pets."},
        { question: "SECTION: Ordering and Shipping | How do I place an order?", answer:"Simply add your desired items to the cart and proceed to checkout. You will be guided through the payment and shipping process."},
        { question: "What are the shipping options and costs?", answer:"We offer various shipping options, including standard and expedited. Shipping costs are calculated based on your location and the items' weight."},
        { question: "Can I track my order?", answer:"Yes, once your order is shipped, you will receive a tracking number to monitor its delivery status."},
        { question: "SECTION: Returns and Support | What is your return policy?", answer:"We accept returns within a specified period. Please refer to our return policy page for detailed information."},
        { question: "How can I contact customer support?", answer:"You can reach our customer support team via email, phone, or click on the Whatsapp icon"},
        { question: "Do you offer any guarantees or warranties on products?", answer:"Yes, we provide guarantees and warranties on certain products. Please check the product details for specific warranty information."},
    ]); 

    return (
        
        <div className="faq-container">
            <Navbar />
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="p-5">
            {faqs.map((faq, index) => (
                <div key={index} className="faq">
                    <h3 className="faq-question">{faq.question}</h3>
                    <p className="mt-4">{faq.answer}</p>
                </div>
            ))}
            </div>
            
            <Footer />
        </div>
    );
};

export default FAQs;