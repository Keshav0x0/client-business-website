import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";


function Home() {

  return (
    <>
      <Navbar />

      <Hero />

      <SearchBar />

      <Carousel />

      <FeaturedProducts />

      <WhyUs />

      <Footer />
    </>
  );

}


export default Home;