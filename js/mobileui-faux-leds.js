//
//    Date: 2015-07-04
//
var LEDS = {

    myvar : 0,
    mytime : 1000,

    init : function () {
        $("#LED_1").addClass("red");
    },

    end : function () {
        $("#LED_1").removeClass("red");
        $("#LED_2").removeClass("green");
        $("#LED_3").removeClass("blue");
    },

    timedRotate : function(timeInterval) {
        if (timeInterval) {
            LEDS.mytime = timeInterval;
        }
        if (LEDS.myvar) {
            console.log("clicked off.");
            clearInterval(LEDS.myvar);
            LEDS.end();
        } else {
            LEDS.init();
            LEDS.myvar = setInterval(LEDS.rotate, LEDS.mytime);
            console.log("clicked on.");
        }
    },

    rotate : function () {
        if ($("#LED_1").hasClass("red")) {
            $("#LED_1").toggleClass("red");
            $("#LED_2").addClass("green");
            return;
        }
        if ($("#LED_2").hasClass("green")) {
            $("#LED_2").toggleClass("green");
            $("#LED_3").addClass("blue");
            return;
        }
        if ($("#LED_3").hasClass("blue")) {
            $("#LED_3").toggleClass("blue");
            $("#LED_1").addClass("red");
            return;
        }
    }
};