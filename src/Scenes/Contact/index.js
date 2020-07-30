import React from 'react';
import Header from "../../Components/Header";
import Form from "./form";
import Footer from "../../Components/Footer";

function Contact(props) {
    return (
        <div className={'contact'}>
            <Header />
            <Form />
            <Footer />
        </div>
    );
}

export default Contact;