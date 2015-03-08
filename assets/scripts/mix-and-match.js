$(function() {
    var record = [],
        userChoice = {
            'room': '',
            'range': '',
            'theme': ''
        };

    var populateResult = function() {
        var choice,
            totalCost = 0,
            counts = {
                'b': 0,
                'l': 0,
                'd': 0
            },
            result = '<div class="row text-center">';

        for (var i = 0; i < record.length; i++) {
            choice = record[i];
            totalCost += 2500;
            counts[choice['room'].charAt(0).toLowerCase()] += 1;

            result += '<div class="col-md-2">' +
                '<a class="thumbnail">';

            result += '<p class="h3">' + choice['room'] + '</p>' +
                '<span class="greyed">' + choice['range'] + '<br/>' + choice['theme'] + '</span>' +
                '</a></div>'
        }
        result += '</div>';
        if (counts['l'] && counts['d']) {
            totalCost -= 1000 * counts['b'];
        }
        $('.cart-total').html(totalCost);
        $('.price-alert').show();
        return result;
    };

    $('.thumbnail').click(function(event) {
        event.stopPropagation();
        userChoice[$(this).attr('data-valtype')] = $(this).attr('data-val');
        var parent = $(this).parents('.pick-options');
        parent.fadeOut(250, function() {
            if (parent.next('.pick-result').length != 0) {
                // populate result
                record.push(userChoice);
                $('.pick-result').html(populateResult()).fadeIn(250);
                if (record.length < 6) {
                    // limit of 6
                    $('.reload').fadeIn(250);
                }
            } else {
                parent.next('.pick-options').fadeIn(250);
            }
        });
    });

    $('.reload').click(function(event) {
        event.stopPropagation();
        userChoice = {
            'room': '',
            'range': '',
            'theme': ''
        };
        $('.pick-result').fadeOut(250, function() {
            $('.mix-and-match .pick-options:first-child').fadeIn(250);
            $(this).hide();
        });
    });
});
