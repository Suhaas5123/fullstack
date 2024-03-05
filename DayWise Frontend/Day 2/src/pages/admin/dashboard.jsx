import { Link } from 'react-router-dom';
import '../../assets/css/dashboard.css';

const Dashboard = () => {
  

  return (
    <>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          {/* <div className="profile-details">
            <img src="images/profile.jpg" alt="" />Name
            <span className="admin_name">Admin</span>
            <i className='bx bx-chevron-down'></i>
          </div> */}
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Number of Orders</div>
                <div className="number"><p>5</p></div>
              </div>
            </div>

            <div className="box">
              <div className="right-side">
                <div className="box-topic">Pending Orders</div>
                <div className="number"><p>2</p></div>
              </div>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Completed Orders</div>
                <div className="number">
                    <p>3</p>
                    </div>
              </div>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
              
                <ul className="details">
                <li className="topic">User Name</li>
                <li><Link to=''>Sanjay</Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                
                </ul>
                <ul className="details">
                <li className="topic">Email Address</li>
                <li><Link to=''>sanjay@gmail.com</Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
            </ul>
            <ul className="details">
                <li className="topic">Event Name</li>
                <li><Link to=''>Party</Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
            </ul>
            <ul className="details">
                <li className="topic">Event Location</li>
                <li><Link to=''>Coimbatore</Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
                <li><Link to=''></Link></li>
            </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
