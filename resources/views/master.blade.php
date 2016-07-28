<!DOCTYPE html>
<html ng-app="app">
    <head>
        <title>Master Template</title>
        <link rel="stylesheet" type="text/css" href="{{asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}">
        <script>var url = "{{url('/')}}/";</script>
    </head>
    <body>
        <div class="container">
            <div ng-view></div>
        </div>
        
        <script src="{{asset('bower_components/angular/angular.min.js')}}"></script>
        <script src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
        <script src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
        <script src="js/app.js"></script>
        <script src="js/controllers/userCtrl.js"></script>
    </body>
</html>