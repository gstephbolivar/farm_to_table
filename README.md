# farm_to_table

heroku live link: https://glacial-falls-13622.herokuapp.com/

## Development Notes

### Login Page

- May change to use the username for find object in the database and check password matches rather than both username and password - NG
- Changed the route to the admin products page when successfully logged in - we can change this to whatever page later - NG

- added bcrypt npm package for authentication

Json web token (JWT)

- cd into client `npm install jsonwebtoken`

### CategoriesCard

- need to add styling to panels based on which panel is clicked/chosen
- need to make dropdown box dynamic based on categories in the database

### username -> email change conflicts

#### Login.jsx

```javascript
API.checkUser(loginObject)
      .then((user) => {
        console.log(loginObject);
        console.log(user);

        // checks if user has entered login information
        if (!loginObject.email || !loginObject.password) {
          alert("Please enter a username and password");
        } // checks that login matches database user
        else if (
          user.data.email === loginObject.email &&
          user.data.password === loginObject.password
        ) {
          props.setUserId(user.data._id);
          alert("Successfully Logged in!");

          // changes route to the admin products page
          routeChange("/admin");
        }
```
