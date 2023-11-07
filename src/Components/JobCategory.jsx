



import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Job from './job';

const JobCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { isLoading, data: jobs } = useQuery({
    queryKey: ['data'],
    queryFn: () =>
      fetch('https://job-hunter-server-olive.vercel.app/jobs').then(
        (res) => res.json(),
      ),
  });

  if (isLoading) {
    return <div className='text-center mt-20'><span className="loading loading-spinner text-success"></span></div>;
  }

  const onSite = jobs?.filter(job =>job?.category.toLowerCase()==='on site job');
//   console.log(onSite);
  const remoteJobs = jobs?.filter(job => job?.category.toLowerCase() === 'remote job');
//   console.log(remoteJobs);
  const hybridJobs = jobs?.filter(job => job?.category.toLowerCase() === 'hybrid');
//   console.log(hybridJobs);
  const partTimeJobs = jobs?.filter(job => job?.category.toLowerCase() === 'part time');
//   console.log(partTimeJobs);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <h1 className='bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-2xl lg:text-5xl font-semibold lg:font-bold text-center pt-20 pb-10'>Job By Category</h1>

      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>On Site Jobs</Tab>
          <Tab>Remote Jobs</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
          <h2>All Jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              jobs.map(job => <Job key={job._id} job={job} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>On Site Jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              onSite.map(job => <Job key={job._id} job={job} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Remote Jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              remoteJobs.map(job => <Job key={job._id} job={job} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Hybrid Jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              hybridJobs.map(job => <Job key={job._id} job={job} />)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Part Time Jobs</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              partTimeJobs.map(job => <Job key={job._id} job={job} />)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
