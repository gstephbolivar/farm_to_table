# **Farm to Table**
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## **Table of Contents**
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [License](#license)
  * [Credits](#credits)
      
  ## **Live Link**
  https://glacial-falls-13622.herokuapp.com/      
  ## **Description**
  Farm to Table is a web application that is also made to be highly mobile responsive. It currently connects users to a farm where they can reserve products like fresh meats, fruits, vegetables and dairies. The application is built with an admin side to allow the farmer who is selling their products be able to add, edit and delete what is for sale. The admin also has to ability to mark something as "Out of Season" which will keep the product in their database but will not display it to users. The application features a functioning cart that can be edited and updated dynamically. In the near future we hope to add the ability to have multiple farms able to set up accounts in our application to broaden products and their availability.
  ## **Demo**
  #### **Desktop/Laptop**
  ![home page](client/public/assets/readMe/homeDesktop.png)

  #### **Mobile**
  ![home page](client/public/assets/readMe/homeMobile.png)

      
   ## **Contributors**
  * [Melanie Bostwick](https://github.com/mbostwick1)

  * [Stephany Bolivar](https://github.com/gstephbolivar)  

  * [Rashawn Raiford](https://github.com/raiford2530)
      
  * [Robert Anderson](https://github.com/reanderson89)

  * [Neil Gandhi](https://github.com/ntch2000)

  
  ## **Technology Stack**
  javascript, node.js, express.js, express-sessions, handlebars, nodemailer, passport, bulma, sequelize, mysql, jquery, heroku, jawsDB


  ## **Questions**   
  ####    **For any questions or inquiries please contact us at,**


**Melanie Bostwick**
  * #### **GitHub:** [@mbostwick1](https://github.com/mbostwick1)
  * #### **Email:** [mbostwick1@gmail.com](mbostwick1@gmail.com)

 **Stephany Bolivar**
  * #### **GitHub:** [@gstephbolivar](https://github.com/gstephbolivar)
  * #### **Email:** [g.stephanybolivar@gmail.com](g.stephanybolivar@gmail.com)
  
**Rashawn Raiford**
  * #### **GitHub:** [@raiford2530](https://github.com/raiford2530)
  * #### **Email:** [raiford87@gmail.com](raiford87@gmail.com)

**Robert Anderson**
  * #### **GitHub:** [@reanderson89](https://github.com/reanderson89)
  * #### **Email:** [reanderson89@gmail.com](reanderson89@gmail.com)

**Robert Anderson**
  * #### **GitHub:** [@ntch2000](https://github.com/ntch2000)
  * #### **Email:** [ngtych4@gmail.com](ngtych4@gmail.com)

  ## **Credits**
   * [Bulma](https://bulma.io/)
   * [Jaaak | Stutterstock](https://premier.shutterstock.com/image/contributor/2723206)
   * [Dotties Vanilla: Designed by Kyle Letendre; Exclusively at Lost Type](https://latest.losttype.com/introducing/dotties)
   * [Font awesome](https://fontawesome.com/)
   * [Bulma NavBar functionality](https://codepen.io/Nikitoss334/pen/VOEdVY)
  
    
  ## **License**
  MIT
      
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
