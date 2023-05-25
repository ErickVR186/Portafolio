window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("abajo", window.scrollY>0);
})

$(document).ready(function(){
	$(window).on('scroll', function(){
		var link = $('.nav a.nav__ul__li__a');
		var top = $(window).scrollTop();

		$('.principal').each(function(){
			var id = $(this).attr('id');
			var height = $(this).height();
			var offset = $(this).offset().top - 150;
			if (top >= offset && top < offset + height) {
				link.removeClass('active');
				$('.nav').find('[datascroll="'+id+'"]').addClass('active');
			}
		})
	})
})

window.addEventListener("load", function(){
	new Glider(document.querySelector('.carrucel__div__lista'), {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: '.carrucel__indicadores',
	  arrows: {
	    prev: '.carrucel__div__anterior',
	    next: '.carrucel__div__siguiente'
	  },
	  responsive: [
	    {
	      // screens greater than >= 800px
	      breakpoint: 400,
	      settings: {
	        // Set to `auto` and provide item width to adjust to viewport
	        slidesToShow: '2',
	        slidesToScroll: '2',
	        itemWidth: 150,
	        duration: 0.25
	      }
	    },{
	      // screens greater than >= 1024px
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 2,
	        duration: 0.25
	      }
	    },{
	      // screens greater than >= 1024px
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 2,
	        duration: 0.25
	        
	      }
	    }
	  ]
	});
});


document.addEventListener('DOMContentLoaded', function() {
	var enlace = document.getElementsByClassName('videoLink');
	for (var i = 0; i < enlace.length; i++) {
		enlace[i].addEventListener('click', function(event) {
			event.preventDefault();  
			document.querySelector('.popup-video').style.display = 'block';
			document.querySelector('.popup-video iframe').src = this.getAttribute("data-valor");
		});
	}
	
	var close = document.getElementById('close');
	close.addEventListener('click', function(event) {
		event.preventDefault(); 
		document.querySelector('.popup-video').style.display = 'none';
	});
});

