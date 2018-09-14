import Angularjs from "angularjs";
var app = angular.module("Webmail", []);
// le service location nous permet d'inclure l'etat de l'application dans l'url.
app.controller("WebmailCtrl", function($scope, $location, $anchorScroll) {
  $scope.dossiers = [{

      value: "About",
      label: "About",
      contentAbout: [{
        id: 1,
        title: "About",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui"
      }]

    },
    {
      title1: "Projet",
      value: "Projet",
      label: "Projet",
      contentProjet: [{
          id: 2,

          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
          name: "PerfectSite",
          urlImage: "image/got.jpg",
        },
        {
          id: 3,

          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
          name: "PerfectSite",
          urlImage: "image/got.jpg",
        },
        {
          id: 4,

          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
          name: "PerfectSite",
          urlImage: "image/got.jpg",
        },
        {
          id: 5,

          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
          name: "PerfectSite",
          urlImage: "image/got.jpg",
        }
      ]

    },
    {
      title2: "Compétence",
      value: "compétence",
      label: "Compétence",
      contentSkill: [{
          id: 6,
          nam: "programmation",
          p1: "javascript",
          p2: "HTML5 && CSS3",
          p3: "MySQL",
          p4: "php",
          p5: "Wordpress"
        },
        {
          id: 7,
          nam: "Graphisme",
          p1: "PHOTOSHOP",
          p2: "ILLUSTRATOR",
          p3: "SKETCH"
        },
        {
          id: 8,
          nam: "Langue",
          p1: "FRANCAIS",
          p2: "ALLEMAND",
          p3: "ANGLAIS"

        }

      ]

    },
    {
      title3: "Contact",
      value: "Contact",
      label: "Contact",
      contentContact: [{

          nameInput: "FirstName",
          placeholder: "FirstName",
          label: "FirstName",
          type: "text"
        },
        {

          nameInput: "Name",
          placeholder: "Name",
          label: "Name",
          type: "text"
        },
        {

          nameInput: "email",
          placeholder: "email",
          label: "email",
          type: "email"
        },
        {

          nameInput: "Tel",
          placeholder: "Tel",
          label: "Tel",
          type: "number"
        },
        {

          nameInput: "textareal",
          label: "message",
          type: "textareal"
        }


      ]
    }
  ];
  $scope.dossierCourant = null;
  $scope.selectionDossier = function(dossier) {
    $scope.dossierCourant = dossier;
  }
  // onsurveille les changement dans le path
  $scope.scrollTo = function(scrollLocation) {
    $location.hash(scrollLocation);
    $anchorScroll();
  }

})