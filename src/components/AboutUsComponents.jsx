import react, { useEffect } from "react";
import "../styles/AboutUsComponents.css";
import SignUpButtonForAboutUs from './SignUpButtonForAboutUs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

   
        useEffect(() => {
            AOS.init();
        }, []);

    return (
    <main>
        <div className="text-center mt-5 mb-5">
            <div className="custom-aboutuscomponents-heading w-50 m-auto p-3">
                <h1> About Us </h1>
            </div>
            <div className="word-wrap w-50 fw-light m-auto ">
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Introduction</h3>
                        <li>Welcome to Faithful Companions Market</li>
                        <li>Dedicated to enhancing the bond between pets and their owners</li>
                        <li>One-stop online destination for pet lovers</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Our Mission</h3>
                        <li>Provide a comprehensive, enjoyable online shopping experience.</li>
                        <li>Cater specifically to pet owners' needs.</li>
                        <li>Offer quality products suitable for all pets.</li>
                        <li>Focus on ensuring pet health and happiness.</li>
                        <li>Commitment to honesty, integrity, and ethical practices in all our operations</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>What We Offer</h3>
                        <li>Wide variety of pets: dogs, cats, fish, birds</li>
                        <li>Extensive selection of pet accessories and food</li>
                        <li>User-friendly e-commerce platform with a focus on customer experience</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Our Values</h3>
                        <li>Trust and transparency in customer interactions</li>
                        <li>Compassion and care for all pets and their well-being</li>
                        <li>Commitment to customer satisfaction and building lasting relationships</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Our Team</h3>
                        <li>A group of passionate pet lovers and experts</li>
                        <li>Dedicated to providing expert advice and support</li>
                        <li>Constantly striving to improve our services and offerings</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Our Promise</h3>
                        <li>To deliver the best online shopping experience for pet-related needs</li>
                        <li>Ensuring a safe, secure, and enjoyable process for all our customers</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Community Engagement</h3>
                        <li>Active involvement in pet welfare and community events</li>
                        <li>Support and collaboration with local pet organizations</li>
                        <li>Regular updates and tips for pet care on our platform</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Future Goals</h3>
                        <li>Continuous expansion of product range and services</li>
                        <li>Innovating to meet the changing needs of pet owners</li>
                        <li>Strengthening our commitment to the pet-loving community</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Contact Us</h3>
                        <li>Open invitation for feedback and suggestions</li>
                        <li>Easy-to-use contact options: live chat, email, and a feedback form</li>
                        <li>Our team is always here to assist with any queries or concerns</li>
                    </ul>
                </div>
                <div className="p-3 custom-aboutuscomponents-body" data-aos="fade-bottom" data-aos-delay="200" data-aos-duration="1000">
                    <ul className="custom-aboutuscomponents-ulli">
                        <h3>Closing Note</h3>
                        <li>Thank you for choosing Faithful Companions Market</li>
                        <li>We look forward to being a part of your pet care journey</li>
                        <SignUpButtonForAboutUs />
                    </ul>
                </div>
            </div>
            
      </div>
    </main>
      
      
    )
  }

export default AboutUs;