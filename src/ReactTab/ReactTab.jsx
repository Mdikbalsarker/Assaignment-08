import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../Utility/AddtoDB';


const ReactTab = () => {
  const [readList , setReadList]=useState([]);

const data=useLoaderData();
console.log(data)
useEffect(()=>{
  const localStoredData=getStoredBook();
  console.log(localStoredData);
  const IntLocalData=localStoredData.map((id)=>parseInt(id));
  console.log(IntLocalData);
  const CheckedIntLocal=data.Apps.filter(single=> IntLocalData.includes(single.id));
  setReadList(CheckedIntLocal);
},[])
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
<div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {
          readList.map((install)=><div  >
             <div className="block bg-slate-100 ">
    <div><img className='h-[150px] mx-auto' src={install.imageUrl} alt="" /></div>
    <div className='mx-auto p-4'><h1>{install.title}</h1>
    <h2>{install.order}</h2>
    <h2>{install.description}</h2>
    <button className='btn btn-primary'>Type: {install.category}</button>
    </div></div>
            
          </div>)
        }
</div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReactTab;