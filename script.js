let check;
$(".numbers").on("click", function () {

    $(".numbers").css("background-color", "var(--DarkBlue)");

    $(this).css("background-color", "var(--Orange)");
    $(this).css("color", "var(--White)");
    check = $(this).html();
});

$("#submit").click(function (evt) {
    if (check == undefined || check == "") {
        $(".rating").addClass("unhide");
        $(".thank_you").addClass("hide");
        alert("Please select a rating");
    } else {
        $(".rating").removeClass("unhide");
        $(".thank_you").removeClass("hide");
        
        $(".rating").addClass("hide");
        $(".thank_you").addClass("unhide");

        $("#rating_given").html(check);
    }
});