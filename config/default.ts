export default {
  port: 3021,
  dbUri: 'mongodb://localhost:27017/user-auth-api',
  logLevel: 'info',
  accessTokenPrivateKey: '',
  refreshTokenPrivateKey: '',
  // for production use smtp-verser and set secure to true
  // to create user and pass - uncomment /src/utils/mailer/createTestCreds()
  smtp: {
    user: 'pb4uflrn64ryrr24@ethereal.email',
    pass: 'qndt5aXwz9hjKA6kYM',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
  },
};
