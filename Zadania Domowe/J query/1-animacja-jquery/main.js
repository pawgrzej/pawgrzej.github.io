'use strict';

    $("button").click(function () {

    $("div").animate({
        color: "white",
        fontSize: "19px",
        left: "100px",
        width: "100px",
        height: "100px"
    }, 5000).queue(function (next) {
            $("div").css({
              backgroundColor: "blue",
              transition: "3s"
            })

    });
    });
