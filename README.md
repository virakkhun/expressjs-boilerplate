# API Boilerplate For Building API with ExpressJS

<p align="start">
  This is a boilerplate for implementing API using <code>ExpressJS</code> Node.js framework and <code>mysql</code> DBMS
  with <code>Sequelize</code> ORM. In this project, we will use <code>yarn</code> for node package management.
</p>

### dependencies

- [express](https://expressjs.com/).
- [cors](https://yarnpkg.com/package/cors).
- [body-parser](https://yarnpkg.com/package/body-parser).
- [dotenv](https://yarnpkg.com/package/dotenv).
- [sequelize](https://sequelize.org/).
- [mysql2](https://yarnpkg.com/package/mysql2)
- [nodemon](https://yarnpkg.com/package/nodemon).

### Setup Guide

<p>
  To get started with the project, you need to clone the repository and open the project and copy the <code>.env.example</code> to 
  <code>.env</code> and make sure you put your own database configuration and the last thing you are going to do is run <code>yarn install</code> to install the dependencies.

</p>

```bash
# clone the repository
$ git clone https://github.com/virakkhun/expressjs-boilerplate-sequelize-mysql.git
# go into the repository
$ cd expressjs-boilerplate-sequelize-mysql
# copy the .env.example to .env
$ cp .env.example .env
# install the dependencies
$ yarn install
```

### Run Project

```bash
# to run the project
$ yarn start
```

Open you browser and paste the below url into the search bar

<code> localhost:3000/hello </code>
