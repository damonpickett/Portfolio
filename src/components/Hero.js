// Import Assets
import humanProfile from "../assets/profile-pic (2).jpg";
import cyberProfile from '../assets/cyber-profile-pic.jpeg';


const Hero = (props) => {

  return (
    <>
    <div id='home'></div>
    <section className="hero" data-aos='fade-right'>

      <div className='hero__content'>
        <div className="hero__text">
          <h1>
            Hi, I'm <span className="camelCase">damonPickett</span>
          </h1>
          <h2>Software Developer</h2>
            <button onClick={() => props.setShow(true)} className="button">Get In Touch</button>
        </div>

        <div className='image__content'>
          <div className='image-container'>
            <img src={cyberProfile} alt="Damon Pickett" />
            <img src={humanProfile} alt="Damon Pickett" className='real-me'/>
          </div>
        </div>
      </div>

    </section>
    </>
  );
};

export default Hero;
