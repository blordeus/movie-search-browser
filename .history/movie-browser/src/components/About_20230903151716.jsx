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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam voluptatem numquam dolorem ab? Commodi voluptatibus, itaque qui dolorem totam non nulla? Temporibus fugit aspernatur sequi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
