const OpenButton = document.querySelector(".Open-Button")
const CaseCards = document.querySelector(".Case-Container")
const Winner_Card = document.querySelector(".Winner_Card")
const Cards = document.querySelectorAll(".Case-Card")
let RandomPixel;
RandomPixel = Math.floor(Math.random() * 180) + 10;

// 400 270 170 100 50 10

//Rarities
const RaritiesArray = ["Common" , "Uncommon" , "Rare" , "Epic" , "Mythic" , "Legendary"];
let Rarity;
function RandomPrize(x) {
console.log(RaritiesArray)
let RandomRarityNumber = Math.floor(Math.random() * 1210) + 1;

if (RandomRarityNumber > 710){
    Rarity = RaritiesArray[0];
} else if (RandomRarityNumber > 360 && RandomRarityNumber <=710){
    Rarity = RaritiesArray[1];
} else if (RandomRarityNumber > 160 && RandomRarityNumber <=360){
    Rarity = RaritiesArray[2];
} else if (RandomRarityNumber > 60 && RandomRarityNumber <=160){
    Rarity = RaritiesArray[3];
} else if (RandomRarityNumber > 10 && RandomRarityNumber <=60){
    Rarity = RaritiesArray[4];
} else if (RandomRarityNumber > 0 && RandomRarityNumber <=10){
    Rarity = RaritiesArray[5];
}

console.log(RandomRarityNumber , Rarity)

x.textContent = Rarity

if (Rarity == RaritiesArray[0]){
   x.style.backgroundColor = `rgb(230, 230, 230)`
} else if (Rarity == RaritiesArray[1]) {
    x.style.backgroundColor = `rgb(153, 255, 153)`
} else if (Rarity == RaritiesArray[2]) {
    x.style.backgroundColor = `rgb(26, 117, 255)`
} else if (Rarity == RaritiesArray[3]) {
    x.style.backgroundColor = `rgb(255, 0, 102)`
} else if (Rarity == RaritiesArray[4]) {
    x.style.backgroundColor = `rgb(255, 0, 0)`
} else if (Rarity == RaritiesArray[5]) {
    x.style.backgroundColor = `rgb(255, 255, 0)`
}

}


function CardRollAnimation(){
     CaseCards.classList.add('RollAnimation');
    for (let i = 0 ; i < Cards.length ; i++){
        if (Cards[i] == Winner_Card){
         console.log("it is ")
        } else {
           RandomPrize(Cards[i])
         //Cards[i].style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))})`
        }
     }
     
     CaseCards.style.transform = `translate(-${(200*20 + RandomPixel + (10*20))}px)`
    
    }








OpenButton.addEventListener("click", () =>{

        CaseCards.classList.remove('RollAnimation');
        CaseCards.style.transform = `translate(0px)`
        setTimeout(100)
        setTimeout(function(){
    RandomPrize(Winner_Card)
    CardRollAnimation()
        },50);
console.log("gay")


})