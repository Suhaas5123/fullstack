import { useState } from "react";
import '../../assets/css/profile.css';
import Footer from "../../components/ui/footer";
import SideBar from "../../components/ui/sidebar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
const ProfilePage = () => {
  const user = useSelector(selectUser)
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [editable, setEditable] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <>
    {user && <SideBar/>}
    <div className="container profile-container">
      <div className="profile-info">
        <div className="profile-image">
          <img src="/src/assets/images/logo1.png" alt="Profile" />
        </div>
        <div className="profile-details">
          <h1 className="profile-name">
            {editable ? (
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="editable"
              />
            ) : (
              name
            )}
          </h1>
          <p className="profile-email">
            {editable ? (
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="editable"
              />
            ) : (
              email
            )}
          </p>
        </div>
        <button className="edit-button" onClick={toggleEditable}>
          {editable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProfilePage;
