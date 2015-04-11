$(document).ready(function($) {
    $(".wrapper").fadeTo('600', 1);
    $('p:empty').remove(), $('h1:empty').remove();
});

function getJsonFromGoogle(json) {
    
    entry = "";

    // non-loop content
    var headline = $('h1').html(json.feed.entry[0].gsx$copy.$t);
    var source = $('p.p-source').append("Source: " + json.feed.entry[1].gsx$copy.$t);

    var photo = json.feed.entry[2].gsx$copy.$t;
    $('.content-wrapper').css('background-image', 'url(' + photo + ')').css('background-size', 'cover').css('filter','grayscale(100%)');

    // loop for main content. 
    for (var i = 0; i < json.feed.entry.length; i++) {
        entry = json.feed.entry[i];

        var label = '<p class="label">' + entry.gsx$label.$t + '</p>';
        var number = '<p class="num">' + entry.gsx$number.$t + '</p>';
        var content = '<p>' + entry.gsx$content.$t + '</p>';

        var content = '<div class="content-wrap">' + label + number + content + '</div>';

        $('.numbers').append(content);

    }
    // add note to the numbers. will always appear last.
    var note = '<p class="sm">Note: ' + json.feed.entry[0].gsx$note.$t + '</p>';
    $('.content-wrap:last-of-type').append(note)
}

$('.source p').click(function(){
    $(this).next('.p-source').fadeIn();
}); 