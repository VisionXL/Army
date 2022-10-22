jQuery(function($){
    $(document).ready(function(){
        if($("#globalnavcontainer").length === 0) {
            // add container, if does not exist
            $("body").prepend(' <div id="globalnavcontainer"></div>');
        }
        //adjust page for nav
        $(".wrapper").addClass('globalnavisloaded');
        // load navigation html
        $('#globalnavcontainer').load('/e2/html/rv7/globalnav/navbar.html');
    });
});