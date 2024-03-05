import { Link } from 'react-router-dom';
import '../assets/css/about.css'
function About() {
    return ( 
      <>
      <div className="responsive-container-block bigContainer" id="about-page">
        <div className="responsive-container-block Container bottomContainer">
          <div className="ultimateImg">
            <img className="mainImg" src="/src/assets/images/logo1.png" alt="Main Image" />
            </div>
            <div className="allText bottomText">
              <p className="text-blk headingText">
                About Us
              </p>
              <p className="text-blk subHeadingText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-blk description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
              </p>
              <Link to={"/"}>
              <a className="explore" href="#">
                View Services
              </a>
              </Link>
            </div>
          </div>
        </div> 
      </>
     );
}

export default About;