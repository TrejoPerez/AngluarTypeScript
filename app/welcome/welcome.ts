/// <reference path="../../typings/index.d.ts" />

namespace AngularTypeScriptStarterKit {

    // UI logic for <welcome> component
    class WelcomeController {        
        constructor() {
            this.Text = "Hola AngularJS + TypeScript ";
        }     

        public Text:String;

        public confirm() {
            this.Text = "Esto funciona";
        }
    }


    // register <welcome> component with AngularJS 
    angular
        .module('app')
        .component('welcome', {
            templateUrl: 'app/welcome/welcome.html',
            bindings: {

            },
            controller: WelcomeController
        });

}
