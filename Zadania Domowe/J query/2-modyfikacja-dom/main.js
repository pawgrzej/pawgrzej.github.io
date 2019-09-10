$('#click-down').click(function() {
    $('p').last().insertBefore($('p').first());
});
$('#click-up').click(function() {
    $('p').first().insertAfter($('p').last());
});