# navigation_view
## Introduction
The navigation view uses Vue.js framework for frontend rendering. It sets up all frontend layout and handle the data
flow from backend.

The front end has multiple components, and each component is in charge of rendering different services. 

## Release Notes
### What's New In This Version
* Provide flight search serivce to user and display appropriate information at front end.
* Provide navigation service to user and provide interactive interface for users to use the App.
* Provide ride share and parking lot information to users. 
* Provide restaurants look up and airport exploration service to user, so that customers are able to enjoy more during their trip.

### Known Bugs and Defects
* The exploration service has not been integrated with the backend.
* Ride share service has not been connected to third party API.

## Download Project
* Download by using `git`.

```
git clone https://github.com/GTAirportNavigation/navigation-view.git
```

* Download zip file. [zipped file address] (https://github.com/GTAirportNavigation/navigation-view).

## Install Guide
### Pre-requisites
* npm >= 5.6.0

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Run Instructions
* Start localhost test server.

```
npm run dev
```

## TroubleShooting
* npm package install related: please refer to the official documents or by utilizing the warning information to debug.
* It is normal to see some warnings when the server is started. Make sure the server runs successfully. 


