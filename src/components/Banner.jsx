const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]  rounded-lg mb-10 border-2 border-[#F2B33D]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/3CVqH18/Beige-And-Orange-Illustrated-Donate-Animal-Shelters-Poster.png"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/nsrgZFb/Black-And-Blue-Modern-Gym-And-Fitness-Facebook-Ad.png"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/mv6JG3P/Navy-Red-Modern-Stratup-Funding-Mastery-Youtube-Thumbnail.png"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;