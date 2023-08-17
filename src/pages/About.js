import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout title = {'About us'}>
      <div className="row contactus m-4">
        <div className="col-md-6 page-left-text">
          <h1 className="p-2 text-black text-justify">About Us</h1>
          <p className="text-justify mt-2">
          Welcome to TrendCart, your ultimate destination for fashion-forward shopping! Founded with a passion for style and innovation, TrendCart brings you a curated collection of the latest trends in clothing, accessories, and more. Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range of high-quality products that cater to diverse tastes and preferences. With a user-friendly interface powered by the MERN stack, we're dedicated to delivering convenience, inspiration, and top-notch customer service. Join us in exploring a world of fashion possibilities and express your unique style with TrendCart          </p>
        </div>
        <div className="col-md-6">
        <img src="/images/about.jpeg" alt="about" className="footer-page-image" />
        </div>
      </div>
    </Layout>
  );
};

export default About;
