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

const CaseList = document.querySelector(".CaseListContainer")
const OpeningCaseContainer = document.querySelector(".OpeningCaseContainer")
const Cases = document.querySelectorAll(".Case")
let RandomPixel;



 function appFunction (data , CaseNumber) {
    
    console.log(data);
   
   
    const CardWidth = Winner_Card.offsetWidth;



function loadChanceSkins (Case) {
const CaseInfo = data.Cases[CaseNumber]
let CaseRaritiesArray = CaseInfo.Rarities;
let CaseOdds = CaseInfo.Settings.CaseOdds;
let CaseSkinsName = CaseInfo.SkinsName;
let CaseSkinsSrc = CaseInfo.SkinsSrc

var TotalSkins = 0;

const ChanceCardsRarityWeaponName = document.querySelectorAll(".SkinItem-Chance-Weapon");
const ChanceCardsRaritySkinName = document.querySelectorAll(".SkinItem-Chance-SkinName");

for (let i = 0 ; i < 1 ; i++){
    for (let i = 0 ; i < CaseSkinsSrc.GrayRarity.length; i++){
        TotalSkins = TotalSkins + 1;
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.GrayRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = "Gray"
        let NameArray = CaseSkinsName.GrayRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    };
    for (let i = 0 ; i < CaseSkinsSrc.BlueRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.BlueRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(61,87,195)`
        let NameArray = CaseSkinsName.BlueRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
        
        

    }
    for (let i = 0 ; i < CaseSkinsSrc.PurpleRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.PurpleRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(107,72,195)`
        let NameArray = CaseSkinsName.PurpleRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CaseSkinsSrc.PinkRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.PinkRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(166, 60, 174)`
        let NameArray = CaseSkinsName.PinkRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CaseSkinsSrc.RedRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.RedRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(181,73,64)`
        let NameArray = CaseSkinsName.RedRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CaseSkinsSrc.SpecialRarity.length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.SpecialRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(199,160,9)`
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = "★Rare Special Item★"
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = ""
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




function setPrizeStyles(index , PrizeImage , PrizeRarity){
    RandomGrayItem = Math.floor(Math.random() * CaseSkinsSrc.GrayRarity.length)
    RandomBlueItem = Math.floor(Math.random() * CaseSkinsSrc.BlueRarity.length);
    RandomPurpleItem = Math.floor(Math.random() * CaseSkinsSrc.PurpleRarity.length);
    RandomPinkItem = Math.floor(Math.random() * CaseSkinsSrc.PinkRarity.length)
    RandomRedItem = Math.floor(Math.random() * CaseSkinsSrc.RedRarity.length);
    

const PrizeRarity_Weapon = document.querySelectorAll(".PrizeRarity-Weapon")
const PrizeRarity_SkinName = document.querySelectorAll(".PrizeRarity-SkinName")

    if (CurrentRarity == "Gray"){

    PrizeRarity.style.backgroundColor = "Gray"
    let NameArray = CaseSkinsName.GrayRarity[RandomGrayItem].split("|");
    PrizeRarity_Weapon[index] = NameArray[0];
    PrizeRarity_SkinName[index] = NameArray[1];
    PrizeImage.src = CaseSkinsSrc.GrayRarity[RandomGrayItem]

} else if (CurrentRarity == "Blue") {

    PrizeRarity.style.backgroundColor = `rgb(61,87,195)`
    let NameArray = CaseSkinsName.BlueRarity[RandomBlueItem].split("|");
    
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
    PrizeImage.src = CaseSkinsSrc.BlueRarity[RandomBlueItem]
 
} else if (CurrentRarity == "Purple") {

    PrizeRarity.style.backgroundColor = `rgb(107,72,195)`
    let NameArray = CaseSkinsName.PurpleRarity[RandomPurpleItem].split("|");
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
    PrizeImage.src = CaseSkinsSrc.PurpleRarity[RandomPurpleItem]

} else if (CurrentRarity == "Pink") {

    PrizeRarity.style.backgroundColor = `rgb(166, 60, 174)`
    let NameArray = CaseSkinsName.PinkRarity[RandomPinkItem].split("|");
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
    PrizeImage.src = CaseSkinsSrc.PinkRarity[RandomPinkItem]

} else if (CurrentRarity == "Red") {

    PrizeRarity.style.backgroundColor = `rgb(181,73,64)`
    let NameArray = CaseSkinsName.RedRarity[RandomRedItem].split("|");
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
    PrizeImage.src = CaseSkinsSrc.RedRarity[RandomRedItem]

} else if (CurrentRarity == "Special") {

    PrizeRarity.style.backgroundColor = `rgb(199,160,9)`
    PrizeRarity.textContent = CaseSkinsName.SpecialRarity[0]
    PrizeImage.src = CaseSkinsSrc.SpecialRarity[0]

}

}




function CardRollAnimation(){
    CaseCards.classList.add('RollAnimation');
   for (let i = 0 ; i < Cards.length ; i++){
       if (Cards[i] == Winner_Card){
           RandomRarityFunction()

           setPrizeStyles(i,CardsPrizeIMG[i] , CardsRarityDOM[i])
           
           Winner_Card.Rarity = CurrentRarity
           console.log("Cards Rarity is :" + CurrentRarity + " " + RandomRarityNumber)
       } else {
          RandomRarityFunction()
          setPrizeStyles(i,CardsPrizeIMG[i] , CardsRarityDOM[i])
   
       }
    }
    RandomPixel = Math.floor(Math.random() * (CardWidth - (CardWidth/10)));
    
    CaseCards.style.transform = `translate(-${(CardWidth*24.5 + CardWidth/14*23 + RandomPixel)}px)`

   }


CardRollAnimation()
}

ContinueButton.addEventListener("click", () =>{
    
    PrizeContainer.style.display = `none`
    CaseList.style.display = `flex`
    OpeningCaseContainer.style.display = `none`
})

function OpenButtonFunction(){
    console.log("gay")
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
                let Winner_Card_Name_Array = Winner_Card_Name.textContent.split("\n")
                PrizeContainerName.textContent = Winner_Card_Name_Array[1] + " | " + Winner_Card_Name_Array[2]
                let W_RGB = Winner_Card_Name.style.backgroundColor.split(/[\s,()]+/)
                PrizeContainer.style.background =`linear-gradient(0deg, rgba(38,38,38,.9) 0%, rgba(38,40,43,1) 7%, rgba(32,32,32,1) 18%, rgba(${(W_RGB[1])},${(W_RGB[2]-0)},${(W_RGB[3])}) 80%, rgba(${(W_RGB[1]-0)},${(W_RGB[2]-0)},${(W_RGB[3]-0)}) 97%, rgba(${(W_RGB[1]-0)},${(W_RGB[2]-0)},${(W_RGB[3]-0)},0.95) 100%) ,
                    repeating-linear-gradient(
                    120deg,
                    rgb(255, 255, 255,1) 0px,
                    rgba(255,255,255,0) 4px,
                    rgba(255, 255, 255, 0) 4.5px
                  )`
    
    
    
            },6250);
    
    
    
}

OpenButton.addEventListener("click", () =>{
OpenButtonFunction()
  
}, {once : true})

 }

// api url
const api_url = 
      "caseData.json";
  
// Defining async function
fetch(api_url)
.then(function (response) {
    return response.json();
})
    
.then( function (data){

 

for (let i = 0 ; i < Cases.length ; i ++) {
    Cases[i].addEventListener("click" ,() => {

        CaseList.style.display = `none`
        OpeningCaseContainer.style.display = `flex`
        appFunction(data, i)
        

    })
}
   
});
// Calling that async function

