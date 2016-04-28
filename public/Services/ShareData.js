mapperApp.factory('shareData', function($resource) {
	var resource = $resource('api/listShares/:acct', {acct:'@acct'});
	return {
		getRecords: function(account) {
			return resource.query({acct:account});
		}
	};
})