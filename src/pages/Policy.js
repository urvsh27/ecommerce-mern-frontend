import React from 'react';
import Layout from '../components/Layout';

const Policy = () => {

  return (
    <Layout  title = {'Privacy Policy'}>
      <div className="row contactus m-4">
        <div className="col-md-6 page-left-text">
          <h1 className="p-2 text-black text-justify">Privacy Policy</h1>
          <p className="text-justify mt-2">
          "At TrendCart, we prioritize the security and privacy of our users. We collect only essential personal information to facilitate seamless shopping experiences and order processing. This data is handled with utmost confidentiality, never shared with third parties for marketing, and is protected by industry-standard security measures. Your trust matters to us, and we're committed to safeguarding your personal information while delivering a delightful shopping journey."
          </p>
        </div>
        <div className="col-md-6">
        <img src="/images/privacypolicy.png" alt="privacy-policy" className="footer-page-image" />
        </div>
      </div>
    </Layout>
  );

};

export default Policy;
