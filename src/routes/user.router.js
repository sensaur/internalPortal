const { Router } = require('express');
const {
  userSignupRender,
  userSigninRender,
  userSignup,
  userSignin,
  userSignout,
} = require('../controllers/user.controller');

const userRouter = Router();

userRouter.route('/signup')
  .get(userSignupRender)
  .post(userSignup);

userRouter.route('/signin')
  .get(userSigninRender)
  .post(userSignin);

userRouter.route('/signout')
  .get(userSignout);

module.exports = userRouter;
