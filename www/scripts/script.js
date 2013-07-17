$(function(){
    checkWindowHeight();
    $(document).bind('orientationchange',function(event){
        checkWindowHeight();
    })
});

function checkWindowHeight(){
        $('[data-role=content]').each(function(){
        var containerHeight = parseInt($(this).css('height'));
        var windowHeight = parseInt(window.innerHeight);
        if(containerHeight+118 < windowHeight){
            var newHeight = windowHeight-118;
            $(this).css('min-height', newHeight+'px');
        }
    });
}