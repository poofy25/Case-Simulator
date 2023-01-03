//Consumer Grade (White)
//Industrial Grade (Light Blue)
//Mil-Spec (Blue)
//Restricted (Purple)
//Classified (Pink)
//Covert (Red)
//Rare Special Items (Yellow/Special)


import {CaseData} from './CaseData.js';
console.log(CaseData)

//CASE DOMS
const OpenButton = document.querySelector(".Open-Button")
const CaseCards = document.querySelector(".Case-Container")
const Winner_Card = document.querySelector(".Winner_Card")
const Winner_CardIMG = document.querySelector(".Winner_Card img")
const Winner_Card_Name = document.querySelector(".Winner_Card .PrizeRarity")
const Cards = document.querySelectorAll(".Case-Card")
const CardsRarityDOM = document.querySelectorAll(".PrizeRarity")
const CardsPrizeIMG = document.querySelectorAll(".PrizeIMG img")

//CASE SKINS DOMS
const ChanceSkins = document.querySelectorAll(".SkinItem")
const ChanceCardsRarityDOM = document.querySelectorAll(".PrizeRarity-Chance")
const ChanceCardsPrizeIMG = document.querySelectorAll(".PrizeIMG-Chance img")
const ChanceCardsRarityWeaponName = document.querySelectorAll(".SkinItem-Chance-Weapon");
const ChanceCardsRaritySkinName = document.querySelectorAll(".SkinItem-Chance-SkinName");

//PRIZE CONTAINER DOMS
const PrizeContainer = document.querySelector(".PrizeContainer")
const ContinueButton = document.querySelector(".ContinueButton")
const PrizeContainerIMG = document.querySelector(".PrizeContainerIMG img")
const PrizeContainerName = document.querySelector(".PrizeContainerName")

//CASE LIST DOMS
const CaseGrid = document.querySelector(".CasesGrid")
const OpeningCaseContainer = document.querySelector(".OpeningCaseContainer")


// RANDOM PIXEL VALUE FOR OPENING CASE
let RandomPixel;
//ODDS MULTIPLIYING VALUE FOR CASES (default value is 1)
let OddsMultiplyingValue = 1;

// INVENTORY VARIABLES

import {Inventory} from './Inventory_LS.js';


//LOADING CASES
const CaseGrid_Case_Model = document.querySelector(".CasesGrid_Case")
for (let i in CaseData){
    var CaseGrid_Case_Cloned = CaseGrid_Case_Model.cloneNode(true)

    CaseGrid.append(CaseGrid_Case_Cloned)

    CaseGrid_Case_Cloned.querySelector(".CasesGrid_Case_IMG img").src = CaseData[i].image_url
    CaseGrid_Case_Cloned.querySelector(".CasesGrid_Case_Rarity_Name").textContent = CaseData[i].name
}








