// File to contain jQuery for front-end javascript
//---------------------------------------------------------


// Modal Control

$(".close-modal").on("click", function() {
  $(this).closest('.modal').removeClass('active');
});
  
$("#showModal").on("click", function() {
  $('#modal-1').addClass('active');
});