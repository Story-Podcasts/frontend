const Footer = () => {
    return (
        <div className="flex flex-row w-full">
            <div className="rounded-lg shadow-lg p-6 w-full">
    <div className="flex items-center justify-between mb-4">
      <button className="text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-6v12l-9-6zm11 0h4m-4 4h4" />
        </svg>
      </button>
      <button className="text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
    <div className="flex items-center mb-4">
      <span className="text-gray-400 text-sm">0:00</span>
      <input type="range" className="w-full mx-4" />
      <span className="text-gray-400 text-sm">3:45</span>
    </div>
    <div className="flex items-center justify-between">
      <button className="text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button className="text-gray-400 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-6v12l-9-6zm11 0h4m-4 4h4" />
        </svg>
      </button>
    </div>
  </div>
        </div>
    )
}

export default Footer