//Showing welcoming Message using jquery

    //$('#user-email').on('keypress',function() {  It delay the first alphabet
	//$('#user-email').on('input',function() {

      //  var email = $('#user-email').val()
        //var message = 'Welcome Back, ' + email;
        //$('.welcome-message').text(message);
    //});

	//var foodieApp = angular.module('foodieApp',[]);
	//foodieApp.controller('mainController',function($scope) {
    //})

	// creating list of restaurants



	var foodieApp = angular.module('foodieApp',['ngRoute']);
	foodieApp.config(function ($routeProvider) {
		$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
	})


	foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})


foodieApp.config(function ($routeProvider) {
$routeProvider
		.when('/',{
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		.when('/home',{
			templateUrl: 'pages/main.html',
			controller: 'mainController'
		})
		.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	})

	foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
		$scope.restaurantId = $routeParams.id;
		var diabetes=['sweet', 'chocolate', 'brownie', 'rice', 'french fries', 'pasta', 'cookies', 'chicken', 'nachos', 'pie', 'yogurt','smoothie',
		               'hamburger','cake','pizza','muffins','eggs','nuts','beer','soda','croissants','butter','lard']


		var restaurants =  [{
		name: 'HakuNa Matata Cafe',
		address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location: 'Connaught Place',
		category: 'Casual Dining, Bar',
		vote: '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		id:1,
		hours: '12 Noon to 1 AM (Mon-Sun)',
		bestDish: {
			name: 'Corn Pizza',
			image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
			},
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'

		},
		{
		name: 'Chick Blast',
		address: 'Bojpur Market',
		location: 'Near Multiplex Place',
		category: 'Casual Dining ',
		vote: '3.7',
		cuisines: 'Chicken',
		cost: '800',
		id:2,
		hours: '11 AM to 7 PM (Mon-Sun)',
		bestDish: {
			name: 'Rotisserie-Style Chicken',
			image:  'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
			},
		image: 'https://connectfranchise.com/storage/app/uploads/public/574/029/d3a/574029d3ab20f172887793.jpeg'

		},

		{
		name: ' Cafe Madana',
		address: 'Near Dhanotu Chowk Nh-21',
		location: 'Dhanotu',
		category: 'Family Restaurants',
		vote: '4.7',
		cuisines: 'Indian & Chineese',
		cost: '800',
		id:3,
		hours: '11 AM Noon to 1 PM (Mon-Sun)',
		bestDish: {
			name: 'SHAHI-Paneer',
			image: 'https://i.ytimg.com/vi/lzS-aeiCvF8/maxresdefault.jpg'
			},
		image: 'https://img1.holidayiq.com/customcdn/720x512/images/property/resortimg/2685_pictures181445951537_org.jpg'

		},

		{
		name: 'Aadityas ',
		address: 'Bojpur Market',
		location: 'SunderNagar Mall Road',
		category: 'Bakery',
		vote: '4.2',
		cuisines: 'Baked Items',
		cost: '600',
		id:4,
		hours: '1 AM to 10 PM (Mon-Sun)',
		bestDish: {
			name: 'Cheese Burger',
			image: 'https://lh3.googleusercontent.com/Ele8gtDOd1tlQ4TebRJkf6XgpciDD2e57Jf5E3UwAzvfPs0kLhOXJLewZYsu1CFn9CPly0TLvrZUCqJnXMn0=s400'
			},
		image: 'https://s3-ap-southeast-1.amazonaws.com/magicpin-selfie/productimages/2815_cover_pic.jpg'

		},

		{
		name: 'Polo Regency',
		address: 'Hamsafar Road Sundernagar',
		location: 'Lake',
		category: 'Casual Dining, Bar',
		vote: '4.0',
		cuisines: 'Indian , Italian',
		cost: '1900',
		id:5,
		hours: '10AM to 10 PM (Mon-Sun)',
		bestDish: {
			name: 'white & Red Sauce Pasta',
			image: ''
			},
		image: 'https://media-cdn.tripadvisor.com/media/photo-o/09/6e/84/c4/hotel-polo-regency.jpg'

		},

		{
		name: 'Shangrila',
		address: 'Naresh Chowk SunderNagar',
		location: 'Naresh Chowk',
		category: 'Casual Dining, Bar',
		vote: '3.2',
		cuisines: 'Chineese',
		cost: '1200',
		id:6,
		hours: '1 PM to 1 AM (Mon-Sun)',
		bestDish: {
			name: 'white & Red Sauce Pasta',
			image: 'https://www.kannammacooks.com/wp-content/uploads/white-sauce-pasta-with-cheese.jpg'
			},
		image: 'https://content.jdmagicbox.com/comp/mandi/w4/9999p1905.1905.150518151402.e9w4/catalogue/besillio-grand-hotel-sunder-nagar-1-mandi-0.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*'

		},

		{
		name: 'Tibtean',
		address: 'Chatrokri SunderNagar',
		location: 'Chatrokri',
		category: 'Casual Dining, Bar',
		vote: '4.9',
		cuisines: 'Chineese',
		cost: '200',
		id:7,
		hours: '12 PM to 5 PM (Mon-Sun)',
		bestDish: {
			name: 'Momos',
			image: 'https://www.cookforindia.com/wp-content/uploads/2016/02/Momos-snap.jpg'
			},
		image: 'http://www.ndtv.com/cooks/images/Lamb.Momos.with.Sweet.Chilli.Sauce-620.jpg'

		},

		{
		name: 'Bake Shop',
		address: 'Bojpur',
		location: 'SunderNagar Mall Road',
		category: 'Bakery',
		vote: '4.2',
		cuisines: 'Baked & Intalian',
		cost: '600',
		id:8,
		hours: '10 AM to 10 PM (Mon-Sun)',
		bestDish: {
			name: 'Chocolate Pastry',
			image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1043451_11.jpg?itok=Z_w2WOYB'
			},
		image: 'https://content2.jdmagicbox.com/comp/upload_test/delhi/x2/011p1214226240x1b6x2/catalogue/nathus-sweets-sundar-nagar-delhi-c3005.jpg'

		}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key fde60dbc64804af293a28f05ace4c9c5',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function success(response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredients = [];
			$scope.ingredient_list=[];
			console.log(response);

  			for (var i =0;i < ingredients.length;i++) {
			$scope.ingredients.push(ingredients[i].name);
			}
			for(var j=0;j< $scope.ingredients.length;j++)
			{
				if(ingredients[j].value>0.7)
				{
					$scope.ingredient_list.push(ingredients[j].name);
				}
			}
			for(var k=0;k<$scope.ingredient_list.length;k++)
			{
			var x=diabetes.indexOf($scope.ingredient_list[k]);
			console.log(x);

					if(x>=0)
					{
						$scope.msg = "THIS FOOD IS NOT FOR DIABETIC PATIENTS";
					}
					else{
												$scope.msg = "THIS FOOD IS GOOD FOR DIABETIC PATIENT";
					}
			}

        }, function error(xhr) {
        	console.log(xhr);
        });


}
	})


	foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'HakuNa Matata Cafe',
	address: 'Bojpur Market',
	location: 'Sundernagar mall road',
	category: 'Casual Dining',
	vote: '4.1',
	cuisines: 'Modern Indian',
	cost: '1200',
	id:1,
	hours: '10 Am to 9 PM (Mon-Sun)',
	image: 'https://s-media-cache-ak0.pinimg.com/originals/72/77/80/72778069692f596e1fb915585d7cbd53.jpg'

	},
	{
	name: 'Chick Blast',
	address: 'Bojpur Market',
	location: 'Near Multiplex Place',
	category: 'Casual Dining ',
	vote: '3.7',
	cuisines: 'Chicken',
	cost: '800',
	id:2,
	hours: '11 AM to 7 PM (Mon-Sun)',
	image: 'https://connectfranchise.com/storage/app/uploads/public/574/029/d3a/574029d3ab20f172887793.jpeg'

	},

	{
	name: ' Cafe Madana',
	address: 'Near Dhanotu Chowk Nh-21',
	location: 'Dhanotu',
	category: 'Family Restaurants',
	vote: '4.7',
	cuisines: 'Indian & Chineese',
	cost: '800',
	id:3,
	hours: '11 AM Noon to 1 PM (Mon-Sun)',
	image: 'https://img1.holidayiq.com/customcdn/720x512/images/property/resortimg/2685_pictures181445951537_org.jpg'

	},

	{
	name: 'Aadityas ',
	address: 'Bojpur Market',
	location: 'SunderNagar Mall Road',
	category: 'Bakery',
	vote: '4.2',
	cuisines: 'Baked Items',
	cost: '600',
	id:4,
	hours: '1 AM to 10 PM (Mon-Sun)',
	image: 'https://s3-ap-southeast-1.amazonaws.com/magicpin-selfie/productimages/2815_cover_pic.jpg'

	},

	{
	name: 'Polo Regency',
	address: 'Hamsafar Road Sundernagar',
	location: 'Lake',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Indian , Italian',
	cost: '1900',
	id:5,
	hours: '10AM to 10 PM (Mon-Sun)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-o/09/6e/84/c4/hotel-polo-regency.jpg'

	},

	{
	name: 'Shangrila',
	address: 'Naresh Chowk SunderNagar',
	location: 'Naresh Chowk',
	category: 'Casual Dining, Bar',
	vote: '3.2',
	cuisines: 'Chineese',
	cost: '1200',
	id:6,
	hours: '1 PM to 1 AM (Mon-Sun)',
	image: 'https://content.jdmagicbox.com/comp/mandi/w4/9999p1905.1905.150518151402.e9w4/catalogue/besillio-grand-hotel-sunder-nagar-1-mandi-0.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*'

	},

	{
	name: 'Tibtean',
	address: 'Chatrokri SunderNagar',
	location: 'Chatrokri',
	category: 'Casual Dining, Bar',
	vote: '4.9',
	cuisines: 'Chineese',
	cost: '200',
	id:7,
	hours: '12 PM to 5 PM (Mon-Sun)',
	image: 'http://www.ndtv.com/cooks/images/Lamb.Momos.with.Sweet.Chilli.Sauce-620.jpg'

	},

	{
	name: 'Bake Shop',
	address: 'Bojpur',
	location: 'SunderNagar Mall Road',
	category: 'Bakery',
	vote: '4.2',
	cuisines: 'Baked & Intalian',
	cost: '600',
	id:8,
	hours: '10 AM to 10 PM (Mon-Sun)',
	image: 'https://content2.jdmagicbox.com/comp/upload_test/delhi/x2/011p1214226240x1b6x2/catalogue/nathus-sweets-sundar-nagar-delhi-c3005.jpg'

	}]
})
