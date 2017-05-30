// 'use strict'

// const config = [
//     "$stateProvider",
//     "$urlRouteProvider",
//     Config
// ]

// angular.module('wildNoteApp', [
//         "ui.router"
//     ])

//     .config(config)

// // .factory("Hey", function() {
// //     return {getConseil: () => "utilise les factory pour créer ta ressource !"}
// // })

// function Config($stateProvider, $urlRouteProvider) {
//     const states = [{
//         name: "home",
//         url: "/",
//         component: "home"
//     }];


//     $urlRouterProvider.otherwise('/zergling')

//     states.forEach((state) => {
//         $stateProvider.state(state)
//     })
// }
"use strict";

angular.module("wildNoteApp", [
        // les dépendances externes
        "ui.router"
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        var states = [{
                name: "home",
                url: "/",
                component: "home"
            }

        ];

        states.forEach(function (state) {
            $stateProvider.state(state);
        })
        $urlRouterProvider.otherwise('/zergling')
    })
    // .factory("Hey", function () {
    //     return {
    //         getConseil: () => "utilise les factory pour créer ta ressource !"
    //     }
    // })

;