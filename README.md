# microscope-component-contact
This is an addon starter component for the Ionic Framework.

## Dependencies
### Cordova Plugin

 - cordova-plugin-contacts

## How to use this template

*This component does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, add the component using the microscope-mobile node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

Add angular module :

     require('./components/contact/contact');
     
     // application definition
     var app = angular.module('app', [
     	'app.contact'
     ]);
     
Add route :

    $stateProvider
      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'components/contact/controllers/camera.html',
            controller: 'ContactCtrl as vm'
          }
        }
    });



