app.controller('yellowPagesController', ['$scope', function($scope){
	$scope.app = 'Lista Telefonica';
	$scope.contacts = [
		{name: 'Roque', phone: '9999-9999'},
		{name: 'Jonas', phone: '8888-8888'},
		{name: 'Carlos', phone: '6666-6666'},
		{name: 'André', phone: '7777-7777'}
	];

	$scope.operators = [
		{name: 'Oi', code: 14, category: 'Fixed'},
		{name: 'Vivo', code: 15, category: 'Mobile'},
		{name: 'Tim', code: 41, category: 'Mobile'}
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
}]);