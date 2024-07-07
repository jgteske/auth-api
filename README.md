# auth-api

Example after: [YT Tutorial](https://www.youtube.com/watch?v=qylGaki0JhY)

Ref: [GitHub](https://github.com/TomDoesTech/auth-api-tutorial)

## Features

1. Register a user
2. Verify user's email address
3. Send forgot password email
4. Reset password
5. Get current user
6. Login
7. Access token
8. Refresh token

## What technology are in use?

- [TypeScript](https://www.typescriptlang.org/) - Static tye checking
- [Express@5](https://expressjs.com/en/5x/api.html) - Web server
- [Typegoose](https://typegoose.github.io/typegoose/) - Mongoose wrapper for creating TypeScript interfaces and models
- [argon2](https://github.com/ranisalt/node-argon2#readme) - Password hashing
- [Zod](https://github.com/colinhacks/zod) - Validation
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Signing and verifying JSON web tokens
- [Nodemailer](https://nodemailer.com/about/) - Sending emails
- [Pino](https://github.com/pinojs/pino) - Logging
- [config](https://github.com/lorenwest/node-config) - Managing configuration

## Needed Apps

- [Postman](https://www.postman.com/downloads/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Run the application

### Install

```powershell
yarn install
```

### Run db

```powershell
docker compose up -d
docker compose down
```

## Dev

```powershell
yarn dev
```
