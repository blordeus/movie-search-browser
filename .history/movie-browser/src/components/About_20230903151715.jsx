import Hero from "./Hero";

const About = ({ text }) => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              lorem25
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
