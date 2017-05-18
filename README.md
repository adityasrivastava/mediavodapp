# `Media VOD App` — Video media app with node mongodb angular

The project contains web app developed in nodejs, mongodb, AngularJS, and uses a plyr plugin for
playback of video.

Features:

+ Store user history when user selects a video for playing
+ Mongodb for store user details
+ NodeJS as server of web page and database transaction
+ Develop as a web app with angular js


## Requirements 

* NodeJS
* AngularJS
* Bootstrap
* Plyr plugin
* Mongodb 

## Getting Started

Steps involved to start the application:

* Please make sure mongodb is running

* Run npm install in root directory of project

* node server.js to start application

* Browse url to localhost:3000

Keyboard shortcuts:

| key	    | global	|     action                              | 
|---------|---------|-----------------------------------------| 
| 0 to 9	|   ✔	    |   Seek from 0 to 90% respectively       | 
| space		|         |   Toggle playback                       | 
| K	      |   ✔	    |   Toggle playback                       | 
| ←		    |         |   Seek backward by the seekTime option  | 
| →		    |         |   Seek forward by the seekTime option   | 
| ↑		    |         |   Increase volume                       | 
| ↓		    |         |   Decrease volume                       | 
| M	      |   ✔	    |   Toggle mute                           | 
| F	      |   ✔	    |   Toggle fullscreen                     | 
| C	      |   ✔	    |   Toggle captions                       | 

Note: Configure mongodb connection details in config.json



