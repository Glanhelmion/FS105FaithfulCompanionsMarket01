import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/TermsAndConditions.css";

const TermsAndConditions = () => {
  const webAppName = "Faithful Companion Market";

  const [TermsNConditions, setTCs] = useState([
    {
      TCs: "Acceptance of Terms",
      content: (
        <>
          By accessing and using <strong>{webAppName}</strong>, you accept and
          agree to be bound by the terms and provision of this agreement.{" "}
          <br></br>In addition, when using this website's particular services,
          you shall be subject to any posted guidelines or rules applicable to
          such services.{" "}
        </>
      ),
    },
    {
      TCs: "User Account",
      content: (
        <>
          For access to certain features of the website, you may be required to
          create an account. You agree to provide accurate and <br></br>complete
          information and keep this information up-to-date.{" "}
        </>
      ),
    },
    {
      TCs: "Privacy Policy",
      content: (
        <>
          Your use of our website is also governed by our Privacy Policy. Please
          review the policy for information on how we collect, use <br></br>and
          share your information.
        </>
      ),
    },
    {
      TCs: "Use of Website",
      content: (
        <>
          You agree not to use the website for any unlawful purpose or in any
          way that might harm, damage, or disparage any other party.
        </>
      ),
    },
    {
      TCs: "Product and Service Descriptions",
      content: (
        <>
          We strive to ensure that all details, descriptions, and prices of
          products are listed correctly, but errors may occur. <br></br>We
          reserve the right to correct any errors and to change or update
          information at any time without prior notice.
        </>
      ),
    },
    {
      TCs: "Sale of Animals",
      content: (
        <>
          The purchase of any pet is subject to specific regulations and will be
          completed in compliance with the relevant animal welfare legislation."
        </>
      ),
    },
    {
      TCs: "Intellectual Property Rights",
      content: (
        <>
          The content on this website, including text, graphics, logos, and
          images, is the property of <strong>{webAppName}</strong> <br></br>and
          is protected by copyright and trademark laws."
        </>
      ),
    },
    {
      TCs: "Limitation of Liability",
      content: (
        <>
          {webAppName} will not be liable for any consequential, incidental,
          indirect, exemplary, punitive, or special damages of any kind,{" "}
          <br></br>however caused."
        </>
      ),
    },
    {
      TCs: "Changes to Terms",
      content: (
        <>
          We reserve the right to modify these Terms at any time. Your continued
          use of the website following any changes means that you accept and
          agree to the changes."
        </>
      ),
    },
    {
      TCs: "Contact Us",
      content: (
        <>
          For any questions about these Terms, please{" "}
          <a href="/contactus" className="text-black contact-link">
            <strong>contact us</strong>
          </a>
        </>
      ),
    },
  ]);

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="policy-container">
      <Navbar />
      <h2 className="policy-title">
        Terms and Conditions for for Faithful Companion Market
      </h2>
      <h3 className="policy-date p-5 mt-5">Updated As Of {currentDate}</h3>
      <p className="p-5">
        Welcome to {webAppName}, the e-commerce platform dedicated to the care
        and fulfillment of your pet-related needs.
      </p>
      <div className="p-5">
        {TermsNConditions.map((policy, index) => (
          <div key={index} className="policy">
            <h3 className="policy-question">{policy.TCs}</h3>
            <p className="mt-4">{policy.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
