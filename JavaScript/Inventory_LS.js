const Inventory_Grid = document.querySelector(".Inventory_Skins_Grid")
const Inventory_Cases_Grid = document.querySelector(".Inventory_Cases_Grid")
const Invetory_Item_Model = document.querySelector(".Inventory_Item")
const Rarity_Colors = [
    "rgb(61,87,195)",
    "rgb(107,72,195)",
    "rgb(166, 60, 174)",
    "rgb(181,73,64)",
]
const Rarity_Array = [
    "Mil-Spec",
    "Restricted",
    "Classified",
    "Covert",
    "Rare Special Item"
]
const Item_Price_LinkModel = "https://steamcommunity.com/market/priceoverview/?country=DE&currency=3&appid=730&market_hash_name="
function Update_Inventory () {
    let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"))
for (let i in Current_Inventory){
    var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true)
    Inventory_Grid.prepend(Inventory_Item_Cloned)
    const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(".Inventory_Item_Rarity")

    Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src = Current_Inventory[i].png;

    let ItemNameArray = (Current_Inventory[i].name).split(" | ")
    Inventory_Item_Cloned.ItemName = Current_Inventory[i].name;



    Inventory_Item_Rarity.querySelector(".Inventory_Item_Weapon").textContent = ItemNameArray[0]
    Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent = ItemNameArray[1]
    if (Current_Inventory[i].Rarity == Rarity_Array[0]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
    if (Current_Inventory[i].Rarity == Rarity_Array[1]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
    if (Current_Inventory[i].Rarity == Rarity_Array[2]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
    if (Current_Inventory[i].Rarity == Rarity_Array[3] ||
    Current_Inventory[i].Rarity == Rarity_Array[4]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];
    
}}
function Inventory (){
    let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"))
    for (let i in Current_Inventory){

        if (i > Inventory_Grid.children.length - 1){
            console.log("new item")


            var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true)
            Inventory_Grid.prepend(Inventory_Item_Cloned)
            const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(".Inventory_Item_Rarity")
        
            Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src = Current_Inventory[i].png;
        
            let ItemNameArray = (Current_Inventory[i].name).split(" | ")
            Inventory_Item_Cloned.ItemName = Current_Inventory[i].name;
            
            Inventory_Item_Rarity.querySelector(".Inventory_Item_Weapon").textContent = ItemNameArray[0]
            Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent = ItemNameArray[1]
            if (Current_Inventory[i].Rarity == Rarity_Array[0]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
            if (Current_Inventory[i].Rarity == Rarity_Array[1]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
            if (Current_Inventory[i].Rarity == Rarity_Array[2]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
            if (Current_Inventory[i].Rarity == Rarity_Array[3] ||
            Current_Inventory[i].Rarity == Rarity_Array[4]) Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];



        }

    }

}
Update_Inventory();
export { Inventory };



const Inventory_Buttons = document.querySelectorAll(".Inventory-Selector button")
for (let i = 0 ; i < Inventory_Buttons.length ; i ++) {
    Inventory_Buttons[i].onclick = () =>{
        Inventory_Buttons[i].classList.add("Inventory-Selector-Button-Active")
        if (i === 1){
        Inventory_Buttons[i-1].classList.remove("Inventory-Selector-Button-Active")
        Inventory_Cases_Grid.style.display = "grid";
        Inventory_Grid.style.display = "none"
        console.log("Cases")
        }
        if (i === 0){
            Inventory_Buttons[i+1].classList.remove("Inventory-Selector-Button-Active")
            Inventory_Cases_Grid.style.display = "none";
            Inventory_Grid.style.display = "grid"
            console.log("Skins")
            }
    }
}

const Inventory_Skins = document.querySelectorAll(".Inventory_Item")

for (let i = 0 ; i < Inventory_Skins.length; i++){
    Inventory_Skins[i].addEventListener("mouseenter", () => {
        console.log(Inventory_Skins[i].ItemName)
        fetch
    });
}





