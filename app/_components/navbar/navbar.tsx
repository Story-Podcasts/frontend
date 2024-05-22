const Navbar = () => {
    return (
        <div className="flex flex-row w-full p-5">
            <div className="relative">
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4a8 8 0 016.32 12.906l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A8 8 0 118 4z"/>
                </svg>
            </div>
        </div>
    )
}

export default Navbar