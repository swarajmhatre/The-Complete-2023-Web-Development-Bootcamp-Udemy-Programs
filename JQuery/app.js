//  $("h1").removeClass("swaraj");
$("button").html("<i>swaraj<i/>");
// $("a").attr("href", "https://www.yahoo.com");

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "green");
// });


// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");
// $("button").remove();

$("button").on("click", function(){
$("h1").animate({margin : "200px"}).animate({margin: 0}).slideUp(). slideDown().fadeOut().fadeIn();
}
);