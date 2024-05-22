import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import Recommendations from "../recommendations/recommendations"

const Main = () => {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <div className="flex-grow">Hello</div>
                <Recommendations/>
            </div>
            <Footer />
        </div>
    )
}

export default Main