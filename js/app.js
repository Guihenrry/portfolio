// Scrol suave 

const menuitems = document.querySelectorAll('.menu a[href^="#"]');
const btnsaibamais = document.querySelector('.intro-text a[href^="#"]');

menuitems.forEach(item => {
    item.addEventListener('click', scrollToIdOnclick);
})

btnsaibamais.addEventListener('click', scrollToIdOnclick);

function scrollToIdOnclick(event) {
    event.preventDefault(); 
    const to = getScrollTopByHref(event.target); 
    scrollToPosition(to);
   
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');   
    return document.querySelector(id).offsetTop; 
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

// Formulario
$('.formphp').on('submit', function() {
	var emailContato = "contato@guilhermehenrry.com.br"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});

