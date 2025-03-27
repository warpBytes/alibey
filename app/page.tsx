import AboutUs from '@/components/about-us';
import ContactUs from '@/components/contact-us';
import Hero from '@/components/hero';
import NewsAndUpdates from '@/components/news-and-updates';
import TasteTheFlavors from '@/components/taste-the-flavors';

const Home = () => {
  return (
    <div>
      <Hero />
      <TasteTheFlavors />
      <NewsAndUpdates />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
