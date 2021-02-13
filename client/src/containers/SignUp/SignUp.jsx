import { useState } from "react";
import API from "../../utils/API";

const SignUp = () => {
  const [userObject, setUserObject] = useState({
    username: "",
    name: "",
    address: "",
    password: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.addUser({
      name: userObject.name,
      address: userObject.address,
      password: userObject.password,
      email: userObject.email,
    })
      .then(() => {
        setUserObject({
          username: "",
          name: "",
          address: "",
          password: "",
          email: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="section">
        <div className="columns is-centered is-multiline">
          <div className="column is-4">
            <form className="box">
              <h3 className="title is-3">Sign up for Farm To Table</h3>

              {/* Email */}
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="e.g. alex@example.com"
                    fullWidth
                    id="email"
                    required
                    label="Email"
                    name="email"
                    value={userObject.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Full Name */}
              <div className="field">
                <label className="label">Full Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="John Smith"
                    fullWidth
                    id="fullName"
                    required
                    label="First and Last Name"
                    name="name"
                    value={userObject.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Home Address */}
              <div className="field">
                <label className="label">Address</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="3203 FM 1960 East Humble, Texas, 77338"
                    fullWidth
                    id="homeAddress"
                    label="Home Address"
                    name="address"
                    value={userObject.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="********"
                    required
                    id="password"
                    type="password"
                    onChange={handleInputChange}
                    name="password"
                    value={userObject.password}
                  />
                </div>
              </div>

              <button className="button is-primary" onClick={handleFormSubmit}>
                Create Account
              </button>

              {/* Directs to login page */}

              <h5 className="subtitle is-6">
                Already a member?{" "}
                <a className="title is-6" href="">
                  Login here.
                </a>
              </h5>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
