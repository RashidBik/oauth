const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('model');
// create your model and require it


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
    // create new user to save to db
    // remember to not save one user twice
    // retrive the data and check if user already exitst in out db
    User.findById(profile.id).then((currentUser)=>{
        if(currentUser){
            console.log('user is', currentUser);
        } else{
            new User({
                username: profile.displayname,
                googleid: profile.id
            }).save().then((newUser)=>{ console.log('new user created', newUser);})
        }
    })
    
})