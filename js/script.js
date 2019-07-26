$(document).ready(function(){
    $(".all").click(function(){
        $("#p1").toggle();
        $("#img1").toggle();
    });
    $(".all1").click(function(){
        $("#p2").toggle();
        $("#img2").toggle();
    });
    $(".all2").click(function(){
        $("#p3").toggle();
        $("#img3").toggle();
    });
    
    $("#green").click(function(){
        
        alert($(".form-are").val() + " We Have Received Yur Message!! Thank You For Working With Us");
    });
});

$("#h1").hover(function() {
    $("#h1").css("opacity","0.2");
    $("#une").show();
},
function(){
    $("#h1").css("opacity","1");
    $("#une").hide();
});
$("#h2").hover(function() {
    $("#h2").css("opacity","0.2");
    $("#deux").show();
},
function(){
    $("#h2").css("opacity","1");
    $("#deux").hide();
});
$("#h3").hover(function() {
    $("#h3").css("opacity","0.2");
    $("#trois").show();
},
function(){
    $("#h3").css("opacity","1");
    $("#trois").hide();
});
$("#h4").hover(function() {
    $("#h4").css("opacity","0.2");
    $("#quatre").show();
},
function(){
    $("#h4").css("opacity","1");
    $("#quatre").hide();
});
$("#h5").hover(function() {
    $("#h5").css("opacity","0.2");
    $("#cinq").show();
},
function(){
    $("#h5").css("opacity","1");
    $("#cinq").hide();
});
$("#h6").hover(function() {
    $("#h6").css("opacity","0.2");
    $("#six").show();
},
function(){
    $("#h6").css("opacity","1");
    $("#six").hide();
});
$("#h7").hover(function() {
    $("#h7").css("opacity","0.2");
    $("#sept").show();
},
function(){
    $("#h7").css("opacity","1");
    $("#sept").hide();
});
$("#h8").hover(function() {
    $("#h8").css("opacity","0.2");
    $("#huit").show();
},
function(){
    $("#h8").css("opacity","1");
    $("#huit").hide();
});