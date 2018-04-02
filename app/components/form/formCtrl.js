var app1 = angular.module('myApp.formController',[]);

app1.controller("formCtrl",['$scope','$log','$http','$location','formUserData',function($scope,$log,$http,$location,formUserData){
    $scope.user ={
        firstName: "",
        lastName :"",
        gender:"Male",
        mobile:"",
        email:"",
        country:"",
        hobby:{}
    };
    $scope.countries;
    $scope.mobPattern=/\+91(\s*[\ -]\s*)?(\d{10}$)/;
    $scope.emailPattern=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.passwordPattern =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\@|\!|\^|\&|\#|\*|\(|\)|\$|\%]).{8}/;
    $http.get('js/data2.json').then(function(response){
        $scope.countries = response.data.records;
    },function(error){ $log.log(error);});
    $scope.submitter = function(){
        if($scope.sampleForm.$valid){
             formUserData.setUserData($scope.user);
            $location.path('/res'); 
         
        }
    }
}]);