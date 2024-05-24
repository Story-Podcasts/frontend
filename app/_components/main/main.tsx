import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import Recommendations from "../recommendations/recommendations"

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <div className="flex-grow">
                    <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-8 mb-8 w-full max-w-4xl mx-auto">
                        <div className="flex items-center mb-4">
                            <img src="https://via.placeholder.com/100" alt="Album Art" className="rounded-lg mr-4"/>
                            <div>
                                <h2 className="text-2xl font-bold">WAIT AND SEE</h2>
                                <p className="text-lg text-gray-400">Monogen</p>
                            </div>
                        </div>
                        <div className="bg-gray-700 bg-opacity-50 rounded-lg p-4 h-64 overflow-y-auto">
                            <p className="text-lg">The road is long<br />
                                You're gonna get thrown about<br />
                                Stick to the rhythm<br />
                                Breathe it in and breathe it out<br />
                                What do you do, there isn't any secret<br />
                                Chop wood, draw water, roll cigarettes<br />
                            </p>
                        </div>
                    </div>
                </div>
                <Recommendations />
            </div>
            <Footer />
        </div>
    )
}

export default Main