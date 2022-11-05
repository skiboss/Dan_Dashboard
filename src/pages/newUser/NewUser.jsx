import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>User Name</label>
          <input type="text" placeholder="Justin"></input>
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Justin ojak"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="justinojak@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>PassWord</label>
          <input type="password" placeholder="Password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+234 64646 636 65"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Canada"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"></input>
            <label For="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></input>
            <label For="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"></input>
            <label For="other">Other</label>
          </div>
          <button className="newUserButton">Create</button>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
}
