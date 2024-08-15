import { useState } from 'react';

const TabSelector = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b border-gray-300 font-montserrat font-bold text-white uppercase">
        {tabs.map((tab, index) => (
          <button
            key={tab.id} // Use tab.id for the key
            className={`py-2 uppercase w-full px-4 focus:outline-none ${index === activeTab ? 'border-b-2 border-orange-700' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default TabSelector;
