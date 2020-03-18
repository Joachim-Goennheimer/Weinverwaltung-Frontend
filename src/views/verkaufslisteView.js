$(document).ready(() => {

    $("li").on("click", (event) => {
        let clickedId = event.target.id;

        $("li").removeClass("selected");
        $("#" + clickedId).addClass("selected");
    })


})
