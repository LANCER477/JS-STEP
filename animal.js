$(document).ready(function () {
    const $animal = $("#animal");
    const animalWidth = $animal.width();
    const animalHeight = $animal.height();

    $(document).mousemove(function (event) {
        let x = event.pageX - animalWidth / 2;
        let y = event.pageY - animalHeight / 2;

        $animal.css({
            left: x + "px",
            top: y + "px",
        });
    });
});
