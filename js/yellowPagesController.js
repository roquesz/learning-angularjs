app.controller('yellowPagesController', ['$scope', '$filter', '$http', function($scope, $filter, $http, PagerService){
	$scope.app = 'Lista Telefonica';
	$scope.direction = true;
	$scope.contacts = [];
	// $scope.contacts = [
	// 	{id: 1, name: $filter('uppercase')('Roque'), phone: '9999-9999',date: new Date(), operator:{"name":"Oi","code":14,"category":"Fixed"}},
	// 	{id: 2, name: 'Jonas', phone: '8888-8888', date: new Date(), operator:{name: 'Vivo', code: 15, category: 'Mobile'}},
	// 	{id: 3, name: 'Carlos', phone: '6666-6666', date: new Date(), operator:{"name":"Oi","code":14,"category":"Fixed"}},
	// 	{id: 4, name: 'André', phone: '7777-7777', date: new Date(), operator:{name: 'Tim', code: 41, category: 'Mobile'}}
	// ];

	var loadContacts = function()
	{
		$http.get('http://localhost/learning-angularjs/api/contacts.php').success(
			function(data, status)
			{
				$scope.contacts = data;
			}
		);
	};

	var loadOperators = function()
	{
		$http.get('http://localhost/learning-angularjs/api/operators.php')
		.success(
			function(data, status)
			{
				$scope.operators = data;
			}
		)
	}
	// $scope.operators = [
	// 	{name: 'Oi', code: 14, category: 'Fixed', price: 2.1},
	// 	{name: 'Vivo', code: 15, category: 'Mobile', price: 1.19},
	// 	{name: 'Tim', code: 41, category: 'Mobile', price: 5.99}
	// ];

	$scope.addContact = function(contact)
	{
		$scope.contacts.push(contact);
		delete $scope.contact;
		// $scope.contactForm.$setPristine(); // nao funcionou =(
	};

	$scope.removeContact = function(contacts)
	{
		$scope.contacts = contacts.filter(function(contact)
		{
			if (!contact.selected){
				return contact;
			}
		});
	};

	$scope.isContactSelected = function(contacts)
	{
		return contacts.some(function(contact)
		{
			return contact.selected;
		});
	}

	$scope.orderList = function(column)
	{
		$scope.orderColumn = column;
		$scope.direction = !$scope.direction;
	};
	loadContacts();
	loadOperators();
}]);