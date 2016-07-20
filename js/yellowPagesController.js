app.controller('yellowPagesController', ['$scope', '$filter', '$http', function($scope, $filter, $http){
	$scope.app = 'Lista Telefonica';
	$scope.direction = true;
	$scope.contacts = [
		{name: $filter('uppercase')('Roque'), phone: '9999-9999',date: new Date(), operator:{"name":"Oi","code":14,"category":"Fixed"}},
		{name: 'Jonas', phone: '8888-8888',operator:{name: 'Vivo', code: 15, category: 'Mobile'}},
		{name: 'Carlos', phone: '6666-6666',operator:{"name":"Oi","code":14,"category":"Fixed"}},
		{name: 'André', phone: '7777-7777',operator:{name: 'Tim', code: 41, category: 'Mobile'}}
	];

	var loadContacts = function(){

	};

	$scope.operators = [
		{name: 'Oi', code: 14, category: 'Fixed', price: 2},
		{name: 'Vivo', code: 15, category: 'Mobile', price: 1},
		{name: 'Tim', code: 41, category: 'Mobile', price: 5}
	];

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
}]);