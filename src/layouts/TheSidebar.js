import React, {useEffect, useState} from 'react'
import SidebarLink from "./SidebarLink";


function TheSidebar(props){


    const mainLinks=[
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
        {
            title:'Link',
            to:'/',
        },
    ]


    const sharedLinks=[
        {
            title:'Shared Links',
            to:'/',
        },
        {
            title:'Shared Links',
            to:'/',
        },
        {
            title:'Shared Links',
            to:'/',
        },
        {
            title:'Shared Links',
            to:'/',
        },

    ]





    return(
        <div className=" fixed flex top-0 left-0 md:w-60 overflow-hidden w-screen h-full z-10 sidebar">
            <div className="bg-primary text-white flex flex-col  md:w-64 w-full   h-full border-r relative">

            <div className="mt-3 flex justify-between md:justify-center w-full md:px-1 px-4">
                <p className="text-center text-2xl font-bold truncate uppercase">Zeptolytics</p>
                <button onClick={()=>props.setIsSidebarOpen(false)} className="text-gray-500 hover:bg-gray-200 p-1 md:hidden rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

                <div className="mt-6 overflow-y-auto max-h-screen hide-scroll-bar" >
                    <div className="w-full relative px-2">
                        <span className="absolute text-gray-600 top-2 left-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input type="text" placeholder="search" className="form-input pl-8 block w-full mt-1 text-sm p-2 text-gray-600 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary rounded-full"/>
                    </div>


                    <p className="text-xl text-center py-2 border-b mx-4 mt-3">My Dashboard</p>


                    <div className=" mt-4 overflow-y-auto hide-scroll-bar" style={{maxHeight:'28vh'}}>
                        {
                            mainLinks.map((link,index)=><SidebarLink data={link} key={index} index={index} />)
                        }
                    </div>

                    <button className="mx-auto block bg-white rounded-full p-1 text-primary mt-4 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                    </button>



                    <p className="text-xl text-center py-2 border-b mx-4 mt-3">My Dashboard</p>


                    <div className=" mt-4 overflow-y-auto hide-scroll-bar" style={{maxHeight:'28vh'}}>
                        {
                            sharedLinks.map((link,index)=><SidebarLink data={link} key={index} />)
                        }
                    </div>



                </div>




            </div>

        </div>

    )

}export default TheSidebar
