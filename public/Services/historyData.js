mapperApp.factory('historyData', function($resource) {
	var resource = $resource('api/history/:acct/:id', {acct:'@acct', id: '@id'});
	return {
		get: function(account, id) {
			return resource.query({acct:account, id:id});;
		}
	};
})