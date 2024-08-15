import React, { useState } from 'react';
import Dropdown from '../../components/DropdownComponent';
import TabSelector from '../../components/TabSelectorComponent';
import LayoutSystemComponent from '../../components/Layouts/LayoutSystemComponent';
import EditCategory from '../../components/EditCategory';
import EditNominee from '../../components/EditNominee';

type Category = {
  id: number;
  title: string;
  description: string;
  weight: number;
  nominees: Nominee[];
};

const AdminDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategorySelect = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <LayoutSystemComponent>
      <div className="flex justify-center min-h-[85vh]">
        <div className="bg-zinc-900 p-8 shadow-md max-w-xl w-full mx-auto my-2 overflow-visible">
          <TabSelector
            tabs={[
              { id: 1, title: 'Categories' },
              { id: 2, title: 'Nominees' },
            ]}
          >
            <div>
              {/* Categories Content */}
              <Dropdown onCategorySelect={handleCategorySelect} />
              <EditCategory category={selectedCategory} onSave={() => handleCategorySelect(null)} />
            </div>
            <div>
              {/* Nominees Content */}
              <Dropdown onCategorySelect={handleCategorySelect} />
              {selectedCategory && <EditNominee category={selectedCategory} />}
            </div>
          </TabSelector>
        </div>
      </div>
    </LayoutSystemComponent>
  );
};

export default AdminDashboard;
