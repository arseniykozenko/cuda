$('.skill-progress').circleProgress({
    size: 160,
    thickness: 13
}).on('circle-animation-progress', function(event, progress) {
    var percentValue = $(this).find('span').attr('data-value');
    $(this).find('span').html(Math.round(percentValue * progress) + '<i>%</i>');
});