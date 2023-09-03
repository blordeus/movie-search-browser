const Hero = ({text, backdrop}) => {
    return (
        <header className="bg-dark text-white p-5">
            <h1>{text}</h1>
            {backdrop}
        </header>
    );
}

export default Hero;