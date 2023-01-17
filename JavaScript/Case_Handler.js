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
const CaseGrid = document.querySelector(".Inventory_Cases_Grid")
const OpeningCaseContainer = document.querySelector(".OpeningCaseContainer")


// RANDOM PIXEL VALUE FOR OPENING CASE
let RandomPixel;
//ODDS MULTIPLIYING VALUE FOR CASES (default value is 1)
let OddsMultiplyingValue = 1;

// INVENTORY VARIABLES

import {Update_Inventory} from './Inventory_LS.js';


//LOADING CASES
const CaseGrid_Case_Model = document.querySelector(".CasesGrid_Case")
for (let i in CaseData){
    var CaseGrid_Case_Cloned = CaseGrid_Case_Model.cloneNode(true)

    CaseGrid.append(CaseGrid_Case_Cloned)

    CaseGrid_Case_Cloned.querySelector(".CasesGrid_Case_IMG img").src = CaseData[i].image_url
    CaseGrid_Case_Cloned.querySelector(".CasesGrid_Case_Rarity_Name").textContent = CaseData[i].name
}


//CALLING THE FUNCTION WHEN A CASE IS SELECTED
 function Open_Case_Function (CaseNumber) {

    let Current_Case_Data = CaseData[CaseNumber].content
    let CollectionName = CaseData[CaseNumber].name
    console.log(CollectionName)

   //CARD WIDTH
    const CardWidth = Winner_Card.offsetWidth;

    let RandomKnife;
    let STT_Skin_Rarity ;
let STT_Random_Item_Index;
    function Random_Knife_Function(){
    RandomKnife = Math.floor(Math.random() * Current_Case_Data['Rare Special Items'].length);
    console.log(RandomKnife)
    }
//LOADING CASE SKINS
function Load_Case_Skins () {

var TotalSkins = 0;

//NAMING AND STYLING EACH CARD
for (let i = 0 ; i < 1 ; i++){

 function Styling_Skin_Card_Function (Skin_Rarity_Name , index , background_Color){
   
        TotalSkins = TotalSkins + 1

        ChanceCardsPrizeIMG[TotalSkins-1].src = Object.values(Current_Case_Data[Skin_Rarity_Name][index].wears)[0]
        let NameArray = Current_Case_Data[Skin_Rarity_Name][index].name.split("|");
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = NameArray[0]
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = NameArray[1]
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = background_Color
    
 }
    for (let i = 0 ; i < Current_Case_Data['Mil-Spec Skins'].length; i++){
        Styling_Skin_Card_Function('Mil-Spec Skins' , i , `rgb(61,87,195)`)
    }
    for (let i = 0 ; i < Current_Case_Data['Restricted Skins'].length; i++){
        Styling_Skin_Card_Function('Restricted Skins' , i , `rgb(107,72,195)`)
    }
    for (let i = 0 ; i < Current_Case_Data['Classified Skins'].length; i++){
        Styling_Skin_Card_Function('Classified Skins' , i , `rgb(166, 60, 174)`)
    }
    for (let i = 0 ; i < Current_Case_Data['Covert Skins'].length; i++){
        Styling_Skin_Card_Function('Covert Skins' , i , `rgb(181,73,64)`)
    }
    for (let i = 0 ; i < 1; i++){
        TotalSkins = TotalSkins + 1
        ChanceCardsPrizeIMG[TotalSkins-1].src = "PNGS/Yellow_Special_Item.png"
        ChanceCardsRarityDOM[TotalSkins-1].style.backgroundColor = `rgb(199,160,9)`
        ChanceCardsRarityWeaponName[TotalSkins-1].textContent = "★Rare Special Item★"
        ChanceCardsRaritySkinName[TotalSkins-1].textContent = ""
    }
}
//REMOVING UNNEEDED CARDS
for (let i = 0 ; i < ChanceSkins.length ; i++){
    if (i >= TotalSkins) ChanceSkins[i].style.display = `none`
    
    if (i < TotalSkins) ChanceSkins[i].style.display = `block`

 }

}
Load_Case_Skins()



//OPENING CASE FUNTION
function WorkingCase(){

let CurrentRarity;
let RandomRarityNumber
const RaritiesArray = [
    "Mil-Spec",
    "Restricted",
    "Classified",
    "Covert",
    "Rare Special Item"
]
const Current_Case_Data_Rarities = [
    "Mil-Spec Skins",
    "Restricted Skins",
    "Classified Skins",
    "Covert Skins",
    "Rare Special Items"
]
let Random_MilSpec_Item;
let Random_Restricted_Item;
let Random_Classified_Item;
let Random_Covert_Item;


//ODDS FUNCTION 

function RandomRarityFunction() {

//ODDS
const MaxOdds = 10000;
const BlueOdds = 2000;
const PurpleOdds = 400;
const PinkOdds = 80;
const RedOdds = 25;
const MinOdds = 0;




    RandomRarityNumber = Math.floor(Math.random() * 10000) + 1;
    if (RandomRarityNumber > BlueOdds * OddsMultiplyingValue && RandomRarityNumber <= MaxOdds) return CurrentRarity = RaritiesArray[0]
    if (RandomRarityNumber > PurpleOdds * OddsMultiplyingValue && RandomRarityNumber <= BlueOdds * OddsMultiplyingValue) return CurrentRarity = RaritiesArray[1]
    if (RandomRarityNumber > PinkOdds * OddsMultiplyingValue && RandomRarityNumber <= PurpleOdds * OddsMultiplyingValue) return  CurrentRarity = RaritiesArray[2]
    if (RandomRarityNumber > RedOdds * OddsMultiplyingValue && RandomRarityNumber <= PinkOdds * OddsMultiplyingValue) return CurrentRarity = RaritiesArray[3]
    if (RandomRarityNumber > MinOdds && RandomRarityNumber <= RedOdds * OddsMultiplyingValue) return CurrentRarity = RaritiesArray[4]
        
    

}



//STATTRACK ITEM FUNCTION
function StatTrackFunction (SkinName){
let StatTrackRandomNumber = Math.floor(Math.random() * 10) + 1;

SkinName.parentElement.parentElement.StatTrack = "false";
if (StatTrackRandomNumber == 1) {
    SkinName.parentElement.parentElement.StatTrack = "true"
    if (CurrentRarity == RaritiesArray[4]) return ;
SkinName.textContent = "StatTrack™ "  +  SkinName.textContent;
}
}

//SETTING CARDS STYLE IN CASE ROLLERCOSTER
function setPrizeStyles(index , PrizeImage , PrizeRarity){
    //RANDOM ITEM FROM THE LENGHT OF RARITY IN A CASE
    Random_MilSpec_Item = Math.floor(Math.random() * Current_Case_Data['Mil-Spec Skins'].length);
    Random_Restricted_Item = Math.floor(Math.random() * Current_Case_Data['Restricted Skins'].length);
    Random_Classified_Item = Math.floor(Math.random() * Current_Case_Data['Classified Skins'].length)
    Random_Covert_Item = Math.floor(Math.random() * Current_Case_Data['Covert Skins'].length);
    
//CARD NAME DOMS
const PrizeRarity_Weapon = document.querySelectorAll(".PrizeRarity-Weapon")
const PrizeRarity_SkinName = document.querySelectorAll(".PrizeRarity-SkinName")
//SETTING STYLES

function Styling_Card (Skin_Rarity , background_Color , Random_Item_Index){
   let NameArray = Current_Case_Data[Skin_Rarity][Random_Item_Index].name.split("|");
    PrizeRarity.style.backgroundColor = background_Color 
    PrizeImage.src = Object.values(Current_Case_Data[Skin_Rarity][Random_Item_Index].wears)[0]
    PrizeRarity_Weapon[index].textContent = NameArray[0];
    PrizeRarity_SkinName[index].textContent = NameArray[1];
    STT_Skin_Rarity = Skin_Rarity
    STT_Random_Item_Index = Random_Item_Index
}

for (let i = 0; i < 1; i++){
if (CurrentRarity == RaritiesArray[0])  Styling_Card(Current_Case_Data_Rarities[0] , `rgb(61,87,195)` , Random_MilSpec_Item);
if (CurrentRarity == RaritiesArray[1])  Styling_Card(Current_Case_Data_Rarities[1] , `rgb(107,72,195)` , Random_Restricted_Item);
if (CurrentRarity == RaritiesArray[2])  Styling_Card(Current_Case_Data_Rarities[2] , `rgb(166, 60, 174)` , Random_Classified_Item);
if (CurrentRarity == RaritiesArray[3])  Styling_Card(Current_Case_Data_Rarities[3] , `rgb(181,73,64)` , Random_Covert_Item);
if (CurrentRarity == RaritiesArray[4]) {

    PrizeRarity.style.backgroundColor = `rgb(199,160,9)`
    PrizeImage.src = "PNGS/Yellow_Special_Item.png"
    PrizeRarity_Weapon[index].textContent = "★Rare Special Item★"
    PrizeRarity_SkinName[index].textContent = "";
    STT_Skin_Rarity = "Rare Special Items"
}
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
    setPrizeStyles( i , CardsPrizeIMG[i] , CardsRarityDOM[i] )

    //IF THE CARD IS THE WINNING ONE
       if (Cards[i] == Winner_Card){
        
           Winner_Card.Rarity = CurrentRarity
           console.log("Cards Rarity is :" + CurrentRarity + " " + RandomRarityNumber)
           let Winner_Card_Name_Array
           let ItemName
           let W_RGB

          if (CurrentRarity != "Rare Special Item"){
           PrizeContainerIMG.src = Winner_CardIMG.src;
           Winner_Card_Name_Array = Winner_Card_Name.textContent.split("\n");
           ItemName =  Winner_Card_Name_Array[1].replace(/\s+/,' ').trim() + " | " + Winner_Card_Name_Array[2].replace(/\s+/,' ').trim();
           PrizeContainerName.textContent = ItemName;

           W_RGB = Winner_Card_Name.style.backgroundColor.split(/[\s,()]+/)
           PrizeContainer.style.background =`linear-gradient(0deg, rgba(38,38,38,.9) 0%, rgba(38,40,43,1) 7%, rgba(32,32,32,1) 18%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)}) 80%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)}) 97%, rgba(${(W_RGB[1]-23)},${(W_RGB[2]-46)},${(W_RGB[3]-94)},0.95) 100%) ,
               repeating-linear-gradient(
               120deg,
               rgb(255, 255, 255,1) 0px,
               rgba(255,255,255,0) 4px,
               rgba(255, 255, 255, 0) 4.5px
             )`
            } else {
                Random_Knife_Function()
if (Current_Case_Data['Rare Special Items'][RandomKnife].can_be_stattrak === false){
    Winner_Card.StatTrack = "false"
    console.log("GAY")
}
                PrizeContainerIMG.src = Object.values(Current_Case_Data['Rare Special Items'][RandomKnife].wears)[0];
                Winner_Card_Name_Array = Current_Case_Data['Rare Special Items'][RandomKnife].name.replace("★ ", "");
                if (Winner_Card.StatTrack === "true"){
                    ItemName = "★ StatTrack™ " + Winner_Card_Name_Array;
                    console.log(ItemName)
                } else {
                    ItemName = "★ "  + Winner_Card_Name_Array;
                    console.log(ItemName)
                }
                
                PrizeContainerName.textContent = ItemName;
     
                W_RGB = Winner_Card_Name.style.backgroundColor.split(/[\s,()]+/)
                PrizeContainer.style.background =`linear-gradient(0deg, rgba(38,38,38,.9) 0%, rgba(38,40,43,1) 7%, rgba(32,32,32,1) 18%, rgb(121, 43, 27) 80%, rgb(121, 43, 27) 97%, rgba(121, 43, 27, 0.95) 100%) ,
                    repeating-linear-gradient(
                    120deg,
                    rgb(255, 255, 255,1) 0px,
                    rgba(255,255,255,0) 4px,
                    rgba(255, 255, 255, 0) 4.5px
                  )`


               }

    function SaveItem () {
    
                //localStorage.clear()

                   //CURRENT ITEM OBJECT
                    let Item = {
                        id: crypto.randomUUID(),
                        name: ItemName,
                        png:PrizeContainerIMG.src,
                        Rarity: Winner_Card.Rarity,
                        StatTrack:Winner_Card.StatTrack,
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
                    Update_Inventory();
                  }
    SaveItem()


       }
       
    }

    //GETTING A RANDOM PIXEL VALUE FROM THE CURRENT ROLLERCOSTER CARD WIDTH
    RandomPixel = Math.floor(Math.random() * (CardWidth - (CardWidth/5)));
    
    //MOVING THE ROLLERCOSTER
    CaseCards.style.transform = `translate(-${(CardWidth*24.5 + CardWidth/14*21 + RandomPixel)}px)`

   }
   
CardRollAnimation()
}
 
//CONTINUE BUTTON FOR PRIZE DOM
ContinueButton.onclick = () =>{

    PrizeContainer.style.display = `none`
    CaseGrid.style.display = `grid`

    function addAnimation (item){
        item.classList.remove("Animation")
      }
      setTimeout(() =>{  ChanceSkins.forEach(addAnimation)}, 100)
    OpeningCaseContainer.style.display = `none`

}

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

                WorkingCase()
                
            },200);
      
            //AFTER OPENNING THE CASE, THE PRIZE IMAGE SHOWS UP
            function ShowPrizeContainerFunction () {
                OpenButton.style.visibility = `visible`
                PrizeContainer.style.display = `flex`
            }
            const timeoutID = setTimeout(ShowPrizeContainerFunction,6250);
            
        //QUICK OPENING 
        var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutationRecord) {
 
                    clearTimeout(timeoutID);
                    ShowPrizeContainerFunction();
                    
                    PrizeContainer.style.display = `none`
                    OpeningSound.pause();
                    OpeningSound.currentTime = 0;
                   
                });    
        });
 
        const OpeningCaseContainer = document.querySelector(".OpeningCaseContainer")
        observer.observe(OpeningCaseContainer, { attributes : true, attributeFilter : ['style'] });
    
    
}

