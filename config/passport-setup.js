const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('model');
// create your model and require it

passport.serializeUser((user, done)=>{
    // the user is the user that we pass as done value
    done(null, user.id);
})

passport.deserializeUser((id, done)=>{
    // id is that ^ user.id
    User.findById(id).then(user => {
        done(null, user);
    });
})

passport.use(new GoogleStrategy({
    // options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientId: 'dkljfieru92r8eijfklsdjfiajfi',
    clientSecret: 'fjdksfjidfsd9ffkdjflka'
    // store these keys some where secure

}), (accessToken, refreshToken, profile, done)=> {
    // passport callback function
    // redirect uri
    // the done sends the selected user to seriliaze methoe
    console.log(profile);
    // create new user to save to db
    // remember to not save one user twice
    // retrive the data and check if user already exitst in out db
    User.findById(profile.id).then((currentUser)=>{
        if(currentUser){
            console.log('user is', currentUser);
            done(null, currentUser)
        } else{
            new User({
                username: profile.displayname,
                googleid: profile.id,
                // we can retrive the profile pic as well
                thumbnell: profile._json.image.url
            }).save().then((newUser)=>{ 
                console.log('new user created', newUser);
                done(null, newUser)
            })
        }
    })
    
})