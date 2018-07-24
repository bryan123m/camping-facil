jQuery(document).ready(function($){
	$ ('#email').hide();
	$ ('#password').hide();

	$('#formulario').click(function() {
		$ ('#email').show();
		$ ('#password').show();
		$ ('#formulario').hide();

	})
})