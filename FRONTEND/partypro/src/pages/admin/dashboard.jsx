import { useState } from 'react'; // Import useState hook
import '../../assets/css/dashboard.css';
import SideBar from '../../components/ui/sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Dashboard = () => {
  // State variables to store user details
  const [userDetails, setUserDetails] = useState([
    { id: 1, name: 'Sanjay', email: 'sanjay@gmail.com', eventName: 'Party', eventLocation: 'Coimbatore' }
  ]);
  // State variable to store the currently edited detail
  const [editDetail, setEditDetail] = useState(null);

  // Function to delete a user detail
  const deleteDetail = (id) => {
    const updatedDetails = userDetails.filter(detail => detail.id !== id);
    setUserDetails(updatedDetails);
  };

  // Function to handle editing of a user detail
  const handleEdit = (detail) => {
    setEditDetail(detail);
  };

  // Function to save changes made during editing
  const saveEdit = () => {
    setEditDetail(null);
  };
  const user = useSelector(selectUser)

  return (
    <>
    {user && <SideBar/>}
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            {/* Display number of orders */}
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Number of Orders</div>
                <div className="number"><p>5</p></div>
              </div>
            </div>

            {/* Display pending orders */}
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Pending Orders</div>
                <div className="number"><p>2</p></div>
              </div>
            </div>
            
            {/* Display completed orders */}
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Completed Orders</div>
                <div className="number">
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Display recent events */}
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Events</div>
              <div className="sales-details">
                {userDetails.map(detail => (
                  <ul className="details horizontal" key={detail.id}>
                    <li><span className="topic">User Name: </span>{editDetail === detail ? <input type="text" value={detail.name} /> : detail.name}</li>
                    <li><span className="topic">Email Address: </span>{editDetail === detail ? <input type="text" value={detail.email} /> : detail.email}</li>
                    <li><span className="topic">Event Name: </span>{editDetail === detail ? <input type="text" value={detail.eventName} /> : detail.eventName}</li>
                    <li><span className="topic">Event Location: </span>{editDetail === detail ? <input type="text" value={detail.eventLocation} /> : detail.eventLocation}</li>
                    {/* Add buttons for edit, save, and delete */}
                    <li>
                      {editDetail === detail ? (
                        <>
                          <button onClick={saveEdit} className="edit-button">Save</button>
                          <button onClick={() => setEditDetail(null)} className="cancel-button">Cancel</button>
                        </>
                      ) : (
                        <button onClick={() => handleEdit(detail)} className="edit-button">Edit</button>
                      )}
                      <button onClick={() => deleteDetail(detail.id)} className="delete-button">Delete</button>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
