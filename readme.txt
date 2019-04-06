Running the YelpCamp app:
========================

Clicking the cog in top right (next to 'Share') takes you to Preferences

The 'Run Configuration' with name of 'YelpCamp' has:
    - Command : YelpCamp/app.js
    - Runner: Node.js
    
    - ENV
        DATABASEURL : mongodb://localhost/yelp_camp
        
Step 1: Start the database
Window -> New Terminal
Start the MongoDB database:
    > cd ~
    > ./mongodb --smallfiles
    
Step 2: Start the application
Either:
    - 'Run Project' from menu bar (uses default run configuration command and runner)
Or:
    - Window -> New Terminal
    > cd ~/workspace/YelpCamp
    > DATABASEURL='mongodb://localhost/yelp_camp' node app.js

Step 3: Access via browser    
Application landing page:
    - https://web-dev-bootcamp-gjanes.c9users.io/
    - login as gjanes/Mr d
    

-- Repairing the DB

$ mongod --dbpath /home/ubuntu/data --repair

-- Removing data
$ mongo
> shows dbs
admin      (empty)
local      0.078GB
test       (empty)
yelp_camp  0.078GB
> use yelp_camp
switched to db yelp_camp
> show collections
campgrounds
comments
system.indexes
users
> db.getCollection("comments").drop()
true
> db.getCollection("campgrounds").drop()
true



