import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="imgContainer"><img src="../about.jpg" alt="" /></div>
      <div className="info">
        <h2 className="sectionTittle">AboutMe</h2>
        <p>
          Hi, I'm Az-eddine Serhani, a 20-year-old web developer from Morocco.
          Passionate about technology and problem-solving, I dive into web
          development to tackle challenges and innovate. Whether it's front-end
          design or back-end logic, I thrive on pushing boundaries and creating
          inspiring solutions. Excited for the journey ahead!
        </p>
      </div>{" "}
    </div>
  );
};

export default About;
