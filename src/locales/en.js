import { flattenObject } from '../utils';

/* eslint-disable max-len */
export default {
  lang: 'en',
  messages: flattenObject({
    breadcrumbs: {
      home: 'Home',
      catalog: 'Catalog',
      consoles: 'Consoles',
      games: 'Games',
      profile: 'Profile',
      profileEdit: 'Profile Editing',
    },
    header: {
      home: 'Homepage',
      catalog: 'Catalog',
      about: 'About',
      download: 'Download',
      pay: 'Pay',
      logout: 'Log out',
      profile: 'My Profile',
      login: 'Log in',
      signup: 'Sign up',
      emptyNotifications: 'You have no unreaded notifications.',
    },
    submenu: {
      consoles: 'Consoles',
      games: 'Games',
      demo: 'Download Demo',
      search: 'Search games',
    },
    catalog: {
      buyButton: 'Buy subscription',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'Now it\'s type to choose the console to play!',
      },
    },
    login: {
      title: 'Log in',
      forgotPassword: 'I\'ve forgot my password',
      signup: 'Sign up',
      form: {
        identifier: 'Email or Username',
        password: 'Password',
        submit: 'Login',
      },
    },
    register: {
      title: 'Sign up',
      form: {
        username: 'Username',
        email: 'Email',
        password: 'Password',
        passwordCheck: 'And password one more time to be sure',
        submit: 'Register',
      },
    },
    profile: {
      edit: 'Edit profile',
      email: 'Email',
      changeEmail: 'Change',
      password: 'Password',
      changePassword: 'Change',
      paymentsHistory: 'Payments History',
      noPayments: 'You have no payments yet',
      subscriptionHistory: 'Subscription History',
      subscriptionDays: '{days} day(s)',
      subscriptionDaysLeft: '{days} day(s) left',
      noSubscriptions: 'You have no subscriptions yet',
      seePayment: 'See Payment',
    },
    setNewPassword: {
      title: 'Change Password',
      success: 'You`re password was successfully changed. Now you can Log In',
      form: {
        password: 'Password',
        passwordConfirmation: 'Password confirmation',
        submit: 'Change Password',
      },
    },
    pay: {
      title: 'Buy Subscription',
      buyButton: 'Buy',
      consoleGroup: {
        title: 'You choosed {name} console! That\'s cool!',
        body: 'Now choose the subscription which is best for you.',
      },
    },
    consoleGroupDetails: {
      games: 'Games included',
      buyButton: 'Buy subscription',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'You can choose this type of console to play!',
      },
    },
    gameDetails: {
      consoleGroups: 'This game are avalaible on',
      buyButton: 'Buy subscription to play this game',
      trailer: 'Check out the trailer',
      pay: {
        title: 'You choosed {name} Subscription type',
        body: 'You can choose this game and we\'ll provide you with console!',
      },
    },
    passwordRecovery: {
      title: 'Password Recovery',
      success: 'Your recovery request was accepted. Check out your email to continue.',
      form: {
        email: 'Email',
        submit: 'Recover',
      },
    },
    profileEdit: {
      title: 'Profile editing',
      form: {
        username: 'Username',
        email: 'Email',
        submit: 'Edit',
        image: 'Avatar',
      },
    },
    home: {
      title: 'This is a new way to play.',
      subtitle: 'To play Consoles games on your PC',
      callToAction: 'Try it now',
      reasons: {
        title: 'Here\'s why you\'ll like it',
        0: 'Now you can play games from Console right on your PC',
        1: 'You don\'t need to buy games. You are getting access to console with preinstalled games',
        2: 'Connect your Game controller and feel it',
        3: 'Play from any Windows device just with your account',
      },
      paymentTypes: {
        title: 'Start playing right now!',
        subtitle: 'Get a subscription and be cool',
      },
      games: {
        title: 'We have a big games libriary',
        subtitle: 'Check if game you want exist in our library',
        search: 'Start typing...',
        noGame: 'There\'s no game with this name. Probably it will appear soon',
      },
      footer: {
        title: 'More than 1000 players\nenjoy the possibilities\nof our service.\n\nJoin us!',
        callToAction: 'Subscribe and Play',
      },
    },
    accountGenerator: {
      title: 'Uh oh! Seems like you don\'t have account yet',
      body: 'Let\'s create one with one field only. You\'ll recieve credentials on your email',
      login: 'Have account? Log in.',
      form: {
        email: 'Email',
        submit: 'Sign up',
      },
    },
    paymentStatus: {
      title: 'Your payment is {status}',
      body: {
        FAILED: 'Please try again',
        PENDING: 'Please contact our customer servuce',
        SUCCESS: 'You are all set!',
      },
      button: {
        home: 'To Homepage',
        profile: 'to profile',
        download: 'Download client',
      },
    },
  }),
};
