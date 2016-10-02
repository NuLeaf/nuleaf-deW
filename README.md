# NuLEAF-deW|Web
Nuleaf website frontend.

## Quickstart

### Clone the repo.
```
git clone https://github.com/NuLeaf/nuleaf-deW.git nuleaf-dew
```

### Build the docker image.
```
docker build -t nuleaf-dew ./nuleaf-dew
```

### Start the docker container.
```
docker run -dit
           --name nuleaf-dew
           -p 3001:3000
           --link nuleaf-source:nuleaf-source
           -e NULEAF_SOURCE_URL=http://nuleaf-source:3000
           nuleaf-dew
```

## Installation

### Node.js
Our Angular2 application runs on Node.js. Please go to their [website](https://nodejs.org/en/) and install the latest version.

### NPM
Node.js uses a package manager called NPM. This will be the main command line tool we will use to install dependencies and to start our application. The installation of Node.js should have included NPM.

Check that you have both installed using `node -v` and `npm -v`.

### Clone the repo.
```
git clone https://github.com/NuLeaf/nuleaf-deW.git nuleaf-dew
```

### Install dependencies.
```
cd nuleaf-dew/nuleaf-dew

npm install
```
If after the installation the `typings` directory does not exist, install it manually with `npm run typings install`

### Set application configurations.
Our Angular2 app requires a backend server (nuleaf-source) for all of its resources ( events, steminars, users, etc...). To let our app know where that server is, we need to set up our configurations to point to our server. If you're running nuleaf-source locally, the address should be `http://localhost:3000`.

### Run the application.
```
npm start
```
