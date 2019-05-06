AP Gateway

1. [Nodejs](https://nodejs.org/en/)
2. [TypeScript](http://www.typescriptlang.org/)

#### Endpoints
     1. /healthcheck
             1.1 [GET] => returns {ok: true} if service is up

#### Run 
 Note: Requires node.js and npm to be installed.

    npm i
    npm run build
    npm start
    curl http://localhost:3000/healthcheck

### Test

#### Integration Tests
     cd [root directory of repository]
     npm start&
     npm run itest
