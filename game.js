const OpenButton = document.querySelector(".Open-Button")
const CaseCards = document.querySelector(".Case-Container")
const Winner_Card = document.querySelector(".Winner_Card")
const Cards = document.querySelectorAll(".Case-Card")
const CardsRarityDOM = document.querySelectorAll(".PrizeRarity")
const CardsPrizeIMG = document.querySelectorAll(".PrizeIMG img")
const CardWidth = Winner_Card.offsetWidth;

let RandomPixel;

//FIRST CASE

const BlueItemsSRC = [
"PNGS/FirstCase/BLUE_mp7_hy_skulls.png",
"PNGS/FirstCase/BLUE_aug_hy_feathers_aug.png",
"PNGS/FirstCase/BLUE_sg556_so_purple.png"
];

const BlueItemsNames = [
"MP7 | Skulls",
"AUG | Wings",
"SG 553 | Ultraviolet"
]

const PurpleItemsSRC = [
"PNGS/FirstCase/PURPLE_glock_am_dragon_glock.png",
"PNGS/FirstCase/PURPLE_m4a1_silencer_am_zebra_dark.png",
"PNGS/FirstCase/PURPLE_usp_silencer_am_zebra_dark.png"
];

const PurpleItemsNames = [
    "Glock-18 | Dragon Tattoo",
    "M4A1-S | Dark Water",
    "USP-S | Dark Water"
    ]

const PinkItemsSRC = [
"PNGS/FirstCase/PINK_ak47_aq_oiled.png",
"PNGS/FirstCase/PINK_deagle_aa_vertigo.png"
];

const PinkItemsNames = [
    "AK-47 | Case Hardened",
    "Desert Eagle | Hypnotic"
    ]

const RedItemsSRC = [
"PNGS/FirstCase/RED_awp_am_lightning_awp.png"
];


const RedItemsNames = [
    "AWP | Lightning Strike"
    ]


const SpecialItemSRC = [
    "PNGS/FirstCase/Yellow_Special_Item.png"
]

const SpecialItemName = [
    "Spacial Item"
    ]


//Rarities
const RaritiesArray = ["Blue" , "Purple" , "Pink" , "Red" , "Yellow"];
let Rarity;
function RandomPrize(x) {

let RandomRarityNumber = Math.floor(Math.random() * 10000) + 1;
if (RandomRarityNumber > 2000){
    Rarity = RaritiesArray[0];
} else if (RandomRarityNumber > 400 && RandomRarityNumber <=2000){
    Rarity = RaritiesArray[1];
} else if (RandomRarityNumber > 80 && RandomRarityNumber <=400){
    Rarity = RaritiesArray[2];
} else if (RandomRarityNumber > 25 && RandomRarityNumber <=80){
    Rarity = RaritiesArray[3];
} else if (RandomRarityNumber > 0 && RandomRarityNumber <=25){
    Rarity = RaritiesArray[4];
}
}


let RandomBlueItem;
let RandomPurpleItem;
let RandomPinkItem;
let RandomRedItem;



function setBackgroundColor(item , item2){

    RandomBlueItem = Math.floor(Math.random() * BlueItemsSRC.length);
    RandomPurpleItem = Math.floor(Math.random() * PurpleItemsSRC.length);
    RandomPinkItem = Math.floor(Math.random() * PinkItemsSRC.length)
    RandomRedItem = Math.floor(Math.random() * RedItemsSRC.length);
    



    if (Rarity == RaritiesArray[0]){
   item.style.backgroundColor = RaritiesArray[0]
   item.textContent = BlueItemsNames[RandomBlueItem]
    item2.src = BlueItemsSRC[RandomBlueItem]
} else if (Rarity == RaritiesArray[1]) {
    item.style.backgroundColor = `rgb(168, 79, 168)`
    item.textContent = PurpleItemsNames[RandomPurpleItem]
    item2.src = PurpleItemsSRC[RandomPurpleItem]
} else if (Rarity == RaritiesArray[2]) {
    item.style.backgroundColor = `rgb(255, 0, 234)`
    item.textContent = PinkItemsNames[RandomPinkItem]
    item2.src = PinkItemsSRC[RandomPinkItem]
} else if (Rarity == RaritiesArray[3]) {
    item.style.backgroundColor = RaritiesArray[3]
    item.textContent = RedItemsNames[RandomRedItem]
    item2.src = RedItemsSRC[RandomRedItem]
} else if (Rarity == RaritiesArray[4]) {
    item.style.backgroundColor = RaritiesArray[4]
    item.textContent = SpecialItemName[0]
    item2.src = SpecialItemSRC[0]
}
}


function CardRollAnimation(){
     CaseCards.classList.add('RollAnimation');
    for (let i = 0 ; i < Cards.length ; i++){
        if (Cards[i] == Winner_Card){
            RandomPrize(Cards[i])

            setBackgroundColor(CardsRarityDOM[i],CardsPrizeIMG[i])
            console.log("Cards Rarity is :" + Rarity)
        } else {
           RandomPrize(Cards[i])
           setBackgroundColor(CardsRarityDOM[i],CardsPrizeIMG[i])
         //Cards[i].style.backgroundColor = `rgb(${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))},${(Math.floor(Math.random() * 256))})`
        }
     }
     RandomPixel = Math.floor(Math.random() * (CardWidth - (CardWidth/20)));
     CaseCards.style.transform = `translate(-${(CardWidth*19.5 + (CardWidth/14)*9) + RandomPixel}px)`
    
    }







OpenButton.addEventListener("click", () =>{

        CaseCards.classList.remove('RollAnimation');
        CaseCards.style.transform = `translate(0px)`
        setTimeout(100)
        setTimeout(function(){
    RandomPrize(Winner_Card)
    
    CardRollAnimation()
        },50);


})