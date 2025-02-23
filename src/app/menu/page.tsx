'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';

interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  dietary?: string;
  prices?: { [key: string]: number };
  origin?: string;
}

interface MenuCategory {
  [key: string]: MenuItem[];
}

interface MenuData {
  [key: string]: MenuCategory;
}

const Menu = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    fetch("/menu.json") // Ensure menu.json is in the public directory
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
        setActiveTab(Object.keys(data)[0]); // Set the first category as the default tab
      })
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Link href="/">
        <button className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded-lg shadow-md">Back to Home</button>
      </Link>

      <h1 className="text-3xl font-bold text-center mb-6">Restaurant Menu</h1>
      {menuData && (
        <div className="flex justify-center mb-6 border-b">
          {Object.keys(menuData).slice(0, 4).map((section) => (
            <button
              key={section}
              className={`px-4 py-2 text-lg font-semibold ${activeTab === section ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab(section)}
            >
              {section}
            </button>
          ))}
        </div>
      )}
      {menuData && activeTab && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2">{activeTab}</h2>
          {Object.entries(menuData[activeTab]).map(([category, items]) => (
            <div key={category} className="mt-4">
              <h3 className="text-xl font-medium text-gray-700">{category}</h3>
              <ul className="mt-2 space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">{item.name}</span>
                      {item.price !== undefined ? (
                        <span className="text-lg font-bold text-gray-800">£{item.price.toFixed(2)}</span>
                      ) : item.prices ? (
                        <div className="text-lg font-bold text-gray-800">
                          {Object.entries(item.prices).map(([size, price]) => (
                            <p key={size}>{size}: £{price.toFixed(2)}</p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    {item.description && <p className="text-gray-600 mt-1">{item.description}</p>}
                    {item.origin && <p className="text-gray-500 text-sm">Origin: {item.origin}</p>}
                    {item.dietary && <span className="text-sm text-green-600">({item.dietary})</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
