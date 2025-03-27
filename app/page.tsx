import Hero from '@/components/hero';
import NewsAndUpdates from '@/components/news-and-updates';
import TasteTheFlavors from '@/components/taste-the-flavors';

const Home = () => {
  return (
    <div>
      <Hero />
      <TasteTheFlavors />
      <NewsAndUpdates />
    </div>
  );
};

export default Home;
