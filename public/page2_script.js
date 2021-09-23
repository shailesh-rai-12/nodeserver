var app=angular.module("moduleApp",[])
        .controller("firstController",($scope,$http)=>{
            $http.get('/customers')
                .then((response)=>{
                    $scope.customers=response.data;
                })
                .catch((err)=>{
                    console.log(err);
                });
        });
        