//CALLING OPEN CASE BUTTON FUNCTION ON CLICK
OpenButton.onclick = () =>{
OpenButtonFunction()
}

}



//CHOSING A CASE FROM THE CASE GRID
for (let i = 0 ; i < CaseGrid.children.length ; i ++) {
    
    CaseGrid.children[i].onclick = () => {

        if (ChanceSkins[0].classList.contains("Animation")){
            function removeAnimation (item){
                    item.classList.remove("Animation")
            }
           ChanceSkins.forEach(removeAnimation)
        }



        CaseGrid.style.display = `none`
        let time = 0;
        function addAnimation (item){
            time = time + 40;
            setTimeout(() =>{
                item.classList.add("Animation")
               }, time)
         
        }
        setTimeout(() =>{  ChanceSkins.forEach(addAnimation)}, 100)
      
        OpeningCaseContainer.style.display = `flex`
        Open_Case_Function(i)
        
    }
}



//MULTIPLIER SETTING
const MultiplierButton = document.querySelector(".RarityMultiplaierButton")
MultiplierButton.onclick = function () {
    OddsMultiplyingValue = document.querySelector(".RarityMuliplaierInput").value
    if (OddsMultiplyingValue == ""){
        OddsMultiplyingValue = 1;
    }
    console.log(OddsMultiplyingValue)
}