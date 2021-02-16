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

### Conditionally Render Navbar

- IF NO ROLE (customer/admin) -> Only render signup/login. Shop button on main page still goes to allproducts page

- IF ADMIN -> renders all links including dashboard (no signup/login link). Need to add logout link

- IF CUSTOMER -> renders products and car link (no dashboard). Need to add logout link
