$(document).ready(function() {
  setTimeout(function() {
    $('#splash').fadeOut(300, function() {
      window.location.href = 'index.html';
    });
  }, 2000);
});
