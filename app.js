// PROJECT MODALS

$(() => {
  // Open Modal
  $('.modal_open_button').on('click', function() {
    let openThis = $(this).find('.modal_content');
    $(openThis).css("display", "block");
    $("body").css("overflow", "hidden");
});
  // Close Modal
  $('.close_button').on('click', function() {
    let closeThis = $(this).parent('div').fadeOut();
    $('body').css('overflow', 'scroll')
  });

})
