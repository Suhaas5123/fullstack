import service from '../../assets/images/logo1.png';
import people from '../../assets/images/logo1.png';
import ideas from '../../assets/images/logo1.png';

// import Packages from './Packages';
// import Slider_worker from './Slider_worker';
import '../../assets/css/component.css'

function App() {
  return (
    <>
    <div className="line" style={{height : "6px" , width : "90%" ,backgroundColor : "black",margin:"auto"}}></div>
      <div className="flex-center-full">
        <div className="flex-container">
          <h1>
            Welcome to <span className="text-color">Where Party</span>
          </h1>
          <p style={{ padding: 10, textAlign: "center" }}>
            It’s all in the details. Precise coordination, extraordinary results. Our passion is your perfect event. Your occasion deserves our careful planning.
          </p>
        </div>
      </div>
      <div className="flex-container-para">
        <div className="content">
          <img src={service} alt="service" />
          <h2 style={{ paddingTop: 10 }}>Great Services</h2>
          <p className="content-para">
            HappyHub is a full-service event management company in Delhi dedicated to quality and excellence. We manage events across cities in India.
          </p>
        </div>
        <div className="content">
          <img src={people} alt="people" />
          <h2 style={{ paddingTop: 10 }}>Great People</h2>
          <p className="content-para">
            No matter what your requirement may be, our priority lies in gaining an understanding of how your business works, what you hope to achieve.
          </p>
        </div>
        <div className="content">
          <img src={ideas} alt="idea" />
          <h2 style={{ paddingTop: 10 }}>Great Ideas</h2>
          <p className="content-para">
            World of event management has changed tremendously in the last few years. We are a team of creative and innovative great interpersonal skills.
          </p>
        </div>
      </div>
      
    </>
  );
}

export default App;
