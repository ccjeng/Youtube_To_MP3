$(document).ready(function() {
        $("form").submit(function(e) {
            e.preventDefault();
            var youtube = $("#youtubeURL").val();
            var youtube_id = "";
            
            $("#error").val("");
            if (!get_youtube_id(youtube)) {
                //Error
                $("#form").removeClass("has-success").addClass("has-error");
                $(".glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove");    
        
            } else {
                //Success
                $("#form").removeClass("has-error").addClass("has-success");
                $(".glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            
                youtube_id = get_youtube_id(youtube)[1];
                var download_url = "http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=" + youtube_id;
                 
                //change download url
                $("a#ytmp3").attr("href", download_url);
                $("#ytmp3")[0].click();
            }
            

        });

        $("#clean").click(function() {
            $("#youtubeURL").val("");
            $("a#ytmp3").text("");
            $("#form").removeClass("has-error").removeClass("has-success");
            $(".glyphicon").removeClass("glyphicon-remove").removeClass("glyphicon-ok");
        });

});

function get_youtube_id(url) {
        return url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/);
}
    