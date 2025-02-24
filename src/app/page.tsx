'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTripadvisor } from 'react-icons/fa';
import { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
 
  return (
    <div className="container mx-auto p-6 text-center">
      {/* Dismissable Banner at the Bottom */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-gray-800 p-4 text-center flex justify-between items-center">
          <p className="text-sm">This website uses essential cookies set by external providers to ensure proper functionality. By continuing to use this site, you accept their use.</p>
          <button onClick={() => setShowBanner(false)} className="text-gray-600 hover:text-gray-900 font-semibold">Dismiss</button>
        </div>
      )}

      {/* Header with TripAdvisor Icon */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Ali Bey</h1>
        <Link href="https://www.tripadvisor.co.uk/Restaurant_Review-g504182-d32980817-Reviews-Ali_Bey-Sutton_Greater_London_England.html" target="_blank" rel="noopener noreferrer">
          <FaTripadvisor className="text-green-600 text-3xl hover:text-green-800" />
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white bg-gray-800 rounded-lg shadow-lg" style={{ backgroundImage: "url('/restaurant-hero.jpg')" }}>
        <h1 className="text-5xl font-bold mb-2">Taste the flavours of Turkey</h1>
        <p className="text-lg">Savor authentic Turkish dishes in a warm setting.</p>
        <Link href="/menu">
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">View Menu</button>
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-center space-x-6 my-6">
        <Link href="/menu" className="text-lg font-semibold text-blue-600 hover:underline">Menu</Link>
        <a href="#contact" className="text-lg font-semibold text-blue-600 hover:underline">Contact</a>
      </div>

      {/* News & Updates */}
      <div className="my-10">
        <h2 className="text-3xl font-bold mb-4">News & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/iftar-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Iftar Menu for Ramadan</h3>
            <p className="text-gray-600">Join us for a special Iftar menu with traditional delicacies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/lunch-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Lunch Menu</h3>
            <p className="text-gray-600">Enjoy our exclusive lunch offerings at special prices.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image src="/belly-dancer.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Belly Dancer on Friday and Saturday</h3>
            <p className="text-gray-600">Experience an exciting live performance while dining.</p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our restaurant offers an authentic Turkish Mediterranean dining experience, blending traditional flavours with modern culinary techniques. Join us for an unforgettable meal!
        </p>

        <APIProvider apiKey={"AIzaSyB1r6KLeOckdZB1etKkPHjFTDwxxWUHKYY"}>
          <Map
            className="mt-4 w-full h-80 rounded-lg shadow-lg"
            defaultCenter={{ lat: 51.36018569475759, lng: -0.19153343443267953 }}
            defaultZoom={18}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Marker position={{ lat: 51.36018569475759, lng: -0.19153343443267953 }} />

          </Map>
        </APIProvider>
      </div>

      {/* Contact Information */}
      <div id="contact" className="my-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">We accept private bookings and events. Contact us for more details!</p>
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
