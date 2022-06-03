/**
 * --------------
 * ONE TIME FOR ANY COMPUTER
 * --------------
 * 1. create heroku account
 * 2. verify email
 * 3. install heroku cli
 * 4. run heroku login command in project folder
 * -----------------------------
 * For each project one time
 * =============================
 * 1. heroku create
 * 2. make sure you: git add . > git commit > git push
 * 3. git push heroku main
 * 4. Go to Heroku Dashboard > Current Project > Setting > Reveal Config vars
 * 5. copy paste config vars from your .env file
 * 6. Make sure you have whitelisted all ip address to access mongodb
 * -----------------
 * Update Server
 * -----------------
 * 1. Make Changes
 * 2. make sure you: git add . > git commit -m > git push
 * 3. git push heroku main
 * ---------------------------
 * Connect Server with client 
 * ---------------------------
 * 1. replace localhost by heroku link
 * 2. npm run build 
 * 3. firebase deploy
 */