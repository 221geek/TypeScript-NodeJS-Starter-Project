import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config/constants';
import { getRepository } from 'typeorm';
import { User } from '../app/models/entities/User';

class PassportSetup {
    createConnection() {
        passport.use(new GoogleStrategy.Strategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: ''
        }, (accessToken, refreshToken, profile, done) => {
            /* process.nextTick(() => {
                console.log("profil.id" + profile.id);
                return done('', profile.id);
            }) */
        }))
    }
}

export default PassportSetup