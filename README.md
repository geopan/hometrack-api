# hometrack-api

A simple address concatener api.

Use the following link for testing the api in production:

`POST` https://hometrack-address-api.herokuapp.com

## Install
```
$ git clone https://github.com/geopan/hometrack-api.git
$ cd hometrack/
$ npm install
```

## Test
Tests the POST endpoint with an expected valid JSON, an unexpected one and an unvalid JSON format.
```
grunt test
```

## Run
### Development
Run the app in development mode using grunt with watch and autoreload.
```
grunt serve
```
### Prod
Run the app in production mode
```
NODE_ENV=production npm start
```

