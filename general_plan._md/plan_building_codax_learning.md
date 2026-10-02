create a plan what the project looks like
    |
    |
    |   1. this project will be the website where user or all people that was interested on learning about coding or the job skill that they want to achive.
        2. this website or project can help to all developer to learn or can be get thier certificates if they want to.
            |
            |
            but this will not recommended to get since is just a unknow or not verify website that they can trust
            --> but this will be helpfull for them to start with since the info that going to give or get is base on the reseach that i collect.
    |
    |
    the strure flow or plan: 
    1. we need to create a homepage for the context of our project or website
        -> this will have:
            - logo
            - login link
            - context hero
            - info like contact 

    2. if the user click the login/register form they ? :
            |
            |
        - we need to create a pages for login and register form
            ----> so the user can login or create thier account
            --->  but alco they can login with thier google account but it will be ongoing processs ...
        - if user login succesfully? :
            ---> the user navigate to the dashboard
            |
            | 
            we need a backend to do that
            |
            |
            backend files:
            |
            --->  this will be the logic handle for us to get the request of user from browser

            --->
                |
                |
                server.js 
                -   this will be the code for our server 
                |
                controllers
                -   this will be the code logic for our controller.js
                    |
                     auth.controllers.js
                        -> inside of this we can  do some logic so the user can post and save  and recieve data from the client
                        |
                            -> login and register form
                                -> create a post method where we can recieve data from the user and do logic code to verify if all the rules was apply 
                                        |-> if yes then we save thier account was being create to our database so that they can use it on login
                                        | -> else no -> then the client or user will be recieving some message that they need to  follow
                                ->  if the user login succesfully
                                    - backend:
                                            -   we need to create a cookies for every user to remember the server or browser who    the user make a request
                                            -   but before that we need to connect the sessionid from the userId to know the server or browser which users sessionid belong to it.
                                            -   so we need to connect the session id from the database userid
                                            -   return a json message or data from the client
                                        |
                                         - function : Getme:
                                                -   we need to create a logic to get the user or which user login to our browser
                                                -   to do that we need to verify first which user sessioId belong to it.
                                                -   we can use it to take user data profile
                                         -  function logout:
                                                -   we need to create a logic to clear the cookie from the browser and delete sessionId from the database
                                                -   so every time that user click logout button it will clear it or delete that data from the user so they can logout
                                    - frontend
                                     |      - loginPage.jsx :
                                                - set a loading page for login before go to the dashboard
                                                - use navigate to go on the dashboard


                                     |
                                     | 
                                        : build a dashboard code where user can see a header hero content 
                                            -> and insdie of the hero content it has a lot of list where they can choose all the role that they want to learn about thier career
                                                : like about Software & Application Development:
                                                    - and inside of this job title they can see alot of list option that they can choose like softwere engineer
                                                    - and also when they click some of that list there a right side content was being display about the career that they choose
                                                                                    
                                    
                |   
                routes
                -   this will be the router or routes that connect to the controller for us
                 --->
                    |
                    auth.routes.js
                        -> This says which HTTP request goes where:
                            -> : this will be the routes for 
                                - login and register form
                    |
                    
                |
                database
                -   this will be the database for our project
            |

                        WEBSITE
                            |
             ┌──────────────┴──────────────┐
             ↓                             ↓
         HOMEPAGE                    AUTHENTICATION
             |                             |
      Learn about site               Login / Register
             |                             |
             └──────────────┬──────────────┘
                            ↓
                        DASHBOARD
                            |
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
      LEARNING           PROGRESS           PROFILE
          |
          ↓
       CAREERS
          |
          ├── Frontend Developer
          │       |
          │       ↓
          │    Learning Path
          │       |
          │       ├── HTML
          │       ├── CSS
          │       ├── JavaScript
          │       └── React
          │
          ├── Backend Developer
          │       |
          │       ↓
          │    Learning Path
          │       |
          │       ├── JavaScript
          │       ├── Node.js
          │       ├── Express
          │       └── Databases
          │
          └── Full-Stack Developer
                  |
                  ↓
               Courses
                  |
                  ├── Frontend
                  ├── Backend
                  ├── Database
                  └── Deployment
    


frontend UI/LAYOUT:
    |
    |
         -->: dashBoard.jsx file:
        -   sideBar:
                -   for every list of layout i want it to be a clickable so every time that i click one of the list of side bar there a info that will display on the   right side about that we click in the list
                |
                    -    we have to create a data for every category job that contain a lot of infomation about them.
                    -    we have to create a useState that hold a value first "softwere development" since even though we didnt click one of the list the softwere development will be showw
                    -    one we click one of the button of the list the usestate will be change but it depends on the list the we click.

    |
    -> : version 2 of ui design on every category list this will be (pages) for every list of each category.
            -   so since each category has thier own list title/career job i want it to be also a clickable so i/users can go to that pages since im going to create a  pages for each list career job
            pages files:
                -   here in this files im going to create a pages files.jsx for every list
                -   and put all the informatiom about it.
                -   but before that i need to use navigate to go on the page that the users want to.
                -   but it depends on the list that they click and that will how our logic handle it the navigate category will be holding a id base on the list index have.
