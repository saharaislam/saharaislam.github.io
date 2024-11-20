$(document).ready(function () {
    // Initialize Masonry.js
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        percentPosition: true,
        gutter: 10
    });
});
