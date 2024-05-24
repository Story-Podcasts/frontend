const Sidebar = () => {
    return (
        <div className="flex flex-col min-h-screen w-1/4 gap-5 justify-between border-r border-gray-300 backdrop-blur backdrop-saturate-200">
            <div className="flex flex-col flex-grow w-full gap-10 p-5 justify-center">
                <div className="text-gray-500 font-bold w-full">Discover</div>
                <div className="flex flex-col gap-3 font-semibold w-full">
                    <div>Recently Added</div>
                    <div title="Coming soon..">Your Subscriptions</div>
                </div>
                <div className="text-gray-500 font-bold w-full">Favourites</div>
                <div className="flex flex-col gap-3 font-semibold w-full">
                    <div>Podcast One</div>
                    <div>Podcast Two</div>
                    <div>Podcast Three</div>
                </div>

            </div>
            <div className="w-full h-60 bg-white/80 flex flex-col">
                <div className="flex flex-col space-x-4 items-center justify-between rounded-lg shadow-lg flex-grow">
                    <div className="flex flex-row justify-between w-full">
                        <div className="p-6 pr-0 flex flex-col gap-3">
                            <h3 className="text-lg font-semibold">WAIT AND SEE</h3>
                            <p className="text-sm text-gray-400">Monogen</p>
                        </div>
                        <img src="https://via.placeholder.com/50" alt="Album Art" className="w-36 h-36"/>

                    </div>
                    <div className="flex space-x-8 ml-auto pb-4">
                        <button className="text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 19l-7-7 7-7v14zm9-14h-2v14h2v-14z" />
                            </svg>
                        </button>
                        <button className="text-white bg-blue-500 rounded-full p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        <button className="text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 12l-7-7v14l7-7zM3 5v14h2V5H3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar