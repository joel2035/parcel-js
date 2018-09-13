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
      videos: ["suits", "inspectuer"]

    },
    {
      value: "contact",
      label: "contact",
      videos: {
        input: [{
            name: "firstName",
            label: "firstName",
            placeholder: "firstName",
            type: "text"
          },
          {
            name: "lastName",
            label: "lastName",
            placeholder: "lastName",
            type: "text"
          },
          {
            name: "email",
            label: "email",
            placeholder: "email",
            type: "email"
          },
          {
            name: "textarea",
            label: "message",
            placeholder: "textarea",
            type: "textarea"
          }
        ]
      }


    }


  ]
  $scope.dossierCourant = null;
  $scope.videoSelectionne = null;
  $scope.selectionDossier = function(dossier) {
    $scope.dossierCourant = dossier;
  }
  $scope.selectionVideo = function(video) {
    $scope.videoSelectionne = video;
  }
})