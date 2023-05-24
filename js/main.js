$(document).ready(function() {       
    $("button").click(function(e){          
        $("#Table").removeAttr();          
        $("#Table").attr('src', $(this).attr('data-img'));      
        $("button").removeClass("selected");
        $(this).addClass("selected");
    });
});
