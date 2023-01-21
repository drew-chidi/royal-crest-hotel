import React from "react";
import FacilitiesContent from "../../components/facilities/FacilitiesContent";
import FacilitiesHero from "../../components/facilities/FacilitiesHero";
import Layout from "../../components/layouts/Layout";
import ContactUs from "../../components/contact/ContactUs";
import Hero from "../../components/homepage/Hero";

const index = () => {
  return (
    <Layout>
      {/* <FacilitiesHero /> */}
      <Hero page='facilities' />
      <FacilitiesContent />
      <ContactUs />
    </Layout>
  );
};

export default index;
