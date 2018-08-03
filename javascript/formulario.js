jQuery(document).ready(function($){
	$('#buscar').click(
		'submit',
		function(e){
			e.preventDefault();

			var lugar = $('.formulario #lugar').val();
			var tipo = $('.formulario #tipo').val();
			if (tipo == 'Selecciona el tipo') {
				alert('Debe ingresar un tipo')
			}else if (lugar == 'Selecciona el lugar') {
				alert('Debe ingresar un lugar');
			}
			else {
				var user_info = {
						lugar:$('.formulario #lugar').val(),
						tipo:$('.formulario #tipo').val(),

					};
					
					database.ref('lugar_info').push(user_info);
        			
			}

			var lugar = $('.formulario #lugar').val();
			var santa = $('.formulario #santa').val();
			var marinilla = $('.formulario #marinilla').val();
			var arvi = $('.formulario #arvi').val();
			var jardin = $('.formulario #jardin').val();
			var parque = $('.formulario #parque').val();

			if (lugar == santa) {
				location.href="resultado.html"

			}else if (lugar == marinilla) {
				location.href="resultado2.html"

			}else if (lugar == arvi) {
				location.href="resultado3.html"

			}else if (lugar == jardin) {
				location.href="resultado4.html"

			}else if (lugar == parque) {
				location.href="resultado5.html"
			}
	});
});