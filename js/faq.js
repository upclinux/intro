var panel_status = true;

// for hidden-xs
if ($('#faq-list').css("display").indexOf("none") > -1) {
  panel_status = false;
  $('#faq-list').hide();
  $('#faq-panel-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
}
$('#faq-list').removeClass('hidden-xs');

function update_panel() {
  if (panel_status) {
    $('#faq-panel-arrow').removeClass('fa-angle-down').addClass('fa-angle-up');
    $('#faq-list').slideDown(200);
  } else {
    $('#faq-panel-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
    $('#faq-list').slideUp(200);
  }
}

$('#faq-panel-heading').click(function() {
  panel_status = !panel_status;
  update_panel();
});
