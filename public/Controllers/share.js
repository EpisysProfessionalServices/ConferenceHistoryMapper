'use strict';

mapperApp.controller("Share",
	function Share($scope, shareData, $routeParams) {
        $scope.account = $routeParams.acct;
		$scope.records = shareData.getRecords($routeParams.acct);
	}
);