//CALLING THE FUNCTION WHEN A CASE IS SELECTED
 function appFunction (CaseNumber) {
    console.log(CaseNumber)
    let CurrentCase = CaseData[CaseNumber].content
    let CollectionName = CaseData[CaseNumber].name
console.log(CollectionName)
console.log(CurrentCase['Mil-Spec Skins'])
console.log(CurrentCase['Restricted Skins'])
   //CARD WIDTH
    const CardWidth = Winner_Card.offsetWidth;


//LOADING CASE SKINS
function loadChanceSkins () {


var TotalSkins = 0;

//NAMING AND STYLING EACH CARD
for (let i = 0 ; i < 1 ; i++){
    for (let i = 0 ; i < CurrentCase['Consumer Grade Skins'].length; i++){
        TotalSkins = TotalSkins + 1;
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.GrayRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = "Gray"
        let NameArray = CaseSkinsName.GrayRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    };
    for (let i = 0 ; i < CurrentCase['Industrial Grade Skins'].length; i++){
        TotalSkins = TotalSkins + 1;
        ChanceCardsPrizeIMG[TotalSkins-1].src = CaseSkinsSrc.GrayRarity[i]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = "Gray"
        let NameArray = CaseSkinsName.GrayRarity[i].split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    };
    for (let i = 0 ; i < CurrentCase['Mil-Spec Skins'].length; i++){
        console.log("CMON")
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = Object.values(CurrentCase['Mil-Spec Skins'][i].wears)[0]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(61,87,195)`
        let NameArray = CurrentCase['Mil-Spec Skins'][i].name.split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CurrentCase['Restricted Skins'].length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = Object.values(CurrentCase['Restricted Skins'][i].wears)[0]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(107,72,195)`
        let NameArray = CurrentCase['Restricted Skins'][i].name.split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CurrentCase['Classified Skins'].length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = Object.values(CurrentCase['Classified Skins'][i].wears)[0]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(166, 60, 174)`
        let NameArray = CurrentCase['Classified Skins'][i].name.split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < CurrentCase['Covert Skins'].length; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = Object.values(CurrentCase['Covert Skins'][i].wears)[0]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(181,73,64)`
        let NameArray = CurrentCase['Covert Skins'][i].name.split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
    }
    for (let i = 0 ; i < 1; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = ""
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(199,160,9)`
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = "★Rare Special Item★"
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = ""
    }
}
//REMOVING UNNEEDED CARDS
for (let i = 0 ; i < ChanceSkins.length ; i++){
    if (i >= TotalSkins){
        ChanceSkins[i].style.display = `none`
    }
    if (i < TotalSkins){
        ChanceSkins[i].style.display = `block`
    }

 }

}
loadChanceSkins()



//OPENING CASE FUNTION
function WorkingCase(Case){

let CurrentRarity;
let RandomRarityNumber

let RandomGrayItem;
let RandomBlueItem;
let RandomPurpleItem;
let RandomPinkItem;
let RandomRedItem;



//ODDS FUNCTION 

function RandomRarityFunction() {

//ODDS FROM JSON FILE
const GrayOdds = Number(CaseOdds.GrayRarity.split("-"));
const BlueOdds = CaseOdds.BlueRarity.split("-");
const PurpleOdds = CaseOdds.PurpleRarity.split("-");
const PinkOdds = CaseOdds.PinkRarity.split("-");
const RedOdds = CaseOdds.RedRarity.split("-");
const SpecialOdds = CaseOdds.SpecialRarity.split("-");



let BlueOddsNumber = Number(BlueOdds[0]) * OddsMultiplyingValue;
//CALCULATING ODDS
if (CaseRaritiesArray[0] == "Blue"){

if (BlueOddsNumber > Number(BlueOdds[1])){
    BlueOddsNumber = 10000;
}
    RandomRarityNumber = Math.floor(Math.random() * 10000) + 1;
    if (RandomRarityNumber > BlueOddsNumber && RandomRarityNumber <= BlueOdds[1]){
        CurrentRarity = CaseRaritiesArray[0]
    } else if (RandomRarityNumber > Number(PurpleOdds[0]) * OddsMultiplyingValue && RandomRarityNumber <= Number(BlueOdds[0]) * OddsMultiplyingValue){
        CurrentRarity = CaseRaritiesArray[1]
    } else if (RandomRarityNumber > Number(PinkOdds[0]) * OddsMultiplyingValue && RandomRarityNumber <= Number(PurpleOdds[0]) * OddsMultiplyingValue){
        CurrentRarity = CaseRaritiesArray[2]
    } else if (RandomRarityNumber > Number(RedOdds[0]) * OddsMultiplyingValue && RandomRarityNumber <= Number(PinkOdds[0]) * OddsMultiplyingValue){
        CurrentRarity = CaseRaritiesArray[3]
    } else if (RandomRarityNumber > SpecialOdds[0] && RandomRarityNumber <= Number(RedOdds[0]) * OddsMultiplyingValue){
        CurrentRarity = CaseRaritiesArray[4]
    }

} else if (CaseRaritiesArray[0] == Gray){
       console.log("NEEDS TO BE DONE")
}

}

//STATTRACK ITEM FUNCTION
let StatTrack;
function StatTrackFunction (SkinName){

let StatTrackRandomNumber = Math.floor(Math.random() * 10) + 1;
if (StatTrackRandomNumber == 1){
  
    SkinName.textContent = "StatTrack™ " + SkinName.textContent
    
}


}

//SETTING CARDS STYLE IN CASE ROLLERCOSTER
function setPrizeStyles(index , PrizeImage , PrizeRarity){
    //RANDOM ITEM FROM THE LENGHT OF RARITY IN A CASE
    RandomGrayItem = Math.floor(Math.random() * CaseSkinsSrc.GrayRarity.length)
    RandomBlueItem = Math.floor(Math.random() * CaseSkinsSrc.BlueRarity.length);
    RandomPurpleItem = Math.floor(Math.random() * CaseSkinsSrc.PurpleRarity.length);
    RandomPinkItem = Math.floor(Math.random() * CaseSkinsSrc.PinkRarity.length)
    RandomRedItem = Math.floor(Math.random() * CaseSkinsSrc.RedRarity.length);
    
//CARD NAME DOMS
const PrizeRarity_Weapon = document.querySelectorAll(".PrizeRarity-Weapon")
const PrizeRarity_SkinName = document.querySelectorAll(".PrizeRarity-SkinName")
//SETTING STYLES
    if (CurrentRarity == "Gray"){

    PrizeRarity.style.backgroundColor = "Gray"
    let NameArray = CaseSkinsName.GrayRarity[RandomGrayItem].split("|");
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
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
    PrizeRarity_Weapon[index].textContent = CaseSkinsName.SpecialRarity[0];
    PrizeRarity_SkinName[index].textContent = "";
    PrizeImage.src = CaseSkinsSrc.SpecialRarity[0]

}
//CALLING STATTRACK FUNCTION
StatTrackFunction(PrizeRarity_Weapon[index]);
}

//CASE ROLLERCOSTER ANIMATION FUNCTION
function CardRollAnimation(){

    //ADDING ANIMATION
    CaseCards.classList.add('RollAnimation');

    //CALLING RANDOM RARITY FUNCTION AND STYLING FUNTIONG FOR EACH CARD IN THE ROLLERCOSTER
   for (let i = 0 ; i < Cards.length ; i++){

    RandomRarityFunction()
    setPrizeStyles(i,CardsPrizeIMG[i] , CardsRarityDOM[i])

    //IF THE CARD IS THE WINNING ONE
       if (Cards[i] == Winner_Card){

           Winner_Card.Rarity = CurrentRarity
           console.log("Cards Rarity is :" + CurrentRarity + " " + RandomRarityNumber)

       }
       
    }

    //GETTING A RANDOM PIXEL VALUE FROM THE CURRENT ROLLERCOSTER CARD WIDTH
    RandomPixel = Math.floor(Math.random() * (CardWidth - (CardWidth/10)));
    
    //MOVING THE ROLLERCOSTER
    CaseCards.style.transform = `translate(-${(CardWidth*24.5 + CardWidth/14*23 + RandomPixel)}px)`

   }
CardRollAnimation()
}

//CONTINUE BUTTON FOR PRIZE DOM
ContinueButton.addEventListener("click", () =>{

    PrizeContainer.style.display = `none`
    CaseList.style.display = `grid`
    OpeningCaseContainer.style.display = `none`

})

//CASE OPEN BUTTON FUNCTION
function OpenButtonFunction(){
    //HIDING OPEN BUTTON
    OpenButton.style.visibility = `hidden`
    
    //PLAYING OPEN CASE SOUND
      let OpeningSound =new Audio("Audio/CSGO Case Opening Sound Effect.mp3")
        OpeningSound.play()
     
        //REMOVING THE ANIMATION CLASS AND MOVING THE ROLLERCOSTER TO THE BEGGINING
            CaseCards.classList.remove('RollAnimation');
            CaseCards.style.transform = `translate(0px)`
           
            //CALLING THE OPEN CASE FUNCTION
            setTimeout(function(){

                WorkingCase(data.Cases[CaseNumber])
                
            },200);
      
            //AFTER OPENNING THE CASE, THE PRIZE IMAGE SHOWS UP
            setTimeout(function(){

                OpenButton.style.visibility = `visible`
                PrizeContainer.style.display = `flex`

                PrizeContainerIMG.src = Winner_CardIMG.src;
                let Winner_Card_Name_Array = Winner_Card_Name.textContent.split("\n");
                let ItemName =  Winner_Card_Name_Array[1].replace(/\s+/,' ').trim() + " | " + Winner_Card_Name_Array[2].replace(/\s+/,' ').trim();
                PrizeContainerName.textContent = ItemName;

                let W_RGB = Winner_Card_Name.style.backgroundColor.split(/[\s,()]+/)
                PrizeContainer.style.background =`linear-gradient(0deg, rgba(38,38,38,.9) 0%, rgba(38,40,43,1) 7%, rgba(32,32,32,1) 18%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)}) 80%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)}) 97%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)},0.95) 100%) ,
                    repeating-linear-gradient(
                    120deg,
                    rgb(255, 255, 255,1) 0px,
                    rgba(255,255,255,0) 4px,
                    rgba(255, 255, 255, 0) 4.5px
                  )`
                  function SaveItem () {

                //localStorage.clear()

                   //CURRENT ITEM OBJECT
                    let Item = {
                        id: crypto.randomUUID(),
                        name: ItemName,
                        png:Winner_CardIMG.src,
                        Rarity: Winner_Card.Rarity,
                        CollectionName: CollectionName
                            }
                
                        
                    let Invetory_Items;
                    let Item_deserialized
                   
                    //IF THERE IS NO Inventory_Items Object then create one
                    if ( localStorage.getItem('Inventory_Items') === null){
                        Invetory_Items = [];
                    } else {
                        Item_deserialized = JSON.parse(localStorage.getItem("Inventory_Items"))
                
                        Invetory_Items = Item_deserialized
                
                    }
                
                    //ADD CURRENT ITEM TO THE INVENTORY ARRAY
                Invetory_Items.push(Item)
                              
                let Item_serialized = JSON.stringify(Invetory_Items)
                

                //UPDATE THE INVENTORY
                    localStorage.setItem(`Inventory_Items`, Item_serialized)
                    Inventory();
                  }
 
    SaveItem()
            },6250);
    
    
    
}

//CALLING OPEN CASE BUTTON FUNCTION ON CLICK
OpenButton.addEventListener("click", () =>{
OpenButtonFunction()
}, {once : true})

}




const CaseGrid_Case = document.querySelectorAll(".CasesGrid_Case")
//CHOSING A CASE FROM THE CASE GRID
for (let i = 0 ; i < CaseGrid.children.length ; i ++) {
    
    CaseGrid.children[i].addEventListener("click" ,() => {

console.log(CaseGrid.children[i])
        CaseGrid.style.display = `none`
        OpeningCaseContainer.style.display = `flex`
        appFunction(i)
        

    })
}




// CASE DATA JSON PATH
/*const api_url = "caseData.json";
  
// FETCHING THE DATA
fetch(api_url)
.then(function (response) {
    return response.json();
})
  
//DOING THINGS WITH THE DATA
.then( function (data){

    //MULTIPLIER SETTING
const MultiplierButton = document.querySelector(".RarityMultiplaierButton")
MultiplierButton.onclick = function () {

    OddsMultiplyingValue = document.querySelector(".RarityMuliplaierInput").value

    if (OddsMultiplyingValue == ""){
        OddsMultiplyingValue = 1;
    }

    console.log(OddsMultiplyingValue)

}
   


});*/

