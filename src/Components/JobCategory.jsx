
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
          <h2>All Jobs</h2>
          {/* Display all jobs here */}
        </TabPanel>
        <TabPanel>
          <h2>onsite Jobs</h2>
          {/* Display On Site  jobs here */}
        </TabPanel>
        <TabPanel>
          <h2>remote Jobs</h2>
          {/* Display remote jobs here */}
        </TabPanel>
        <TabPanel>
          <h2>hybrid Jobs</h2>
          {/* Display hybrid jobs here */}
        </TabPanel>
        <TabPanel>
          <h2>Part time Jobs</h2>
          {/* Display Part time jobs here */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
