jQuery(document).ready(function($){
	$('#guardar').click(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.signup #email').val();
			var password = $('.signup #password').val();
			var conf_email = $('.signup #conf_email').val();
			var conf_password = $('.signup #conf_password').val();
			if(!email) {
				alert('Debe ingresar un correo');
			}else if(!password) {
				alert('Debe ingresar una contraseña');	
			}else if(email != conf_email){
				alert ('los emails no coinciden');
			}else if (password != conf_password){
				alert ('las contraseñas no coinciden');
			}
			else {
				firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(function() {
					alert('Bienvenido');
					//location.href

					var user_info = {
						name:$('.signup #name').val(),
						Departamento:$('.signup #departamento').val(),
						Ciudad:$('.signup #ciudad').val(),
						email:email,
						password:password,
					};
					firebase.database().ref('Users_info')
        			.push(user_info);
        			console.log(user_info);
				})
				.catch(function(error) {
					alert('Algo salio mal');


				});
			}
		}
		
		);
});
