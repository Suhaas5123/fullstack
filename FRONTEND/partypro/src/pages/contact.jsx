import '../assets/css/contact.css';
import back from '../assets/images/logo1.png';
import Footer from '../components/ui/footer';
import SideBar from '../components/ui/sidebar';

const ContactPage = () => {
    return (
        <>
        <div>
            <SideBar/>
            <div id="custom-img" style={{ backgroundColor:"palegreen", backgroundImage: `url(${back})` }} data-overlay="5"></div>
            <div className='custom-container'>
                <div className="custom-wrapper">
                    <div className="custom-title">
                        <h1>Contact Us Form</h1>
                    </div>
                    <div className="custom-contact-form">
                        <div className="custom-input-fields">
                            <input type="text" className="custom-input" placeholder="Name" />
                            <input type="text" className="custom-input" placeholder="Email Address" />
                            <input type="text" className="custom-input" placeholder="Phone" />
                            <input type="text" className="custom-input" placeholder="Subject" />
                        </div>
                        <div className="custom-msg">
                            <textarea placeholder="Message"></textarea>
                            <div className="custom-btn">Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ContactPage;
