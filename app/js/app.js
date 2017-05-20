(function(){
  'use strict';
  angular.module('studentDriverList', [])
    .controller('studentListController', function(){
      this.students = students;
      this.showForm = false;
    })
    .directive('studentList', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/student-list.html'
      }
    })
    .directive('studentHeader', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/student-header.html'
      }
    })
    .directive('newStudentForm', function(){
      return {
        restrict: 'E',
        templateUrl: 'partials/new-student-form.html',
        controller: function(){
          this.addStudent = function(form){
            students.push(this.student);
            this.student = {};
            form.$setPristine();
          }
        },
        controllerAs: 'newStudentFormCtrl',
        scope: {
          students: '='
        }
      }
    });


  var students = [
    {
      firstName: 'Moshe',
      lastName: 'Cohen',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '1994-01-14',
      automat: true,
      theory: true,
      cost: 130,
      lessonsStart: 5
    },{
      firstName: 'Eyal',
      lastName: 'Grinberg',
      id: 5468456845,
      phone: '0545663467',
      birthDate: '2001-05-03',
      automat: false,
      theory: true,
      cost: 120,
      lessonsStart: 0
    },{
      firstName: 'Fridrich',
      lastName: 'Kuperman',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '1997-11-05',
      automat: true,
      theory: false,
      cost: 140,
      lessonsStart: 0
    },{
      firstName: 'Nataliya',
      lastName: 'Pudov',
      id: 3546783476,
      phone: '0545663467',
      birthDate: '2000-12-05',
      automat: false,
      theory: true,
      cost: 130,
      lessonsStart: 10
    }
  ];
})();
