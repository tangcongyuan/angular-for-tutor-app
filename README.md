# angular-for-tutor-app
Front-end code for Tutor App

## How to get it up and running
I use [http-server](https://github.com/indexzero/http-server) to serve the app, so after install that using node:
```shell
$ http-server -a localhost -p 3000
```
Make sure angular is served on ```localhost:3000```, I only set Cross Origin Resource Sharing available on ```localhost:3000```.

## Structure of the app
The app use [AngularUI Router](https://github.com/angular-ui/ui-router) as its routing framework, and now it has these pages:
* Home
* Login
* Reviews(login required)

...
