angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		// $timeout(function() {
		// 	$scope.closeLogin();
		// }, 1000);
	};
})

.controller('MainCtrl', function($scope) {
    var started = false
    $scope.buttonText = "Start"
    var accelData = []

	$scope.toggleAccel = function() {
        started = !started

        if(started) {
            $scope.buttonText = "Stop"

            this.watchId = navigator.accelerometer.watchAcceleration(function(acceleration) {
    			// log out the accel data points
    			console.log("X:" + acceleration.x + "\tY:" + acceleration.y + "\tZ:" + acceleration.z)

                accelData.push({x:acceleration.x, y:acceleration.y, z:acceleration.z, t:Date.now()%1000000})

            }, function(){
                console.log('error')
            }, {
                frequency: 40
            })
        } else {
            $scope.buttonText = "Start"

            navigator.accelerometer.clearWatch(this.watchId);
        }

	}
})
