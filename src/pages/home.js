import Reach, { useState } from "react";
import Header from '../components/Header';
import Social from '../components/social';
import Main from '../components/main';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Hero from '../components/hero';
import "../styles/Home.css"


function Home() {
  const spinner = document.getElementById('spinner');

  if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
  }
  return (
      <div className="home-container">

        <h1 className="fixed">MB</h1>
        <Header />
        <Hero />
        <Social />
        <Main />
        <Contact />
        <Footer />
      </div>
  );
}

export default Home;
