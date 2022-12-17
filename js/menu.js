
$(function() {
    $('.actions').click(function() { 
        $('.fa-house').slideToggle();
        $('.fa-user').slideToggle();
        $('.fa-upload').slideToggle();
        $('.smjerovi').slideToggle();
    });
});


$(function() {
    $('.smjerovi').click(function() { 
        console.log($(this).text()); 
        if(($(this).text()) == 'Prediplomski') {
            $('.smjer1').slideToggle();
            $(this).siblings('.smjerovi').slideToggle();
        } else if($(this).text() == 'Stručni') {
            $('.smjer2').slideToggle();
            $(this).siblings('.smjerovi').slideToggle();
        }  else if($(this).text() == 'Razlikovni') {
            $('.smjer3').slideToggle();
            $(this).siblings('.smjerovi').slideToggle();
        } else if($(this).text() == 'Diplomski') {
            $('.smjer4').slideToggle();
            $(this).siblings('.smjerovi').slideToggle();
        }else if($(this).text() == 'Poslijediplomski') {
            $('.smjer5').slideToggle();
            $(this).siblings('.smjerovi').slideToggle();
        }   
    });
});

$(function() {
    $('.smjer1').click(function() { 
        console.log($(this).text()); 
        if(($(this).text()) == 'Računarstvo') {
            $('.godina120').slideToggle();
            $(this).siblings('.smjer1').slideToggle();
        } else if($(this).text() == 'Strojarstvo') {
            $('.godina130').slideToggle();
            $(this).siblings('.smjer1').slideToggle();
        }  else if($(this).text() == 'Brodogradnja') {
            $('.godina140').slideToggle();
            $(this).siblings('.smjer1').slideToggle();
        } 
    });
});

$(function() {
    $('.godina120').click(function() { 
        console.log($(this).text()); 
        if(($(this).text()) == '1.godina') {
            $('.kolegiji120_1').slideToggle();
            $(this).siblings('.godina120').slideToggle();
        } else if($(this).text() == '2.godina') {
            $('.kolegiji120_2').slideToggle();
            $(this).siblings('.godina120').slideToggle();
        }  else if($(this).text() == '3.godina') {
            $('.kolegiji120_3').slideToggle();
            $(this).siblings('.godina120').slideToggle();
        } 
    });
});

function goToNewPage()
    {
        var url = document.querySelectorAll('li').value;
        if(url != 'none') {
            window.location = url;
        }
    }