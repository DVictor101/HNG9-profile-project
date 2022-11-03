import React from "react";
import "./contactpage.scss";
import ContectHead from "./contactsection/contactus-header/contactus-header";
import ContactusForm from "./contactsection/contactus-form/contactus-form";
import Footer from "./footersection/footer";
import "./footersection/footer.scss";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <ContectHead />
      <ContactusForm />
      <Footer />
    </div>
  );
};
export default ContactPage;
