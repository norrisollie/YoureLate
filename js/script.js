// scripts
// when document has loaded
$(document).ready(function() {

    // function to run when the videos have loaded
    $("video").on("canplaythrough", function() {

        $(".play-button").removeClass("disabled");
        $(".play-button").text("play_arrow");

    });

    // declare button variables
    const button = $(".button");

    // add click event to all elements to button class
    button.click(function(e) {

        // get target dataset
        const target = $(e.target).data('type');

        // declare videos
        const videoOne = $(".video-one");
        const videoTwo = $(".video-two");

        // if target dataset is "start_play"
        if (target === "start_play") {

            // log to console
            console.log("Start Play");

            // scroll down to the video-wrapper
            $("html, body").animate({ scrollTop: $(".video-wrapper").offset().top }, 500);

            // add playing class
            videoOne.addClass("playing");
            videoTwo.addClass("playing");

            // remove paused class
            videoOne.removeClass("paused");
            videoTwo.removeClass("paused");

            // play videos
            videoOne[0].play();
            videoTwo[0].play();

        } else if (target === "play-pause") {

        	// log to console
            console.log("Play/Pause")

            if ($(".video-one").hasClass("playing") && $(".video-two").hasClass("playing")) {

                // change symbol
                $(".play-pause").text("play_arrow")

                // add paused class to videos
                videoOne.addClass("paused")
                videoTwo.addClass("paused")

                // remove playing class
                videoOne.removeClass("playing")
                videoTwo.removeClass("playing")

                // pause both videos
                videoOne[0].pause();
                videoTwo[0].pause();

                // if video-one is paused
            } else if ($(".video-one").hasClass("paused") && $(".video-two").hasClass("paused")) {

                // change symbol
                $(".play-pause").text("pause")

                // add playing class
                videoOne.addClass("playing")
                videoTwo.addClass("playing")

                // remove paused class
                videoOne.removeClass("paused")
                videoTwo.removeClass("paused")

                // play both videos
                videoOne[0].play();
                videoTwo[0].play();

            }

        } else if (target === "mute-unmute") {

            console.log("muted/unmuted");

            // true = should be off
            // false = should be on

            if (videoOne.hasClass("active") && videoOne.prop("muted", false) && videoOne.hasClass("not-muted")) {

                // change symbol
                $(".mute-unmute").text("volume_up");

                // remove not-muted class from video-two
                videoOne.removeClass("not-muted");

                // add muted class to video-one
                videoOne.addClass("muted");

                // mute video one
                videoOne.prop("muted", true);

            } else if (videoTwo.hasClass("active") && videoTwo.prop("muted", false) && videoTwo.hasClass("not-muted")) {

                // change symbol
                $(".mute-unmute").text("volume_up");

                // remove not-muted class from video-two
                videoTwo.removeClass("not-muted");

                // add muted class to video-two
                videoTwo.addClass("muted");

                // mute video one
                videoTwo.prop("muted", true);

            } else if (videoOne.hasClass("active") && videoOne.prop("muted", false) && videoOne.hasClass("muted")) {

                // change symbol
                $(".mute-unmute").text("volume_off");

                // add not-muted class to video-one
                videoOne.addClass("not-muted");

                // remove muted class from video-one
                videoOne.removeClass("muted");

                // mute video one
                videoOne.prop("muted", false);

            } else if (videoTwo.hasClass("active") && videoTwo.prop("muted", false) && videoTwo.hasClass("muted")) {

                // change symbol
                $(".mute-unmute").text("volume_off");

                // add not-muted class to video-two
                videoTwo.addClass("not-muted");

                // remove muted class from video-two
                videoTwo.removeClass("muted");

                // mute video one
                videoTwo.prop("muted", false);
            }

            // if target it switch button
        } else if (target === "switch") {

            // decalre variables
            const videoOneContainer = $(".video-one-element");
            const videoTwoContainer = $(".video-two-element");

            // if videoContainerOne has active class
            if (videoOneContainer.hasClass("active")) {

                // add/remove clases
                videoTwoContainer.addClass("active");
                videoOneContainer.removeClass("active");
                videoTwo.addClass("active");
                videoOne.removeClass("active");
                videoOne.addClass("muted");
                videoOne.removeClass("not-muted");
                videoTwo.addClass("not-muted");
                videoTwo.removeClass("muted");

                //mute/unmute videos
                videoOne.prop("muted", true)
                videoTwo.prop("muted", false)


                // if videoContainerTwo has active class
            } else {

                // add/remove classes
                videoTwoContainer.removeClass("active");
                videoOneContainer.addClass("active");
                videoTwo.removeClass("active");
                videoOne.addClass("active");
                videoOne.addClass("not-muted");
                videoOne.removeClass("muted");
                videoTwo.addClass("muted");
                videoTwo.removeClass("not-muted");

                // mute/unmute
                videoOne.prop("muted", false)
                videoTwo.prop("muted", true);

            }

        }

    });

});