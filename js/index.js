$(document).ready(function () {


//$('#causeDrop').change(function () {
//    var selectedText = $(this).find("option:selected").text();
//    
//    console.log(selectedText);
//});
//
//    $('#causeDrop').on('show.bs.dropdown', function () {
//        var selectedText = $(this).find("option:selected").text();
//    
//    console.log(selectedText);
//})
    
    $('.natural.dropdown div a').on('click', function(){
        var selectedText = this.text;
        console.log(selectedText);
        $('.dropdown button').html(selectedText);
});

    // Emb Natural Language Form
    function natural_language_form() {


        // INLINE SELECT MENUS

        // Prevent normal click on rendered inline <select> values
        $('.nl-faux-select').click(function () {
            event.preventDefault();
        });


        // change value of JET SIZE select menu
        $('#nl-jet-size-select').change(function () {

            var jet_size_select_value = $("#nl-jet-size-select option:selected").text();

            var fauxSelectWidth = $("#nl-jet-size-rendered").width();

            if ($(this).val() == "") {

                $("#nl-jet-size-rendered").html("( select a size )");

            } else {

                $("#nl-jet-size-rendered").html(jet_size_select_value);

                // wrapper element needs a kick for certain browsers
                $('.nl-jet-size-wrapper').css({
                    "min-width": fauxSelectWidth
                });
                //$('.nl-jet-size-wrapper').removeAttr('style');
            }
        });


        // change value of RANGE select menu
        $('#nl-range-select').change(function () {

            var range_select_value = $("#nl-range-select option:selected").text();

            var fauxSelectWidth = $("#nl-range-rendered").width();

            if ($(this).val() == "") {

                $("#nl-range-rendered").html("( select a range )");

            } else {

                $("#nl-range-rendered").html(range_select_value);

                // wrapper element needs a kick for certain browsers
                $('.nl-range-wrapper').css({
                    "min-width": fauxSelectWidth
                });
                //$('.nl-range-wrapper').removeAttr('style');

            }
        });





        // INLINE TEXT INPUT

        $('#nl-location-faux-input').click(function () {

            // set a min-width on the element to prevent jumping when placeholder is cleared
            var inputWidth = $(this).width();
            $(this).css({
                "min-width": inputWidth,
                "text-align": "center"
            });


            // clear the placeholder, if current value matches the placeholder
            var placeholder_value = '0';
            var current_text = $(this).text();

            if (current_text == placeholder_value) {

                // matches placeholder value, then clear the value
                $(this).html('');

            } else {

                // doesn't match the placeholder value, then do nothing
            }

        });

        // Sync the faux input value as user is typing 
        $('#nl-location-faux-input').on('keyup blur', function (event) {

            var current_text = $(this).text();
            var meals = current_text * 3;

            if (current_text == '') {

                // if the current value if nothing/null, then put a NBSP into the hidden input
                $('#nl-location-input').attr('value', '\xa0');
                $('#total').removeClass('highlight').html('$0');
                $('#meals').removeClass('highlight').html('0');
             
                //console.log('no location value');

            } else {

                // add the typed value into the hidden input as the user types it out
                $('#nl-location-input').attr('value', current_text);
                $('#total').addClass('highlight').html('$' + current_text * 12);
                $('#meals').addClass('highlight').html(meals);
               

                // Kick the parent element so that the browser re-draws each time
                // This helps with text clipping and width updating on certain version of webkit
                $('#nl-location-wrapper').toggleClass('kick');

            }

        });

        // On blur, if the value is empty then swap back to the placeholder
        $('#nl-location-faux-input').blur(function () {

            // Calculate the current character-count
            var current_length = $(this).text().length;

            // remove any inline styles set above when element is focused
            $(this).removeAttr('style');

            if (current_length < 1) {
                // if the Input is empty, then revert to the placeholder block
                $(this).html("0");
            } else {
                // if the input is not empty
                // do nothing
            }

        });


    }
    natural_language_form();






});

