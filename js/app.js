//Place captions outside the picture

$(".fancybox").fancybox({
    helpers : {
        title: {
            type: 'outside'
        }
    }
});


//Supposed to use the alt image text for the caption

 $(".fancybox").fancybox({
     beforeShow : function() {
         var alt = this.element.find('img').attr('alt');
        
         this.inner.find('img').attr('alt', alt);
        
         this.title = alt;
     }
 });

//Fade in and out

(function ($, F) {
    F.transitions.resizeIn = function() {
        var previous = F.previous,
            current  = F.current,
            startPos = previous.wrap.stop(true).position(),
            endPos   = $.extend({opacity : 1}, current.pos);

        startPos.width  = previous.wrap.width();
        startPos.height = previous.wrap.height();

        previous.wrap.stop(true).trigger('onReset').remove();

        delete endPos.position;

        current.inner.hide();

        current.wrap.css(startPos).animate(endPos, {
            duration : current.nextSpeed,
            easing   : current.nextEasing,
            step     : F.transitions.step,
            complete : function() {
                F._afterZoomIn();

                current.inner.fadeIn("fast");
            }
        });
    };

}(jQuery, jQuery.fancybox));

$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        nextMethod : 'resizeIn',
        nextSpeed  : 250,
        
        prevMethod : false,
        
        helpers : {
            title : {
                type : 'inside'
            }
        }
    });


//Move buttons outside the images

$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        nextEffect  : 'none',
        prevEffect  : 'none',
        padding     : 0,
        margin      : [20, 60, 20, 60] // Increase left/right margin
    });


    
 //Search Function   

   $(document).ready(function () {

    $("#searchfield").keyup(function(){

        // Retrieve the input field text 
        var filter = $(this).val();

        // Loop through the captions 
        $(".searchhere").each(function(){

            // If the div item does not contain the text phrase fade it out
            
            if ($(this).attr('alt').search(new RegExp(filter, "i")) < 0) {
            $(this).fadeOut();

            // Show the div item if the phrase matches 
            } else {
                $(this).show();
            }
        });
     });
 });