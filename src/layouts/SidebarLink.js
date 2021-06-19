import React, {useState} from 'react'
import {Link} from "react-router-dom";


function SidebarLink({to,exact,title,icon,type,subLinks,image}){

  let path=window.location.pathname
    const [showSubmenu,setShowSubmenu]= useState(false)

    switch (type){
        case 1:return <>
            <div  className={`${path.startsWith(to)&'bg-gray-100 dark:bg-black-400'} relative px-6 py-3`} >

                <div onClick={()=>setShowSubmenu(!showSubmenu)} className={`${path.startsWith(to)&&'text-gray-800 dark:text-white'} inline-flex cursor-pointer justify-between items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`} >
                    <div className="flex items-center">
                        {icon}
                        <span className="ml-4">{title}</span>
                    </div>
                    <span>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>

                </div>
                {
                    showSubmenu &&

                    <div className=" bg-gray-50  py-2 rounded-md">
                        {subLinks.map(link => (
                            <div className={`${path===link.to?'bg-gray-100 dark:bg-black-400':''}  relative hover:bg-gray-200 flex items-center` }>
                                {path===link.to&&<span className="absolute inset-y-0 left-0 w-1  bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                                <Link to={link.to}
                                      className={`${path === link.to && 'text-gray-800 dark:text-white'} py-2  px-3 ml-6 inline-flex justify-between items-center w-10/12  text-sm font-semibold transition-colors duration-150  hover:text-gray-800 dark:hover:text-gray-200`}>
                                    {link.title}
                                </Link>
                            </div>
                        ))}

                    </div>
                }


            </div>

        </>;
        case 2 : return <>
            {exact?
                <div  className={`${path===to&&'bg-gray-100 dark:bg-black-400'} relative px-6 py-2 flex items-center`} >
                    {path===to&&<span className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                    <Link to={to} className={`${path===to&&'text-gray-800 dark:text-white'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`} >
                        <img className="w-8 h-8 rounded-full object-cover" src={image} alt={to}/>
                        <span className="ml-4">{title}</span>

                    </Link>
                </div>
                :
                <div  className={`${path.startsWith(to)&&'bg-gray-100 dark:bg-black-400'} relative px-6 py-2 flex items-center`} >
                    {path.startsWith(to)&&<span className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                    <Link to={to} className={`${path.startsWith(to)&&'text-gray-800 dark:text-white'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`} >
                        <img className="w-8 h-8 rounded-full object-cover" src={image} alt={to}/>
                        <span className="ml-4">{title}</span>

                    </Link>
                </div>

            }





        </>;
        default : return <>
            {exact?
                <div  className={`${path===to&&'bg-gray-100 dark:bg-black-400'} relative px-6 py-3`} >
                    {path===to&&<span className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                    <Link to={to} className={`${path===to&&'text-gray-800 dark:text-white'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`} >
                        {icon}
                        <span className="ml-4">{title}</span>
                    </Link>
                </div>
                :
                <div  className={`${path.startsWith(to)&&'bg-gray-100 dark:bg-black-400'} relative px-6 py-3`} >
                    {path.startsWith(to)&&<span className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg" aria-hidden="true"></span>}
                    <Link to={to} className={`${path.startsWith(to)&&'text-gray-800 dark:text-white'} inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`} >
                        {icon}
                        <span className="ml-4">{title}</span>

                    </Link>
                </div>

            }





        </>
    }



}export default SidebarLink;
