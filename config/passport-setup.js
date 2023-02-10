const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientId: 'dkljfieru92r8eijfklsdjfiajfi',
    clientSecret: 'fjdksfjidfsd9ffkdjflka'
    // store these keys some where secure

}), (accessToken, refreshToken, profile, done)=> {
    // passport callback function
    // redirect uri
    console.log(profile);
})