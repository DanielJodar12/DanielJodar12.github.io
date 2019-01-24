$(document).ready(function(){
    $('.derecha').hide();

    $(".mostrar").click(function(e){
        e.preventDefault();
        var nombres = $('input[id="nombre"]').val();
        var apellidos = $('input[id="apellidos"]').val();
        var fechas = $('input[id="nacimiento"]').val();
        var total = 2019 - fechas;
        $('.card-title').html(nombres + " " + apellidos);
        $('.card-text').html(total);
        $('.derecha').show();
    });
});