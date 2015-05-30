$(document).ready(function() {
        $("form").submit(function(e) {
            e.preventDefault();
            var youtube = $("#youtubeURL").val();
            var youtube_id = "";
            
            $("#error").val("");
            if (!get_youtube_id(youtube)) {
                //Error
                $("#error").text("Youtube URL format is not correct");
                
                $("#form").removeClass("has-success").addClass("has-error");
                $(".glyphicon").removeClass("glyphicon-ok").addClass("glyphicon-remove");    
        
            } else {
                //Success
                $("#form").removeClass("has-error").addClass("has-success");
                $(".glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
            
                youtube_id = get_youtube_id(youtube)[1];
                 var download_url = "http://www.yt-mp3.com/watch?v=" + youtube_id;
                //change download url
                $("a#ytmp3").attr("href", download_url);
                //$("a#ytmp3").attr("href", "javascript:ytc('" + youtube_id + "');");
                $("a#ytmp3").text('點這裡下載 MP3');
            }
            

        });

        $("#clean").click(function() {
            $("#youtubeURL").val("");
            $("a#ytmp3").text("");
            $("#form").removeClass("has-error").removeClass("has-success");
            $(".glyphicon").removeClass("glyphicon-remove").removeClass("glyphicon-ok");
                
        });

    });

//Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-19743390-8', 'auto');
  ga('send', 'pageview');


    function get_youtube_id(url) {
        return url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/);
    }
    