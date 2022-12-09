$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

ScrollReveal({ reset: true });

ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  // easing: "ease-in-out"
});
ScrollReveal().reveal(".slide-left", {
  duration: 3000,
  origin: "right",
  distance: "300px",
  // easing: "ease-in-out"
});
ScrollReveal().reveal(".slide-top", {
  duration: 3000,
  origin: "bottom",
  distance: "300px",
  // easing: "ease-in-out"
});
ScrollReveal().reveal(".slide-bottom", {
  duration: 3000,
  origin: "top",
  distance: "300px",
  // easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 3000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5,
});
