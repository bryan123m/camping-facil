jQuery(document).ready(function($){
	$ ('#email').hide();
	$ ('#password').hide();
	$ ('#boton').hide();

	$('#formulario').click(function() {
		$ ('#email').show();
		$ ('#password').show();
		$ ('#boton').show();
		$ ('#formulario').hide();

	$('#boton').click(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.formulario #email').val();
			var password = $('.formulario #password').val();

			if (!email) {
				alert('Debe ingresar un correo');
			}else if (!password) {
				alert('Debe ingresar una contraseña');
			}else {
				
				firebase
				.auth().signInWithEmailAndPassword(email, password)
				.then(function() {
					alert('Bienvenido');
					location.href = "formulario.html";
					
				})
				.catch(function(error) {
					alert('No eres Bienvenido');
				});
			}
		}
		
		);
	});
});
