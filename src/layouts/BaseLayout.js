import React,{useState} from 'react'
import TheSidebar from "./TheSidebar";
import {CSSTransition} from "react-transition-group";




function BaseLayout(props){

    const [isSidebarOpen,setIsSidebarOpen] = useState(true)

    return(
        <div className="min-h-screen flex flex-col bg-gray-100 flex-auto w-screen max-w-screen flex-shrink-0 antialiased bg-gray-50 text-gray-800">



            <div className="md:hidden block">
                <CSSTransition
                    in={isSidebarOpen}
                    timeout={300}
                    classNames={"sidebar"}
                    unmountOnExit
                >
                    <TheSidebar {...props}  setIsSidebarOpen={setIsSidebarOpen}/>
                </CSSTransition>
            </div>






            <div className="hidden md:block">
                <TheSidebar {...props}/>
            </div>


            <div className="w-full bg-white p-2 py-4 flex items-center relative md:hidden ">
                <button onClick={()=>setIsSidebarOpen(true)} className=" absolute left-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <p className="text-center text-xl truncate font-semibold w-full">Organization Name</p>
            </div>
            <div className="w-full md:pl-60 bg-gray-100">
                <div className="container mx-auto  px-10 pt-8  bg-gray-100 h-screen max-h-screen overflow-y-auto hide-scroll-bar">

                    {props.children}
                </div>
            </div>
        </div>
    )
}export default BaseLayout;

