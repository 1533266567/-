(function() {
	var route = [];
	var aboutRoute = ['introduc','group','dynamic','advantage','contact'];
	var serverRoute = ['details','account','deposit','capital','dispute','clause','privacy','cookies'];
	var collegeRoute = ['teaching','skill','data','discount'];
	var infoRoute = ['hot','expert','special','calendar'];

	var path = window.location.pathname.split('/');
	var pathName = path[path.length-1].split('.')[0];

	switch(pathName) {
		case 'aboutus':
			route = aboutRoute;
		break;
		case 'product':
			route = serverRoute;
		break;
		case 'data':
			route = collegeRoute;
		break;
		case 'information':
			route = infoRoute;
		break;
		default:
			return;
			break;
	};

	var type = window.location.search.split('=')[1];
	var index = 0

	for( var i = 0;i < route.length; i++ ) {
		if( route[i] === type ) {
			index = i;
		}
	}

	$('.colum-lists li').eq(index).addClass('active').siblings('li').removeClass('active');
	$('.content').eq(index).removeClass('none').siblings('.content').addClass('none');

})()