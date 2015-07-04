# mobileui-faux-LED
some simple simulated LEDs

Three LEDS (red, green, &amp; blue) that timed rotation or manual rotation.

**Required files**
* css/mobile-faux-leds.css
* js/mobile-faux-leds.js

**Required HTML**

```
<div id=full_button class="boxy wrapper">
    <div id=LED_1 class="circle">&nbsp;</div>
    <div id=LED_2 class="circle">&nbsp;</div>
    <div id=LED_3 class="circle">&nbsp;</div>
</div>
```

**Functions***

* LEDS.timedRotate(ms); - timed rotation, default to 1000ms.
* LEDS.rotate(); - manual rotation.

