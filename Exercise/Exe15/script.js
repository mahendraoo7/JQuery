$(function () {
    $('#btn').click(function () {
        let world = $('input').val().trim();
        if (world) {
            $('ul').append(`<li>${world}</li>`);
            $('input').val('');
        } else {
            alert("Please enter a value.");
        }   
    });

    // Allow removing list items on click
    $('ul').on('click', 'li', function() {
        $(this).remove();
    });
});
