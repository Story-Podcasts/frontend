"use client"
import { useState } from "react";
import Modal from "../modal/modal";

const UserTab = ({ username, avatar }: {username: string, avatar: string}) => {
    return (
        <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full p-2 w-48 shadow-lg">
            <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
            <span className="text-white text-sm font-medium">{username}</span>
        </div>
    );
}


const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className="flex flex-row w-full p-5 gap-20 justify-between">
            <div className="flex flex-row gap-2 flex-grow">
                <div className="relative flex-grow" title="Coming Soon...">
                    <input type="text" disabled placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full w-full border border-gray-400  h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                    <svg className="w-5 h-5 text-gray-500 absolute left-6 top-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 118 4z"/>
                    </svg>
                </div>
                <button
                    className="py-2 px-4 bg-blue-500 text-white rounded-full shadow-md focus:outline-none"
                    onClick={openModal}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                </button>
                <div className="relative">
      <button className="flex items-center justify-center p-4 bg-white text-blue-500 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a1 1 0 00-2 0v1.083A6 6 0 006 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0a3 3 0 01-6 0" />
        </svg>
      </button>
      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
    </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} remix={null}/>

            <UserTab 
                username="JohnDoe" 
                avatar="https://via.placeholder.com/40" 
            />
        </div>
    )
}

export default Navbar