let heartIcons = document.querySelectorAll(".card .heart-icon");
for(let i = 0; i < heartIcons.length; i++){
    let heartIcon = heartIcons[i];
    heartIcon.addEventListener("click", handleHeartIconClick);
}

function handleHeartIconClick(e){
   
    let heartIcon = e.currentTarget; 
    if(heartIcon.classList.contains("fa-heart-o")){ 
        heartIcon.classList.remove("fa-heart-o");
        heartIcon.classList.add("fa-heart");
    }
    else {
        heartIcon.classList.remove("fa-heart");
        heartIcon.classList.add("fa-heart-o");
    }
}

let starIcons = document.querySelectorAll(".card .star-icon");
for(let i = 0; i < starIcons.length; i++){
    let starIcon = starIcons[i];
    
    starIcon.addEventListener("click", handleStarIconClick);
}

function handleStarIconClick(e){

    const clickedStar = e.currentTarget;
    const starContainer = clickedStar.parentElement;
    const starSiblings = starContainer.children;
    
    let flag = false; 

    for (let index = 0; index < starSiblings.length; index++) {
        const currentStar = starSiblings[index];


        if(!flag)
        {
            currentStar.classList.remove('fa-star-o');
            currentStar.classList.add('fa-star');
        }

        else
        {
            currentStar.classList.remove('fa-star');
            currentStar.classList.add('fa-star-o');
        }
        
        if(currentStar == clickedStar)
        {
            flag = true;
        }
    }
}

