
// CAROUSEL
$('.carousel').carousel({
    interval: 3000
})


// Position  checking
const offsetVal = 250;
$('body').scrollspy(
  { target: '#navbar-example',  offset: offsetVal }
)


// https://www.codeply.com/go/Pv5Ef2WbsR/bootstrap-smooth-scroll-template
// $("nav ul li a[href^='#']").on('click', function (e) {
/* animate smooth scrolling sections */
$("a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    let hash = this.hash;

    /* 
    console.log("hash")
    console.log(hash);
    console.log('$(hash).offset()');
    console.log(typeof $(hash).offset() === "undefined");
    console.log($(hash).offset()); */

    if (hash === "") {
        console.warn("This is empty link");

    } else if (typeof $(hash).offset() === "undefined") {
        console.warn("This link not provide to any element on this page");

    } else {
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function () {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
            console.log("scrolling done");
        });
    }


});