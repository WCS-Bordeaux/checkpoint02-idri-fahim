"use strict";

angular.module('wildNoteApp')

    .component("questions", {
        templateUrl: "/app/components/questions/questions.html",
        controller: Questions
    })


function Questions() {

    this.m_json = {
        "Pourquoi utiliser $resource dans angular plutôt que $http ": "$resource est plus facile a utiliser car $http on fait les GET, POST, le DELETE manuellementet, $ressource respecte l'architecute REST ",


        "C'est quoi la différence entre front-end et back-end en fait ?": " front-end est la parti client (qui sera envoyé auu client ) , back-end est les traitement et configuratipon coté serveur"

            ,
        " Pourquoi je peux pas utiliser document.getElementById dans NodeJS ?": " parceque c'est un trairement coté front",

        "Pourquoi c'est très grave d'utiliser document.getElementById dans AngularJS ": " c'est pas grave en-soit ça veux dire juste qu'on a pas compris à quoi sert AngularJs ,mais si on utilise,on vas pas exploiters pleinement angularjs et ses fonctionnalités qui facilite la vie ",

        "C'est quoi la différence entre NodeJS et Javascript": " javascript est un language de programmation , nodeJS est un programme,  une plateforme logicielle ",
        "En quoi c'est utile d'utiliser npm ": "npm est un est le gestionnaire de paquets pour Node.js ",
        "A quoi ça sert une base de donnée ? Et mongoDB ": " une base de donée sert a stocker des donées pour pouvoir y acceder ulterieurement , Mongodb est une base de donée non relationnel (sans shéma) ",
        "Est-il possible de faire des relations entre plusieurs collections ? Est-ce une bonne pratique ?": "dans les DB non relationnelle il est deconseillé de faire des relations entre plusieurs collections car c'est pas optimisé pour ça et ça prend beaucoups de ressources , Mais ça reste possible  ",
        "C'est quoi un document dans mongoDB ? et une collection au final ?": "Un documment et une connection c'est ce qui peu conrrespondre à une row et une table dans les DB relationnel,Concretement les documents sont des fichiers JSon (BSON) et collection c'est l'ensemble de de documents ",
        "Quelle serai la requête qui me permettrai d'aller chercher dans ma db toto dans la collection tata l'utilisateur ayant pour nom titi ?": 'db.("toto").find(titi)',

        "Est-il plus important de sécuriser le client ou le serveur ? Pourquoi ?": "securiser le serveur est plus important , car ceci concerne tout les utilisateurs du site",
        "citez 3 directive": "ng-repeat , ng-show , ng-class",
        'Pourquoi [1, 2, 3, () => "boom"][Number(true) + 2]() === "boom" ? Expliquez le plus précisément possible.': " Number(true) rencoie 1 puisque c'est true , 1+2 = 3 .  on a un tableau [ 1 , 2 ,3 , fonction]    . la ligne donnée accede a cette fonction qui renvoie Boom  (tab[3] )"

    }
}