const PodcastTile = ({ image, title, creator, duration }: {image: string, title: string, creator: string, duration: string}) => {
    return (
        <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-4 mb-4 w-full max-w-xl">
            <img src={image} alt="Podcast Art" className="w-24 h-24 rounded-lg mr-4" />
            <div>
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <p className="text-sm text-gray-400">{creator}</p>
                <p className="text-sm text-gray-400">{duration}</p>
            </div>
        </div>
    );
}

const PodcastList = () => {
    const podcasts = [
        {
            image: "https://via.placeholder.com/100",
            title: "Podcast Episode 1",
            creator: "Creator Name",
            duration: "30:45"
        },
        {
            image: "https://via.placeholder.com/100",
            title: "Podcast Episode 2",
            creator: "Creator Name",
            duration: "28:30"
        },
        // Add more podcast objects as needed
    ];

    return (
        <div className="flex flex-col items-center">
            {podcasts.map((podcast, index) => (
                <PodcastTile
                    key={index}
                    image={podcast.image}
                    title={podcast.title}
                    creator={podcast.creator}
                    duration={podcast.duration}
                />
            ))}
        </div>
    );
}


const Recommendations = () => {
    return (
        <div className="w-1/3 p-6"><PodcastList/></div>
    )
}

export default Recommendations