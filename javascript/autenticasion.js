jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.login .email').val();
			var password = $('.login .password').val();

			if(!email) {
				alert('Debe ingresar un correo');
			}else if(!password) {
				alert('Debe ingresar una contraseña');
			}else {

				firebase
				.auth().signInWithEmailAndPassword(email, password)
				.then(function() {
					alert('Bienvenido');
					
				})
				.catch(function(error) {
					alert('No eres Bienvenido');




				});
			}
		}
		
		);
	$('.registro').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.registro .email').val();
			var password = $('.registro .password').val();

			if(!email) {
				alert('Debe ingresar un correo');
			}else if(!password) {
				alert('Debe ingresar una contraseña');
			}else {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(function() {
					alert('Bienvenido');
					console.log(email,password);
				})
				.catch(function(error) {
					alert('No eres Bienvenido');
				});
			};
		}
		
		);
});