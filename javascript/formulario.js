jQuery(document).ready(function($){
	$('#buscar').click(
		'submit',
		function(e){
			e.preventDefault();

			var lugar = $('.signup #lugar').val();
			var cuantos = $('.signup #cuantos').val();
			var tipo = $('.signup #tipo').val();
			if(!lugar) {
				alert('Debe ingresar un lugar');
			}else if(!cuantos) {
				alert('Debe ingresar cuantos son');
			}else if (!tipo) {
				alert('Debe ingresar un tipo')
			}
			else {
				var user_info = {
						name:$('.signup #name').val(),
						departamento:$('.signup #departamentos').val(),
						ciudad:$('.signup #ciudades').val(),
						email:email,
						password:password,
					};
					firebase.database().ref('Users_info/')
        			.push(user_info);
        			location.href="resultado.html"
			}
		});
});