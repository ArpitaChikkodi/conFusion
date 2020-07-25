$("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
         // this on both conditions resp, $("#carouselButton").children("span").replaceAll('fa fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

// javascript code for Reserve Table
$("#reserveButton").click(function(){
$('#reserveModal').modal('show');
});

// or can also use toggle
// $("#reserveButton").click(function(e) {
//     $("#reserveModal").modal('toggle');
// });

// javascript code for Login Button
$("#loginButton").click(function(){
$('#loginModal').modal('show');
});


//   Bootstrap JQuery component example pause and play two buttons
//   $(document).ready(function(){
//       $("#mycarousel").carousel({ interval : 2000 });
//       $("#carousel-pause").click(function() {
//           $("#mycarousel").carousel('pause');
//       });
//       $("#carousel-play").click(function() {
//           $("#mycarousel").carousel('cycle');
//       });
//   });