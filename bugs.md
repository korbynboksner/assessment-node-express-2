module.exports = app; twice in app.js
user route delete did not have requirelogin
user route double checking auth, removed second check of auth
user route delete function missing await in front of User.delete
in auth.js added jwt verify using secret key
added express errors in users.js as express error was unused