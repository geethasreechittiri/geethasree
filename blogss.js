$(".elements").click(function(ele) {
    $(".elements").removeClass("active");
    var currentElement =  ele.currentTarget;
    $(currentElement).addClass("active");
});