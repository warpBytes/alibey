'use client';

import Link from 'next/link';
import { FaTripadvisor } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      {/* Header with TripAdvisor Icon */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Ali Bey</h1>
        <Link href="https://www.tripadvisor.co.uk/Restaurant_Review-g504182-d32980817-Reviews-Ali_Bey-Sutton_Greater_London_England.html" target="_blank" rel="noopener noreferrer">
          <FaTripadvisor className="text-green-600 text-3xl hover:text-green-800" />
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white bg-gray-800 rounded-lg shadow-lg" style={{ backgroundImage: "url('/restaurant-hero.jpg')" }}>
        <h1 className="text-5xl font-bold mb-2">Taste the Flavors of Turkey</h1>
        <p className="text-lg">Savor authentic Turkish dishes in a warm setting.</p>
        <Link href="/menu">
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">View Menu</button>
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center space-x-6 my-6">
        <Link href="/menu" className="text-lg font-semibold text-blue-600 hover:underline">Menu</Link>
        <Link href="/reservations" className="text-lg font-semibold text-blue-600 hover:underline">Reservations</Link>
        <Link href="/contact" className="text-lg font-semibold text-blue-600 hover:underline">Contact</Link>
      </div>

      {/* News & Updates */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-4">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/iftar-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Iftar Menu for Ramadan</h3>
            <p className="text-gray-600">Join us for a special Iftar menu with traditional delicacies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/lunch-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Lunch Menu</h3>
            <p className="text-gray-600">Enjoy our exclusive lunch offerings at special prices.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/belly-dancer.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Belly Dancer on Friday and Saturday</h3>
            <p className="text-gray-600">Experience an exciting live performance while dining.</p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our restaurant offers an authentic dining experience, blending traditional flavors with modern culinary techniques. Join us for an unforgettable meal!
        </p>
      </div>

      {/* Contact Information */}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">12 High Street, SM1 1HN Sutton</p>
        <p className="text-lg text-gray-700">
          <a href="tel:+442079534291" className="text-blue-600 hover:underline">020 7953 4291</a>
        </p>
        <p className="text-lg text-gray-700">
          <a href="mailto:info@alibey.co.uk" className="text-blue-600 hover:underline">info@alibey.co.uk</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
