// portfolio modals
// $(() => {
//
 //  $('.modal_open_button').on('click', () => {
 //   let openThis = $(this).find('.modal_content');
 //   $(openThis).css("display", "block");
 //   $("body").css("overflow", "hidden");
 // });
//
//   $('.close_button').on('click', () => {
//     let closeThis = $(this).parent('div').fadeOut()
//     $('body').css('overflow', 'scroll')
//   })
//
// })

$(() => {

  $('.modal_open_button').on('click', () => {
   let openThis = $(this).find('.modal_content');
   $(openThis).css("display", "block");
   $("body").css("overflow", "hidden");
 });
  // $('.modal_open_button').on('click', function() {
  //  var openThis = $(this).find('.modal_content');
  //  $(openThis).css("display", "block");
  //  $("body").css("overflow", "hidden");
  // });

  $('.close_button').on('click', function() {
    var closeThis = $(this).parent('div').fadeOut();
    $('body').css('overflow', 'scroll')
  });

})
