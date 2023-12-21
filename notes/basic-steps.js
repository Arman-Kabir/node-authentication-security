/*
    // WDS 
    npm init -y --> initialize project with default setting

    npm i express jsonwebtoken dotenv (.env will contain our secret token for our jwt)

    npm i --save-dev nodemon(automatically refreshes server when we make changes )


    app.use(express.json()); --> lets our app use json  from the body that gets passed up to it inside of requests

    require('crypto').randomBytes(64).toString('hex')
-----------------------------------------------------
    // nn 
    * npm i ejs
    **setting up passport
    npm i passport passport-google-oauth20
    npm i cookie-session
    ------there was an error- to solve -> req.session.regenerate(function(err) {->
    npm uninstall passport
    npm install passport@0.5
    ------------------------
    
    
*/