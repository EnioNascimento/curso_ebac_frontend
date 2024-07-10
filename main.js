$(document).ready(function(){
  $('form').on('submit', function(e){
    e.preventDefault(); 

  
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem = $('<li>').text(novaTarefa);
    $('#minha-lista-de-tarefas').append(novoItem);
  

    novoItem.on('click', function(){
      $(this).toggleClass('riscado'); 
    });
  
    $('#nome-tarefa').val('')

  });
});

