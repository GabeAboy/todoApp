$('document').ready(function(){
  console.log('hello')
  $(document).on('click','.to-do-item',function(){
    $(this).toggleClass('complete')
  })

  // $('input').keypress(function(e){
  //     var value = $(this).val();
  //   if(e.which === 13){
  //
  //   }
  // })

  $('document').on('keypress','new-to-do',function(e){
    if(e.which == 13){
      console.log('enter key pressed')
      console.dir(e)
    }
    else {
      console.log('diff letter')
    }
  })
  $('.remove-to-do-button').on('click',function(){
      $('.complete').hide();
  })
  // $('body').click(function(e){
  //   console.dir($(e));
  // })

  $('.add-to-do-button').on('click',function(){
    var newToDo = $('.new-to-do').val();
    console.log(newToDo)
    $('.to-do-list').append('<li class="to-do-item">'+ newToDo +'</li>');
    $('.new-to-do').val('')
    $('.new-to-do').focus();
  })



})
