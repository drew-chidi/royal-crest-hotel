import dynamic from 'next/dynamic';
import Head from 'next/head';
import About from '../components/homepage/About';
import Facilities from '../components/homepage/Facilities';
import Hero from '../components/homepage/Hero';
import Rooms from '../components/homepage/Rooms';
import Testimonials from '../components/homepage/Testimonials';
import Layout from '../components/layouts/Layout';

const ContactUs = dynamic(() => import('../components/contact/ContactUs'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Royal Crest Hotel & Suites</title>
        <meta name='description' content='Royal Crest Hotels & Suites' />
        <meta
          name='google-site-verification'
          content='RUQoFmwqsY_RTXWgtaTxBqqCkL4J-OlbsAmUkazDW5w'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Facilities />
        <Rooms />
        <Testimonials />
        <ContactUs />
      </Layout>
    </div>
  );
}
