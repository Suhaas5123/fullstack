import { useState } from "react";
import '../../assets/css/profile.css';
const ProfilePage = () => {
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
    <div className="container profile-container">
      <div className="profile-info">
        <div className="profile-image">
          <img src="path_to_your_image.jpg" alt="Profile" />
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
  );
};

export default ProfilePage;
