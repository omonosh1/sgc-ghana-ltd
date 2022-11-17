// ----- jquery scripting -----
$(document).ready(function () {

    // ----- preloader section -----
    $(".preloader").fadeOut("fast");

    // ----- owl carousel -----
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});

// ----- opening and closing hours scripting -----
var now = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var checkTime = function () {
    var today = weekday[now.getDay()];
    var timeDiv = document.getElementById('timeDiv');
    var dayOfWeek = now.getDay();
    var hour = now.getHours();
    var minutes = now.getMinutes();

    //add AM or PM
    var suffix = hour >= 12 ? "PM" : "AM";

    // add 0 to one digit minutes
    if (minutes < 10) {
        minutes = "0" + minutes
    };

    if ((dayOfWeek == 0 || dayOfWeek == 6) && hour >= 09 && hour <= 15) {
        hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
        timeDiv.innerHTML = 'open!';
        timeDiv.className = 'open';
    }

    else if ((dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5) && hour >= 09 && hour <= 17) {
        hour = ((hour + 11) % 12 + 1);
        timeDiv.innerHTML = 'open!';
        timeDiv.className = 'open';
    }

    else {
        if (hour == 0 || hour > 18) {
            hour = ((hour + 11) % 12 + 1); //i.e. show 1:15 instead of 13:15
        }
        timeDiv.innerHTML = 'closed!';
        timeDiv.className = 'closed';
    }
};

var currentDay = weekday[now.getDay()];
var currentDayID = "#" + currentDay; //gets todays weekday and turns it into id
$(currentDayID).toggleClass("today"); //hightlights today in the view hours modal popup

setInterval(checkTime, 1000);
checkTime();

// ----- real time clock scripting -----
function showTime() {
    let dataTime = new Date();
    let hour = dataTime.getHours();
    let min = dataTime.getMinutes();
    let s = dataTime.getSeconds();
    let ms = dataTime.getMilliseconds();
    if (s < 10) { s = "0" + s; }

    if (min < 10) { min = "0" + min; }

    if (hour < 10) { hour = "0" + hour; }

    if (ms < 100) { ms = "000"; }

    let show = hour + ":" + min + ":" + s;

    document.getElementById("MyClockDisplay").innerText = show;

    document.getElementById("glow").innerText = ms;

    setTimeout(showTime, 100);
}
showTime();

// ----- gsap counter scripting -----
const items = document.querySelectorAll(".data");

gsap.from(items, {
    textContent: 0,
    duration: 3,
    ease: Power1.easeIn,
    snap: { textContent: 1 }
    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
});

// ----- initialising wow js -----
new WOW().init();