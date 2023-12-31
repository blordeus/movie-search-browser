const Hero = ({text, backdrop}) => {
    return (
        <header className="bg-dark text-white p-5 hero-container">
            <h1>{text}</h1>
            <div className="hero-backdrop">{backdrop}</div>
        </header>
    );
}

export default Hero;