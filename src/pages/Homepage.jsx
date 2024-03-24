import Hero from "../components/Hero";
import wave from '../assets/wave.svg';

const Homepage = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero></Hero>
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Homepage;