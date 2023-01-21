import React, { Fragment } from "react";
import Layout from "../../components/layouts/Layout";
import ContactUs from "../../components/contact/ContactUs";

const index = () => {
  return (
    <Layout>
      <ContactUs page='contact' />
    </Layout>
  );
};

export default index;
