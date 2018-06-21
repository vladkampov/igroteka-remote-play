import { flattenObject } from '../utils';

/* eslint-disable max-len */
export default {
  lang: 'en',
  messages: flattenObject({
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
    },
    submenu: {
      consoles: 'Consoles',
      games: 'Games',
      demo: 'Download Demo',
      search: 'Search games',
    },
    login: {
      title: 'Log in',
      forgotPassword: 'I\'ve forgot my password',
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
      email: 'Email',
      changeEmail: 'Change',
      password: 'Password',
      changePassword: 'Change',
    },
    changePassword: {
      title: 'Change Password',
      form: {
        password: 'Password',
        passwordConfirmation: 'Password confirmation',
        submit: 'Change Password',
      },
    },
  }),
};
