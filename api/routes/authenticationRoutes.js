// app/routes.js

module.exports = function(app, passport) {
  'use strict';

  // route for twitter authentication and login
  app.get('/auth/twitter', passport.authenticate('twitter'));

  // handle the callback after twitter has authenticated the user
  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      successRedirect : '/profile',
      failureRedirect : '/'
    }));

};

/*
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  'use strict';

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
*/
