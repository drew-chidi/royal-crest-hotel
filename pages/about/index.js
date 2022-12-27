import React from "react";
import AboutContent from "../../components/about/AboutContent";
import Hero from "../../components/homepage/Hero";
import Layout from "../../components/layouts/Layout";

const About = () => {
  return (
    <Layout>
      <Hero />
      <AboutContent />
    </Layout>
  );
};

export default About;
