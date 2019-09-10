$('#count-sum').click(function(){
    let sum = 0;
    $('.salary').each(function(index,element){
        sum += parseInt($(this).html());
        console.log(index + ' - ' + $(this).html()); 
    });
    $('#sum').html(sum);
});