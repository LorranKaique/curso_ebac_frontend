$(document).ready(function() {

    $('header button').click(function() { //deu bom
        $('form').slideDown();
    })
    
    $('#botao-cancelar').click(function(){ //deu bom
        $('form').slideUp();
    })
    
    $('#add').on('submit', function(e) { 
        e.preventDefault();
        var taskText = $('#newText').val();
        if (taskText !== "") {
            $('#novaTarefa').append('<li> - ' + taskText + '</li>');
            $('#newText').val('');
        }else{
            alert('Verifique a tarefa e tente novamente!')
        }
    });

    $('#novaTarefa').on('click', 'li', function() {//quando clicado vai executar a funcao abaixo
        $(this).toggleClass('finalizado');
    });
});