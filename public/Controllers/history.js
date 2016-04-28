'use strict';

var googleUrl = "https://www.google.com/maps/embed/v1/place?key="; //TODO: add your own Google Maps API key at the end of this url

mapperApp.controller("history",
	function history($scope, historyData, $routeParams, $sce) {
        $scope.account = $routeParams.acct;
		$scope.records = historyData.get($routeParams.acct, $routeParams.id);
        
        $scope.map = function(_address) {
            var parsedAddress = encodeURIComponent(_address)
            $scope.mapAddress = $sce.trustAsResourceUrl(googleUrl + parsedAddress);
            //alert("Searching Google Maps for " + _address);
            $("#mapModal").show();
        };
        
        $scope.closeMap = function() {
            $("#mapModal").hide();
        }
	}
);