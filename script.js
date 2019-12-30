
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHI_yqG77v1UiXmnHOe31llRz4PrOBvng",
    authDomain: "parkingsystem-abf19.firebaseapp.com",
    databaseURL: "https://parkingsystem-abf19.firebaseio.com",
    projectId: "parkingsystem-abf19",
    storageBucket: "parkingsystem-abf19.appspot.com",
    messagingSenderId: "582384537116",
    appId: "1:582384537116:web:6b916e5e61145eb2e359d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
let dbRef=firebase.database().ref("temp");
let dbRef1=firebase.database().ref("humidity");
dbRef1.on("value",function(abc)
{
	
	document.querySelector("#humid").innerHTML=abc.val();
	window.q=abc.val();
	console.log(window.q);
	window.m=window.q

})
dbRef.on("value",function(snapshot)
{
		document.querySelector("#temp").innerHTML=snapshot.val();
		window.p=snapshot.val();
		console.log(window.p);
		window.a=window.p
		  setTimeout(function(){ window.b=window.a}, 1000);
		  setTimeout(function(){ window.c=window.b}, 1000);
		  setTimeout(function(){ window.d=window.c}, 1000);
		  setTimeout(function(){ window.e=window.d}, 1000);
		  setTimeout(function(){ window.f=window.e}, 1000);
	
	
		console.log(window.m);
	
		  setTimeout(function(){ window.n=window.m}, 1000);
		  setTimeout(function(){ window.o=window.n}, 1000);
		  setTimeout(function(){ window.x=window.o}, 1000);
		  setTimeout(function(){ window.y=window.x}, 1000);
		  setTimeout(function(){ window.z=window.y}, 1000);	  
		  
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {
		  
			
        var data = google.visualization.arrayToDataTable([
          ['point','Temperature', 'Humidity'],
          ['d1',parseInt(window.a),parseInt(window.m)],
          ['d2',parseInt(window.b),parseInt(window.n)],
          ['d3', parseInt(window.c),parseInt(window.o)],
          ['d4', parseInt(window.d),parseInt(window.x)],
		  ['d5', parseInt(window.e) ,parseInt(window.y)]
        ]);

        var options = {
          //title: 'Real time Visulization of Temperature & Humidity Data',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }

})


	