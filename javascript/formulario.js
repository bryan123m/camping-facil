jQuery(document).ready(function($){
	$('#buscar').click(
		'submit',
		function(e){
			e.preventDefault();

			var lugar = $('.formulario #lugar').val();
			var cuantos = $('.formulario #cuantos').val();
			var tipo = $('.formulario #tipo').val();
			if(!lugar) {
				alert('Debe ingresar un lugar');
			}else if(!cuantos) {
				alert('Debe ingresar cuantos son');
			}else if (!tipo) {
				alert('Debe ingresar un tipo');
			}
			else {
				var user_info = {
						name:$('.signup #name').val(),
						departamento:$('.signup #departamentos').val(),
						ciudad:$('.signup #ciudades').val(),

					};
					console.log(user_info);
					database.ref('users_info').push(user_info);
        			location.href="resultado.html"
			}
		});
});