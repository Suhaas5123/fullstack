import '../../assets/css/landing.css';
import animation from '../../assets/videos/WhereParty.mp4';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-section">
        <h1 className="title">Where is the party tonight</h1>
        <h2>Welcome to Party Booking</h2>
        <p>
          Plan your next event hassle-free with our easy-to-use party booking platform. Whether it is a birthday party,
          wedding party we have got you covered!
        </p>
        <button className="btn">Book Events</button>
      </div>
      <div className="right-section">
        <video autoPlay loop muted>
          <source src={animation} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LandingPage;