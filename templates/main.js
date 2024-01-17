document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-menu').classList.toggle('show');
});

function closeNav(){
	document.querySelector('.nav-menu').classList.remove('show');
}


function showForm(){
	document.getElementById("form").style.display = "block";
}

function hideForm(){
	document.getElementById('form').style.display = "none";
}


$(document).ready(function(){
	$('.tope').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
});


function conocenos(){
	swal({
		title: "¡Conócenos!",
		text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit odio rem adipisci ut a aliquam maiores optio, error mollitia, quia vel alias! Fugiat neque laboriosam possimus magni voluptatum veniam, doloribus tempora placeat sed nulla. "
	});
}