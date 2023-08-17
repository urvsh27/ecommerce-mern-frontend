import React from 'react';
import Layout from '../components/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout  title = {'Contact us'}>
      <div className="row contactus m-4">
        <div className="col-md-6 page-left-text">
          <h1 className="p-2 text-black text-justify">Contact Us</h1>
          <p className="text-justify mt-2">
            If you have any query then feel free to call anytime.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        <div className="col-md-6">
        <img src="/images/contactus.jpeg" alt="contact-us" className="footer-page-image" />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
