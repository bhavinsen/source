import React from 'react'
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { SlMagnifier } from "react-icons/sl";
import Main from '../components/Main';

export default function Home(): JSX.Element {
  const [open, setOpen] = useState<boolean>(true);
  const [modal, setModalOpen] = useState<boolean>(true);
  const [filterData, setFilterData] = useState<string>("");
  console.log("🚀 ~ file: Home.tsx:12 ~ Home ~ filterData:", filterData)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 md:p-12 text-center sm:items-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[24px] bg-white text-left shadow-xl transition-all  w-full  ">
                <div>
                  <Header />
                  <div className='grid  md:grid-cols-4 xl:grid-cols-12 pt-[25px]' >
                    <div className='md:col-span-1 xl:col-span-2  px-8'>

                      <Sidebar setFilterData={setFilterData} />
                    </div>

                    <div className='md:col-span-3 xl:col-span-10 pb-5'>
                      <div className='flex justify-end py-5 md:pb-[56px] px-5 lg:px-[80px] '>

                        <div className='relative border  rounded-full w-full max-w-[392px] pl-8 overflow-hidden pr-2'>
                          <SlMagnifier className='absolute left-3 top-3 text-[14px] text-dark-silver z-1 text-black' />
                          <input placeholder="Search all datasources..." className=' outline-none focus:outline-none placeholder:unnamed-character-style-13  py-2.5 w-full unnamed-character-style-12'>
                          </input>
                        </div>
                      </div>
                      <div className=' overflow-auto custom-scroll'>

                      <Main filterData={filterData}/>
                      </div>
                    </div>

                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
