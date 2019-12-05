# Athletes

------------------------------------------------------------------------------------------------------

Code description

Server: 

-> Micro services written on php Code igniter.
    PHPMicroservices/application/contollers/api/athletes.php.

-> Rest APIs written on Nodejs express.js 
    server/index.js - express app defined.
    server/routes/main.js - routes are defines.
    server/contollers/Athletes.js - Core business logic which communicates with database component.
    server/db/queries.js - Generic query builder which communicates with mysql database.

-> Database mysql
    server/db/database.sql - contains pre run database queries.

Client:

-> Client is written on react using react hooks
    src/API/athlete.js - REST API communicator.
    src/APP - react app module which contains main router.
    src/containers - contains all components with component specfic routes.
    src/Layout - contains Nav bar may also includes side bar.
    src/styles - contains component specific and app specific style sheets.

--------------------------------------------------------------------------------------------------------
    

Installation

-> git clone https://github.com/manojmorishetty/Kinduct-Athletes.git

-> run command "npm install" to download client packages.

-> cd server

-> run command "npm install" to download server packages.

-> Go to mysql workbench or any IDE run server/db/database.sql queries.

-> run command "npm start" to start server.

-> cd ../

-> Run codeigniter

-> run command "npm start" to start react client.

-> Hit localhost:3000 in browser.

-----------------------------------------------------------------------------------------------------------

Features

-> Upload a Athletes json file
-> Displays all Atheles list.
-> Single Athlete view
-> Delete any athlete
