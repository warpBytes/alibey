import AboutUs from '@/components/about-us';
import ContactUs from '@/components/contact-us';
import Hero from '@/components/hero';
import NewsAndUpdates from '@/components/news-and-updates';
import OurMenu from '@/components/our-menu-section';
import TasteTheFlavors from '@/components/taste-the-flavors';

const Home = () => {
  return (
    <div className="pb-4 md:pb-10">
      <Hero />
      <TasteTheFlavors />
      <NewsAndUpdates />
      <AboutUs />
      <OurMenu />
      <ContactUs />
    </div>
  );
};

export default Home;
