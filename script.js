const form = document.getElementById('form-validation')

form.addEventListener('submit',function(e){
e.preventDefault()

    const valorA = document.getElementById('value-a')
    const valorB = document.getElementById('value-b')

    if(valorB.value > valorA.value){
        alert('Valor de B é maior. Válido!')
    }else{
        alert('Valor de B é menor. Inválido!')
    }

})