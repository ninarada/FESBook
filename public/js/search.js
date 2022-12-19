$("#search").keypress(function(event) {


    let input = document.getElementById('search').value
        input = input.toLowerCase();
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
}; 
});
