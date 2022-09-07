$(window).on("resize load", function() {
    $(".site-header iframe").each(function() {
        var self = $(this);
        var container = self.parent();

        self.css({
            width: container.width() + "px",
            height: container.width() * (9 / 16) + "px",
            position: "absolute",
            marginTop: -container.width() * (9 / 32) + "px",
            top: "50%"
        });
    });
});

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player("yt-player", {
        autoplay: 1,
        videoId: "yZM5VAKi5vU",
        playerVars: {
            autoplay: 1,
            rel: 0,
            showinfo: 0,
            showsearch: 0,
            controls: 0,
            loop: 1,
            enablejsapi: 1,
            playlist: "yZM5VAKi5vU"
        },
        events: {
            onReady: onPlayerReady
            //"onStateChange": onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo(); 
}

function onPlayerStateChange(event) {
    var id = "yZM5VAKi5vU";

    if (event.data === YT.PlayerState.ENDED) {
        player.loadVideoById(id);
    }
}