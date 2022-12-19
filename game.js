"use strict";

//import data from 'https://poofy25.github.io/Case-Simulator/caseData.json' assert {type: 'json'};

const OpenButton = document.querySelector(".Open-Button")
const CaseCards = document.querySelector(".Case-Container")
const Winner_Card = document.querySelector(".Winner_Card")
const Winner_CardIMG = document.querySelector(".Winner_Card img")
const Winner_Card_Name = document.querySelector(".Winner_Card .PrizeRarity")
const Cards = document.querySelectorAll(".Case-Card")
const CardsRarityDOM = document.querySelectorAll(".PrizeRarity")
const CardsPrizeIMG = document.querySelectorAll(".PrizeIMG img")

const ChanceSkins = document.querySelectorAll(".SkinItem")
const ChanceCardsRarityDOM = document.querySelectorAll(".PrizeRarity-Chance")
const ChanceCardsPrizeIMG = document.querySelectorAll(".PrizeIMG-Chance img")

const PrizeContainer = document.querySelector(".PrizeContainer")
const ContinueButton = document.querySelector(".ContinueButton")
const PrizeContainerIMG = document.querySelector(".PrizeContainerIMG img")
const PrizeContainerName = document.querySelector(".PrizeContainerName")
let RandomPixel;



 function appFunction (data , CaseNumber) {
    
    console.log(data);
    console.log(CaseNumber);
   
    const CardWidth = Winner_Card.offsetWidth;



function loadChanceSkins (Case) {
    console.log(data.Cases[CaseNumber])
const CaseInfo = data.Cases[CaseNumber]
let CaseRaritiesArray = CaseInfo.Rarities;
let CaseOdds = CaseInfo.Settings.CaseOdds;
let CaseSkinsName = CaseInfo.SkinsName;
let CaseSkinsSrc = CaseInfo.SkinsSrc

var TotalSkins = 0;

for (let i = 0 ; i < 1 ; i++){
    for (let i = 0 ; i < CaseSkinsSrc.GrayRarity.length; i++){
        TotalSkins = TotalSkins + 1;
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.GrayRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = "Gray"
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.GrayRarity[i]
    };
    for (let i = 0 ; i < CaseSkinsSrc.BlueRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.BlueRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `Blue`
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.BlueRarity[i]
    }
    for (let i = 0 ; i < CaseSkinsSrc.PurpleRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.PurpleRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(168, 79, 168)`
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.PurpleRarity[i]
    }
    for (let i = 0 ; i < CaseSkinsSrc.PinkRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.PinkRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(255, 0, 234)`
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.PinkRarity[i]
    }
    for (let i = 0 ; i < CaseSkinsSrc.RedRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.RedRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `Red`
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.RedRarity[i]
    }
    for (let i = 0 ; i < CaseSkinsSrc.SpecialRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.SpecialRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `Yellow`
        ChanceCardsRarityDOM[TotalSkins-1].textContent = CaseSkinsName.SpecialRarity[i]
    }
}

for (let i = 0 ; i < ChanceSkins.length ; i++){
    if (i >= TotalSkins){
        ChanceSkins[i].style.display = `none`
    }
    if (i < TotalSkins){
        ChanceSkins[i].style.display = `block`
    }

    



}



console.log(TotalSkins)
}
loadChanceSkins(data.Cases.CaseName)




function WorkingCase(Case){
const CaseInfo = Case
let CaseRaritiesArray = CaseInfo.Rarities;
let CaseOdds = CaseInfo.Settings.CaseOdds;
let CaseSkinsName = CaseInfo.SkinsName;
let CaseSkinsSrc = CaseInfo.SkinsSrc

let CurrentRarity;

let RandomGrayItem;
let RandomBlueItem;
let RandomPurpleItem;
let RandomPinkItem;
let RandomRedItem;

let RandomRarityNumber


//ODDS FUNCTION 

function RandomRarityFunction() {

const GrayOdds = CaseOdds.GrayRarity.split("-");
const BlueOdds = CaseOdds.BlueRarity.split("-");
const PurpleOdds = CaseOdds.PurpleRarity.split("-");
const PinkOdds = CaseOdds.PinkRarity.split("-");
const RedOdds = CaseOdds.RedRarity.split("-");
const SpecialOdds = CaseOdds.SpecialRarity.split("-");





if (CaseRaritiesArray[0] == "Blue"){

    RandomRarityNumber = Math.floor(Math.random() * 10000) + 1;
    if (RandomRarityNumber > BlueOdds[0] && RandomRarityNumber <= BlueOdds[1]){
        CurrentRarity = CaseRaritiesArray[0]
    } else if (RandomRarityNumber > PurpleOdds[0] && RandomRarityNumber <= PurpleOdds[1]){
        CurrentRarity = CaseRaritiesArray[1]
    } else if (RandomRarityNumber > PinkOdds[0] && RandomRarityNumber <= PinkOdds[1]){
        CurrentRarity = CaseRaritiesArray[2]
    } else if (RandomRarityNumber > RedOdds[0] && RandomRarityNumber <= RedOdds[1]){
        CurrentRarity = CaseRaritiesArray[3]
    } else if (RandomRarityNumber > SpecialOdds[0] && RandomRarityNumber <= SpecialOdds[0]){
        CurrentRarity = CaseRaritiesArray[4]
    }

} else if (CaseRaritiesArray[0] == Gray){
       console.log("NEEDS TO BE DONE")
}
}




function setPrizeStyles(PrizeRarity , PrizeImage){
    
    RandomGrayItem = Math.floor(Math.random() * CaseSkinsSrc.GrayRarity.length)
    RandomBlueItem = Math.floor(Math.random() * CaseSkinsSrc.BlueRarity.length);
    RandomPurpleItem = Math.floor(Math.random() * CaseSkinsSrc.PurpleRarity.length);
    RandomPinkItem = Math.floor(Math.random() * CaseSkinsSrc.PinkRarity.length)
    RandomRedItem = Math.floor(Math.random() * CaseSkinsSrc.RedRarity.length);
    



    if (CurrentRarity == "Gray"){

    PrizeRarity.style.backgroundColor = "Gray"
    PrizeRarity.textContent = CaseSkinsName.GrayRarity[RandomGrayItem]
    PrizeImage.src = CaseSkinsSrc.GrayRarity[RandomGrayItem]

} else if (CurrentRarity == "Blue") {

    PrizeRarity.style.backgroundColor = `rgba(37,60,134,1)`
    PrizeRarity.textContent = CaseSkinsName.BlueRarity[RandomBlueItem]
    PrizeImage.src = CaseSkinsSrc.BlueRarity[RandomBlueItem]
 
} else if (CurrentRarity == "Purple") {

    PrizeRarity.style.backgroundColor = `rgb(168, 79, 168)`
    PrizeRarity.textContent = CaseSkinsName.PurpleRarity[RandomPurpleItem]
    PrizeImage.src = CaseSkinsSrc.PurpleRarity[RandomPurpleItem]

} else if (CurrentRarity == "Pink") {

    PrizeRarity.style.backgroundColor = `rgb(255, 0, 234)`
    PrizeRarity.textContent = CaseSkinsName.PinkRarity[RandomPinkItem]
    PrizeImage.src = CaseSkinsSrc.PinkRarity[RandomPinkItem]

} else if (CurrentRarity == "Red") {

    PrizeRarity.style.backgroundColor = `Red`
    PrizeRarity.textContent = CaseSkinsName.RedRarity[RandomRedItem]
    PrizeImage.src = CaseSkinsSrc.RedRarity[RandomRedItem]

} else if (CurrentRarity == "Special") {

    PrizeRarity.style.backgroundColor = `Yellow`
    PrizeRarity.textContent = CaseSkinsName.SpecialRarity[0]
    PrizeImage.src = CaseSkinsSrc.SpecialRarity[0]

}

}




function CardRollAnimation(){
    CaseCards.classList.add('RollAnimation');
   for (let i = 0 ; i < Cards.length ; i++){
       if (Cards[i] == Winner_Card){
           RandomRarityFunction()

           setPrizeStyles(CardsRarityDOM[i],CardsPrizeIMG[i])
           
           console.log("Cards Rarity is :" + CurrentRarity + " " + RandomRarityNumber)
       } else {
          RandomRarityFunction()
          setPrizeStyles(CardsRarityDOM[i],CardsPrizeIMG[i])
   
       }
    }
    RandomPixel = Math.floor(Math.random() * (CardWidth - (CardWidth/20)));
    console.log(CardWidth)
    CaseCards.style.transform = `translate(-${(CardWidth*24.5 + CardWidth/12.5*25 + RandomPixel)}px)`
   
   }


CardRollAnimation()
}



ContinueButton.addEventListener("click", () =>{

    PrizeContainer.style.display = `none`
    CaseList.style.display = `flex`
    OpeningCaseContainer.style.display = `none`
})



OpenButton.addEventListener("click", () =>{

OpenButton.style.visibility = `hidden`

  let OpeningSound =new Audio("Audio/CSGO Case Opening Sound Effect.mp3")
    OpeningSound.play()
 

        CaseCards.classList.remove('RollAnimation');
        CaseCards.style.transform = `translate(0px)`
       
        setTimeout(function(){
            WorkingCase(data.Cases[CaseNumber])
            
        },200);
  
        setTimeout(function(){
            OpenButton.style.visibility = `visible`
            PrizeContainer.style.display = `flex`
            PrizeContainer.style.position = `absolute`
            PrizeContainerIMG.src = Winner_CardIMG.src
            PrizeContainerName.textContent = Winner_Card_Name.textContent
            PrizeContainer.style.background = `linear-gradient(0deg, rgba(38,38,38,.9) 0%, rgba(38,40,43,1) 7%, rgba(32,32,32,1) 23%, ${Winner_Card_Name.style.backgroundColor} 80%, ${Winner_Card_Name.style.backgroundColor} 93%, rgba(43,52,91,0.9) 100%)`

console.log(PrizeContainer.style.background)
console.log(Winner_Card_Name.style.backgroundColor)

        },6250);



  
})

 }

// api url
const api_url = 
      "/caseData.json";
  
// Defining async function
fetch(api_url)
.then(function (response) {
    return response.json();
})
    
.then( function (data){

    const CaseList = document.querySelector(".CaseListContainer")
const OpeningCaseContainer = document.querySelector(".OpeningCaseContainer")
const Cases = document.querySelectorAll(".Case")

for (let i = 0 ; i < Cases.length ; i ++) {
    Cases[i].addEventListener("click" ,() => {

        CaseList.style.display = `none`
        OpeningCaseContainer.style.display = `flex`
        appFunction(data, i)
        console.log(i)

    })
}
   
});
// Calling that async function

