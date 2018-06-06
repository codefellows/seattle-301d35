//make a new <li> and append it to all <ul>s
// var $newLi = $('.li-template').clone();
// $newLi.text('this is different text');
// $('ul').append($newLi)

//remove an element from the DOM
// $('button').remove()

// run a command as soon as the DOM loads
// $(document).ready(function() {
//   alert('the DOM is ready now!');
// })

$('#jquery-stuff').hide();

$('#my-button').on('click', function() {
  console.log('Button done got clicked');
  $('#jquery-stuff').fadeIn(8000);
})