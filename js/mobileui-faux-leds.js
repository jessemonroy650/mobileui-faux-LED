//
//    Date: 2015-07-04
//
var LEDS = {

    timeHandle : 0,
    timeOut    : 1000,

    init : function () {
        $("#LED_1").addClass("red");
    },

    clear : function () {
        $("#LED_1").removeClass("red");
        $("#LED_2").removeClass("green");
        $("#LED_3").removeClass("blue");
    },

    timedRotate : function(timeInterval) {
        if (timeInterval) {
            LEDS.timeOut = timeInterval;
        }
        if (LEDS.timeHandle) {
            console.log("clicked off.");
            clearInterval(LEDS.timeHandle);
            LEDS.clear();
        } else {
            LEDS.init();
            LEDS.timeHandle = setInterval(LEDS.rotate, LEDS.timeOut);
            console.log("clicked on.");
        }
    },

    rotate : function () {
        if ($("#LED_1").hasClass("red")) {
            $("#LED_1").toggleClass("red");
            $("#LED_2").addClass("green");
        } else if ($("#LED_2").hasClass("green")) {
            $("#LED_2").toggleClass("green");
            $("#LED_3").addClass("blue");
        } else if ($("#LED_3").hasClass("blue")) {
            $("#LED_3").toggleClass("blue");
            $("#LED_1").addClass("red");
        }
    }
};