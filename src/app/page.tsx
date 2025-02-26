'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaChevronDown, FaChevronUp, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showHours, setShowHours] = useState(false);
  const [workingHours, setWorkingHours] = useState<{ [key: string]: string }>({});
  const [widget, setWidget] = useState<HTMLElement>();

  useEffect(() => {
    fetch('/opening-hours.json')
      .then(response => response.json())
      .then(data => setWorkingHours(data))
      .catch(error => console.error('Error fetching working hours:', error));
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (hero && widget) {
      hero.appendChild(widget);
    }
  }, [widget]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.opentable.co.uk/widget/reservation/loader?rid=394356&type=button&theme=standard&color=1&dark=false&iframe=false&domain=couk&lang=en-GB&newtab=false&ot_source=Restaurant%20website&cfe=true"
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const widgetElement = document.getElementById("ot-reservation-widget");

      if (widgetElement) {
        setWidget(widgetElement);
      }
    };
  }, []);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
 
  return (
    <div className="container mx-auto p-6 text-center">
      {/* Dismissable Banner at the Bottom */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-200 text-gray-800 p-4 text-center flex justify-between items-center">
          <p className="text-sm">This website uses essential cookies set by external providers to ensure proper functionality. By continuing to use this site, you accept their use.</p>
          <button onClick={() => setShowBanner(false)} className="text-gray-600 hover:text-gray-900 font-semibold">Dismiss</button>
        </div>
      )}

      {/* Header with Social Icon */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Ali Bey</h1>
        <div className="flex space-x-2">
          <Link href="https://www.instagram.com/alibeyrestaurantbar/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 text-3xl hover:text-pink-800" />
          </Link>
          <Link href="https://www.tripadvisor.co.uk/Restaurant_Review-g504182-d32980817-Reviews-Ali_Bey-Sutton_Greater_London_England.html" target="_blank" rel="noopener noreferrer">
            <FaTripadvisor className="text-green-600 text-3xl hover:text-green-800" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div id="hero" className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white bg-gray-800 rounded-lg shadow-lg" style={{ backgroundImage: "url('/restaurant-hero.jpg')" }}>
        <h1 className="text-5xl font-bold mb-2">Taste the flavours of Turkey</h1>
        <p className="text-lg">Savour authentic Turkish dishes in a warm setting.</p>
        <Link id="view-menu" href="/menu">
          <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md">View Menu</button>
        </Link>

        <Script
        />
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
            <Image width={2268} height={3213} src="/iftar-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Iftar Menu for Ramadan</h3>
            <p className="text-gray-600">Join us for a special Iftar menu with traditional delicacies.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image width={2268} height={3213} src="/lunch-menu.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Lunch Menu</h3>
            <p className="text-gray-600">Enjoy our exclusive lunch offerings at special prices.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image width={2268} height={3213} src="/belly-dancer.jpg" alt="Iftar Menu" className="w-full h-128 object-cover rounded" />
            <h3 className="text-xl font-semibold">Belly Dancer on Fridays and Saturdays</h3>
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

        {/* Working Hours Collapsible Section */}
        <div className="mt-4">
          <button onClick={() => setShowHours(!showHours)} className="text-lg text-gray-600 hover:text-gray-800 flex items-center justify-center gap-2 w-full text-center">
            {`Open Today: ${workingHours[today]}`} <span className="ml-2">{showHours ? <FaChevronUp /> : <FaChevronDown />}</span>
          </button>
          {showHours && (
            <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow text-center flex flex-col items-center">
              {Object.entries(workingHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between w-full max-w-xs gap-8"><span className={`text-gray-700 text-right w-1/2 ${day === today ? 'font-bold' : ''}`}>{day}</span><span className={`text-gray-700 text-left w-1/2 ${day === today ? 'font-bold' : ''}`}>{hours}</span></div>
              ))}
            </div>
          )}
        </div>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          *Kitchen closes at 11 pm
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
