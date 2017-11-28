# Focus Group App / Corporate Group Management

<main>

<article>

## Concept:

The purpose of this application is to connect businesses with users who wish to participate in targeted information gathering exericses (eg: surveys) for monetary compensation. 

The application is built with React featuring an Express backend. The app will have CRUD functionality to store, retrieve, and manipulate user data in a SQL database.

## Key Features:

*   Authentication for both business representatives and the targeted participants.
*   Once logged in, the business reps will have the ability to search through the user data in order to isolate the desired demographic.
*   Business users will also be able to monitor their ongoing information gathering campaigns. They will be able to create\start new campaigns and end a campaign.
*   Detailed information for campaigns will also be available via the app.

</article>

<article>

## Code planning:

<div style="background-color: #fef0cf;padding:10px;margin-bottom: 10px;">

### Database Structure:
DB Name: focus_group

##### Database Tables:
      groups
        - id SERIAL PRIMARY KEY,
        - group_name
        - biz_id
        - user_id
        
      user_profiles
        - id SERIAL PRIMARY KEY,
        - age INT,
        - sex VARCHAR(255),
        - height INT,
        - weight INT,
        - income INT,
        - street_address VARCHAR(255),
        - city VARCHAR(255),
        - state VARCHAR(255),
        - zip INT,
        - user_id integer references users(id) NOT NULL
      
      
      biz_profiles
        - id SERIAL PRIMARY KEY,
        - bizname VARCHAR(255),
        - street_address VARCHAR(255),
        - city VARCHAR(255),
        - state VARCHAR(255),
        - zip INT,
        - biz_description TEXT,
        - biz_url TEXT,
        - biz_id integer references 
        
       
       campaigns
        - id SERIAL PRIMARY KEY,
        - biz_id integer references biz_profiles(id) NOT NULL,
        - c_name TEXT
        
       campaigns_users
        - id SERIAL PRIMARY KEY,
        - users_id integer references users(id) NOT NULL,
        - campaigns_id integer references campaigns(id) NOT NULL
       
</div>

<div style="background-color: #fef0cf;padding:10px;margin-bottom: 10px;">

### User Stories:

_Business_

*   As a business I want to search for users relevant to my campaign
*   As a business I want to filter my searches for the ideal candidates
*   As a business I want to be able to select users and add them a campaign

_User_

*   As a user I want to create a profile
*   As a user I want to see invitations from companies
*   As a user I want to accept invites from companies
*   As a user I want to manage all my interactions with a company

</div>

</article>

<article style="text-align: center">

## Wireframes: 

![](https://raw.githubusercontent.com/dylonion/Movies-app/master/focusgroup-mainpage-login-consolidated.jpg)

![](https://raw.githubusercontent.com/dylonion/Movies-app/master/focusgroups-userpage.jpg)

![](https://raw.githubusercontent.com/dylonion/Movies-app/master/focusgroups-searchpage.jpg)

![](https://github.com/dylonion/Movies-app/blob/master/new-userpage-surveys.jpg)

![](https://raw.githubusercontent.com/dylonion/Movies-app/master/focusgroups-viewsurveypage.jpg)

![](https://raw.githubusercontent.com/dylonion/Movies-app/master/corporate-page.jpg)

</article>

<article>

## Phases of completion:

#### Phase 1 
  *	Build out backend file structure
  *	Build out frontend file structure
  *	Create DB migrations and seed files

#### Phase 2
  *	Fill out backend skeleton code 
  *	Fill out frontend skeleton code
  *	Authentication

#### Phase 3
  *	Controller + models
  *	Frontend authentication and stateless components
  *	App.js and Server.js
  
  
#### Phase 4
 *	Forms and styling
 * Controller + models is probably a multi-day task
 * App.js + server.js is probably a multi-day task

  
#### Phase 5
  -TBD: bonuses (corporate creating campaign/focusgroup content, data visualizations, adding a ‘seed’ task for users to complete)
</article>

<article>

## Style guide:

</article>

Originally, [this site](https://identitydesigned.com/bosphorus/) was used as a guideline for application styling. However, the site was taken offline mid-project.

The application serves as a proof-of-concept of a potential professional service for businesses and their clients to connect. Therefore it was styled in such a way to reflect this goal.

And with that in mind, other points of interest include:

*	Flexbox to manipulate the elements on both the client\user and business sides of the application 

*	Black, white, as well as, various shades of grey and teal were used in order to bring an aura of professionalism to the style

*	Buttons that highlight on hover for improved usability

In addition, there's a plethora of cosmetic touches, which add to the overall feel of the application.  
        	
<article>

## Links and resources:

[Faker:](https://www.npmjs.com/package/faker) NPM Package for database dummy user data

[Font Awesome:](http://fontawesome.io/) for a navbar menu icon

</article>

</main>
