var AngularTypeScriptStarterKit;
(function (AngularTypeScriptStarterKit) {
    angular
        .module('app', []);
})(AngularTypeScriptStarterKit || (AngularTypeScriptStarterKit = {}));
/// <reference path="../../typings/index.d.ts" />
var AngularTypeScriptStarterKit;
(function (AngularTypeScriptStarterKit) {
    // UI logic for <welcome> component
    var WelcomeController = (function () {
        function WelcomeController() {
            this.Text = "Welcome to AngularJS + TypeScript Starter Kit!";
        }
        WelcomeController.prototype.confirm = function () {
            this.Text = "It is awesome!";
        };
        return WelcomeController;
    }());
    // register <welcome> component with AngularJS 
    angular
        .module('app')
        .component('welcome', {
        templateUrl: 'app/welcome/welcome.html',
        bindings: {},
        controller: WelcomeController
    });
})(AngularTypeScriptStarterKit || (AngularTypeScriptStarterKit = {}));
