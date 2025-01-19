$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    });
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                requerido: true,
            },
            email: {
                requerido: true,
                email: true
            },
            telefone: {
                requerido: true,
            },
            endereco: {
                requerido: true,
            },
            cep: {
                requerido: true,
            },
            cpf: {
                requerido: true,
            },
        },
        // messages: {
        //     nome:'Por favor, insira seu nome.'
        //     email::'Por favor, insira seu email.'
        //     telefone:'Por favor, insira seu telefone.'
        //     cpf:'Por favor, insira seu CPF.'
        //     endereco:'Por favor, insira seu endereço.'
        //     cep:'Por favor, insira seu CEP.'
        // }

        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            console.log(form)
        },

        invalidHandler: function (evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
    
})