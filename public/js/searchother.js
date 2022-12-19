

$("#search").keypress(function(event) {

    //if (event.keyCode === 13) {
        let input = document.getElementById('search').value;
        input = input.toLowerCase();
        
       // $("#searchBtn").click();
   
        document.location.href='search.html';

        let card = document.getElementsByClassName('card');
        for (i = 0; i < card.length; i++) {

        if (card[i].textContent.toLowerCase().includes(input)) {
            card[i].style.display = "block";
        } else if (!card[i].textContent.toLowerCase().includes(input) && card[i].style.display === "block") {
            card[i].style.display = "none";


        }
        if(document.getElementById('search').value==""){
            card[i].style.display = "none";
        }
   // }
    }
});