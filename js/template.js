import Angularjs from "angularjs";
var app = angular.module("Webmail", []);
// le service location nous permet d'inclure l'etat de l'application dans l'url.
app.controller("WebmailCtrl", function($scope) {
  $scope.dossiers = [{
      value: "About",
      label: "About",
      videos: ["porté disparu", "commando", "tueue de dragon", "chasse à l'homme", "suits", "snowfall", "Arrow", "Bad gril", "Overlord", "HunterxHunter", "God of martial art", "Soul land"]
    },
    {
      value: "Projet",
      label: "Projet",
      videos: ["porté disparu", "commando", "tueue de dragon", "chasse à l'homme"]
    },
    {

      value: "Compétence",
      label: "Conpétence",
      videos: ["suits", "snowfall", "Arrow", "Bad gril"]

    },
    {

      value: "Contact",
      label: "Contact",
      videos: ["Overlord", "HunterxHunter", "God of martial art", "Soul land"]

    }

  ]
  $scope.dossierCourant = null;
  $scope.selectionDossier = function(dossier) {
    $scope.dossierCourant = dossier;
  }
})