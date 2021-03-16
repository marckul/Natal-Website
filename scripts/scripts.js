
// CAROUSEL
$('.carousel').carousel({
    interval: 3000
})


// Position  checking
const offsetVal = 400;
$('body').scrollspy(
    { target: '#navbar-example', offset: offsetVal }
)

// window.onscroll = function() {
//     console.log("stop");
//     win = $(window);
//     console.log(win.scrollTop())
// }

const shift = 100;
// https://www.codeply.com/go/Pv5Ef2WbsR/bootstrap-smooth-scroll-template
// $("nav ul li a[href^='#']").on('click', function (e) {
/* animate smooth scrolling sections */
$(".navbar a[href^='#'], a[href^='#'].smooth-scrolling, .smooth-scrolling").on('click', function (event) {
    console.log("im here");
    // prevent default anchor click behavior
    event.preventDefault();
    win = $(window);
    // store hash
    let hash = this.hash;

    /* 
    console.log('$(hash).offset()');
    console.log(typeof $(hash).offset() === "undefined");
    */
    console.log(`hash: ${hash}`);
    console.log(`$(window).offset(): ${win.scrollTop()}`);

    win.scrollTop();
    


    if (hash === "") {
        console.warn("This is empty link");
        return null;
    } 
    
    console.log(`$(hash).offset().top  ${ $(hash).offset().top }`);
    let destPoint = $(hash).offset().top - shift;
    console.log(`destPoint: ${destPoint}`)
         
    if (destPoint < 0) {
        destPoint = 0;
    }

    if (typeof $(hash).offset() === "undefined") {
        console.warn("This link not provide to any element on this page");

    } else if ( destPoint < 0 && window.location.hash === hash ) {
        console.log("Destination point beyond window");
        console.log(`window location: ${win.scrollTop()}`);
    } else if (destPoint === win.scrollTop()) {
        console.log("currently on location");
        if(history.pushState) {
            history.pushState(null, null, hash);
        }
        else {
            location.hash = hash;
        }

    } else {
        // animate
        $('html, body').animate({
            scrollTop: destPoint
        }, 400, function () {
            
            if(history.pushState) {
                history.pushState(null, null, hash);
            }
            else {
                location.hash = hash;
            }
            console.log($(hash).offset().top);
            // when done, add hash to url
            // (default click behaviour)
            // window.location.hash = hash;
            console.log("scrolling done");
        });
    }


});