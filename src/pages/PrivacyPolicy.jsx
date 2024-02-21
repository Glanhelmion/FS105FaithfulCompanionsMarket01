import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
    
    const webAppName = "Faithful Companion Market";

    const [privacypolicies, setprivacypolicy] = useState([
        
        { policies: "Information We Collect", content: ( <>When you engage with our Services, we may collect the following information: <br></br><strong>Personal Identification Information: </strong>Name, shipping address, billing address, email address, and telephone number. <br></br> <strong>Payment Information: </strong> Credit card details or payment service provider information, which is processed by our secure payment gateway and is not stored on our servers. <br></br><strong>Pet Information: </strong>Details about the pets you are interested in or purchase. <br></br><strong>Usage Data: </strong>Information on how you interact with our Services, which may include dates and times of access, page views, and navigation paths. <br></br><strong>Communications: </strong>Any communication with us via emails, phone calls, or other methods. </> )},
        { policies: "How We Use Your Information", content: ( <>Your information is used for the following purposes: <br></br><strong>To facilitate the purchase and delivery of your selected pets and products.</strong> <br></br><strong>To communicate with you regarding your account or transactions with us.</strong> <br></br><strong>To ensure the security of our Services.</strong> <br></br><strong> To maintain appropriate business records.</strong> <br></br><strong> To improve and personalize your experience with our Services.</strong> <br></br><strong> For customer support purposes. For compliance with our legal obligations.</strong> <br></br> </> )},
        { policies: "Sharing Your Information", content: (<>We do not sell or rent personal information to third parties. We may disclose your information, to service providers who assist us in running our Services and who are <br></br> bound by confidentiality agreements, if required by law or to protect the rights and safety of {webAppName}, our customers, or others, In connection with <br></br> a business transfer, such as a merger or acquisition.</>)},
        { policies: "Data Retention", content: (<>We retain your information as long as necessary to provide you with the Services you use, to comply with our legal obligations, to resolve disputes, and to enforce <br></br> our policies.</>)},
        { policies: "Security of Your Information", content: (<>We employ security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. However, no method of <br></br> transmission over the Internet is entirely secure.</>)},
        { policies: "Your Rights", content: "Depending on your location, you may have the right to access, correct, delete, or restrict the use of certain personal information we hold about you." },
        { policies: "Children’s Privacy", content: "Our Services do not address anyone under the age of 13. We do not knowingly collect personal information from children under 13." },
        { policies: "Changes to This Privacy Policy", content: "We may update this Privacy Policy from time to time. The updated version will be indicated by an updated “Last updated” date." },
        { policies: "Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at [Insert Contact Information]." },
    ]); 

    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const webAppURL = <a href="http://localhost:3000/" className="fw-bold text-black fs-5">website</a>

    return (
        
        <div className="policy-container">
            <Navbar />
            <h2 className="policy-title">Privacy Policy for Faithful Companion Market</h2>
            <h3 className="policy-date p-5 mt-5">Updated As Of {currentDate}</h3>
            <p className="p-5">Welcome to {webAppName} (“we”, “us”, “our”), an ecommerce platform dedicated to the well-being and care of pets. 
               Your privacy is of paramount importance to us.
               <br></br>
               This Privacy Policy describes our practices concerning the information collected through our {webAppURL},
               including but not limited to personal information about individuals who 
               <br></br>
               purchase pets, pet food, and accessories 
               from us (collectively, “Services”).
            </p>
            <div className="p-5">
            {privacypolicies.map((policy, index) => (
                <div key={index} className="policy">
                    <h3 className="policy-question">{policy.policies}</h3>
                    <p className="mt-4">{policy.content}</p>
                </div>
            ))}
            </div>
            
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;