import React, { useState } from 'react'
import { AddIcon, UploadIcon } from '../assets/icon'

function classNames(...classes: Array<string | undefined | null | boolean>): string {
	return classes.filter(Boolean).join(' ');
}

interface Event {
  id: number;
  name: string;
 
  href: string;
 
  }

  type props= {
    setFilterData:React.Dispatch<React.SetStateAction<string>>

  }

const tab: Event[] = [
  {
  id: 1,
  name: 'All sources',
  href: '#',
  
  },
  {
  id: 2,
  name: 'Instruments',
  href: '#',
  },
  {
  id: 3,
  name: 'Databases',
  href: '#',
  },
  {
  id: 4,
  name: 'Files',
  href: '#',
 
  },
  {
  id: 5,
  name: 'Media',
  href: '#',
  },
  {
    id: 6,
    name: 'Cloud Services',
    href: '#',
    },
    {
      id: 7,
      name: 'Softwares',
      href: '#',
      },
  ]
  


const Sidebar = (props:props) => {
  const [tabId, setTabId] = useState<number>(1);
  return (
    <div>
      <button className='unnamed-character-style-4 mb-10 whitespace-nowrap shadow-md hover:border-blue-green border-[2px] focus:border-blue-green focus:bg-blue-green transition duration-150 ease-out rounded-full px-3 py-2 flex items-center gap-2'>
        <AddIcon className='text-[18px]' />
        Custom Table
      </button>
      <button className='unnamed-character-style-15 mb-8 text-white shadow-md border-[0px] hover:bg-dark-blue-green  focus:border-blue-green bg-blue-green focus:bg-active-blue-green transition duration-150 ease-out rounded-full px-3 py-1.5 flex items-center gap-2'>
        <UploadIcon className='text-[18px]' />
        Upload
      </button>
      <div className='flex flex-wrap md:flex-col gap-1.5'>
        {
          tab.map((item , index)=>{
            return(
              <div>

              <button 
              onClick={() => {setTabId(item.id);
                props.setFilterData(item.name) }}
               key={item.id} className={classNames(tabId === item.id  ? "bg-independence unnamed-character-style-15 shadow shadow-main hover:bg-independence" : "bg-white unnamed-character-style-6" ,' py-[9px] px-[23px] transition duration-300 ease-out main hover:bg-platinum rounded-full')}>
                
              {item.name}
            </button>
            </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Sidebar