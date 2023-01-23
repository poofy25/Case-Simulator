import { CaseData } from "./CaseData.js";

const Inventory_Grid = document.querySelector(".Inventory_Skins_Grid");
const Inventory_Cases_Grid = document.querySelector(".Inventory_Cases_Grid");
const Invetory_Item_Model = document.querySelector(".Inventory_Item");
const Rarity_Colors = [
  "rgb(61,87,195)",
  "rgb(107,72,195)",
  "rgb(166, 60, 174)",
  "rgb(181,73,64)",
];
const Rarity_Array = [
  "Mil-Spec",
  "Restricted",
  "Classified",
  "Covert",
  "Rare Special Item",
];

function Show_Inventory() {
  let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"));
  for (let i in Current_Inventory) {
    var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true);
    Inventory_Grid.prepend(Inventory_Item_Cloned);
    const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(
      ".Inventory_Item_Rarity"
    );

    Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src =
      Current_Inventory[i].png;
    Inventory_Item_Cloned.Rarity = Current_Inventory[i].Rarity;
    Inventory_Item_Cloned.Collection_Name =
      Current_Inventory[i].Collection_Name;
    Inventory_Item_Cloned.Description = Current_Inventory[i].Description;
    Inventory_Item_Cloned.name = Current_Inventory[i].name;
    Inventory_Item_Cloned.png = Current_Inventory[i].png;

    let ItemNameArray = Current_Inventory[i].name.split(" | ");
    Inventory_Item_Cloned.ItemName = Current_Inventory[i].name;

    let WeaponItemName = ItemNameArray[0];
    if (ItemNameArray[0].length > 19) {
      WeaponItemName = WeaponItemName.slice(0, 19) + "...";
    }
    Inventory_Item_Rarity.querySelector(".Inventory_Item_Weapon").textContent =
      WeaponItemName;
    Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent =
      ItemNameArray[1];

    if (Current_Inventory[i].Rarity == Rarity_Array[0])
      Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
    if (Current_Inventory[i].Rarity == Rarity_Array[1])
      Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
    if (Current_Inventory[i].Rarity == Rarity_Array[2])
      Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
    if (
      Current_Inventory[i].Rarity == Rarity_Array[3] ||
      Current_Inventory[i].Rarity == Rarity_Array[4]
    )
      Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];
  }
}
function Update_Inventory() {
  let Current_Inventory = JSON.parse(localStorage.getItem("Inventory_Items"));
  for (let i in Current_Inventory) {
    if (i > Inventory_Grid.children.length - 1) {
      console.log("new item");

      var Inventory_Item_Cloned = Invetory_Item_Model.cloneNode(true);
      Inventory_Item_Cloned.Rarity = Current_Inventory[i].Rarity;
      Inventory_Item_Cloned.Description = Current_Inventory[i].Description;
      Inventory_Item_Cloned.Collection_Name =
        Current_Inventory[i].Collection_Name;
      Inventory_Item_Cloned.name = Current_Inventory[i].name;
      Inventory_Item_Cloned.png = Current_Inventory[i].png;

      Inventory_Grid.prepend(Inventory_Item_Cloned);
      const Inventory_Item_Rarity = Inventory_Item_Cloned.querySelector(
        ".Inventory_Item_Rarity"
      );

      Inventory_Item_Cloned.querySelector(".Inventory_Item_IMG img").src =
        Current_Inventory[i].png;

      let ItemNameArray = Current_Inventory[i].name.split(" | ");
      Inventory_Item_Cloned.ItemName = Current_Inventory[i].name;
      let WeaponItemName = ItemNameArray[0];
      if (ItemNameArray[0].length > 18) {
        WeaponItemName = WeaponItemName.slice(0, 18) + "...";
      }
      Inventory_Item_Rarity.querySelector(
        ".Inventory_Item_Weapon"
      ).textContent = WeaponItemName;
      Inventory_Item_Rarity.querySelector(".Inventory_Item_Skin").textContent =
        ItemNameArray[1];

      if (Current_Inventory[i].Rarity == Rarity_Array[0])
        Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[0];
      if (Current_Inventory[i].Rarity == Rarity_Array[1])
        Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[1];
      if (Current_Inventory[i].Rarity == Rarity_Array[2])
        Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[2];
      if (
        Current_Inventory[i].Rarity == Rarity_Array[3] ||
        Current_Inventory[i].Rarity == Rarity_Array[4]
      )
        Inventory_Item_Rarity.style.backgroundColor = Rarity_Colors[3];
    }
  }
}
Show_Inventory();
export { Update_Inventory };

let Inventory_Skins = document.querySelectorAll(".Inventory_Item");

const Inventory_Selector_Buttons = document.querySelectorAll(
  ".Inventory-Selector button"
);
for (let i = 0; i < Inventory_Selector_Buttons.length; i++) {
  Inventory_Skins = document.querySelectorAll(".Inventory_Item");
  Inventory_Selector_Buttons[i].onclick = () => {
    Inventory_Selector_Buttons[i].classList.add(
      "Inventory-Selector-Button-Active"
    );

    if (i === 1) {
      //Cases Button
      Inventory_Selector_Buttons[i - 1].classList.remove(
        "Inventory-Selector-Button-Active"
      );
      Inventory_Cases_Grid.style.display = "grid";
      Inventory_Grid.style.display = "none";
      Inventory_Item_Buttons.style.display = "none";
    }
    if (i === 0) {
      //Skins Button
      Inventory_Selector_Buttons[i + 1].classList.remove(
        "Inventory-Selector-Button-Active"
      );
      Inventory_Cases_Grid.style.display = "none";
      Inventory_Grid.style.display = "grid";
    }
  };
}

//INVENTORY ITEM INFO DOM
const Inventory_Item_Info = document.querySelector(".Inventory_Item_Info");
const Inventory_Item_Info_Rarity = document.querySelector(
  ".Inventory_Item_Info_Rarity"
);
const Inventory_Item_Info_Description = document.querySelector(
  ".Inventory_Item_Info_Description"
);
const Inventory_Item_Info_Collection = document.querySelector(
  ".Inventory_Item_Info_Collection"
);
const Inventory_Item_Info_Collection_Container = document.querySelector(
  ".Inventory_Item_Info_Collection_Container"
);
const Inventory_Item_Buttons = document.querySelector(
  ".Inventory_Item_Buttons"
);
Inventory_Item_Buttons.style.display = "flex"
let Inventory_Item_Buttons_WIDTH = Inventory_Item_Buttons.offsetWidth;
let Inventory_Item_Buttons_HEIGHT = Inventory_Item_Buttons.offsetHeight;
Inventory_Item_Buttons.style.display = "none"

console.log(Inventory_Item_Buttons);
const corner1 = document.getElementById("corner1");
const corner2 = document.getElementById("corner2");
const corner3 = document.getElementById("corner3");
const corner4 = document.getElementById("corner4");
const corners = [corner1, corner2, corner3, corner4];
function Corner_Function(CurrentCorner) {
  for (let i = 0; i < corners.length; i++) {
    corners[i].style.display = "none";
  }
  CurrentCorner.style.display = "flex";
}
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutationRecord) {
    Inventory_Skins = document.querySelectorAll(".Inventory_Item");
    let Current_Item;
    Inventory_Skins.forEach(function (Item) {
      Item.onmouseenter = function () {
        Inventory_Item_Info.style.display = "flex";
        Corner_Function(corner1);

        let newPosX =
          Item.offsetLeft +
          Item.offsetWidth +
          Inventory_Item_Info.offsetWidth / 10;
        let newPosY = Item.offsetTop - Item.parentNode.scrollTop;
        //If box goes over the border
        if (
          newPosY + Inventory_Item_Info.offsetHeight - Item.offsetHeight >
            Item.parentNode.offsetHeight &&
          newPosX + Inventory_Item_Info.offsetWidth >
            Item.parentNode.offsetWidth
        ) {
          Corner_Function(corner4);
          newPosY =
            Item.offsetTop -
            Item.parentNode.scrollTop -
            Inventory_Item_Info.offsetHeight +
            Item.offsetHeight;
          newPosX =
            Item.offsetLeft -
            Inventory_Item_Info.offsetWidth -
            Inventory_Item_Info.offsetWidth / 10;
        }
        if (
          newPosX + Inventory_Item_Info.offsetWidth >
            Item.parentNode.offsetWidth &&
          newPosY + Inventory_Item_Info.offsetHeight - Item.offsetHeight <
            Item.parentNode.offsetHeight
        ) {
          newPosX =
            Item.offsetLeft -
            Inventory_Item_Info.offsetWidth -
            Inventory_Item_Info.offsetWidth / 10;
          Corner_Function(corner2);
        }
        if (
          newPosY + Inventory_Item_Info.offsetHeight - Item.offsetHeight >
            Item.parentNode.offsetHeight &&
          newPosX + Inventory_Item_Info.offsetWidth <
            Item.parentNode.offsetWidth
        ) {
          newPosY =
            Item.offsetTop -
            Item.parentNode.scrollTop -
            Inventory_Item_Info.offsetHeight +
            Item.offsetHeight;
          Corner_Function(corner3);
        }

        //Setting Styles
        document.querySelector(".Inventory_Item_Info_Name").textContent =
          Item.ItemName;
        Inventory_Item_Info_Description.textContent = Item.Description;
        Inventory_Item_Info_Collection.textContent =
          "The " + Item.Collection_Name.replace("Case", "") + " Collection";
        Inventory_Item_Info_Rarity.textContent = Item.Rarity;

        let Case_Rarity_Skins_Array = [];
        CaseData.forEach(function (Case) {
          if (Case.name === Item.Collection_Name) {
            for (const key in Case.content) {
              if (Case.content[key].length > 0 && key != "Rare Special Items") {
                Case_Rarity_Skins_Array.push(Case.content[key]);
              }
            }
          }
        });

        //Setting skins collection skins

        let Current_P;
        Current_P = 0;
        for (let i = 0; i < Case_Rarity_Skins_Array[3].length; i++) {
          Current_P += 1;
          Inventory_Item_Info_Collection_Container.children[i].textContent =
            Object.values(Case_Rarity_Skins_Array[3])[i].name;

          Inventory_Item_Info_Collection_Container.children[i].style.color =
            "rgb(61, 87, 195)";
        }
        for (let i = 0; i < Case_Rarity_Skins_Array[2].length; i++) {
          if (Current_P < 8) {
            Inventory_Item_Info_Collection_Container.children[
              Current_P
            ].textContent = Object.values(Case_Rarity_Skins_Array[2])[i].name;
            Inventory_Item_Info_Collection_Container.children[
              Current_P
            ].style.color = "rgb(107, 72, 195)";
            Current_P += 1;
          }
        }
        for (let i = 0; i < Case_Rarity_Skins_Array[1].length; i++) {
          if (Current_P < 8) {
            Inventory_Item_Info_Collection_Container.children[
              Current_P
            ].textContent = Object.values(Case_Rarity_Skins_Array[1])[i].name;
            Inventory_Item_Info_Collection_Container.children[
              Current_P
            ].style.color = "rgb(166, 60, 174)";
            Current_P += 1;
          }
        }
        let Total_Collection_Skins = 0;
        for (let SkinRarityIndex = 0; SkinRarityIndex < Case_Rarity_Skins_Array.length; SkinRarityIndex++) {
          for (let SkinIndex = 0; SkinIndex < Case_Rarity_Skins_Array[SkinRarityIndex].length; SkinIndex++) {
            Total_Collection_Skins += 1;
          }
        }

        if (Total_Collection_Skins - 8 != 1) {
          Inventory_Item_Info_Collection_Container.children[8].textContent = `and ${
            Total_Collection_Skins - 8
          } more items...`;
        } else {
          Inventory_Item_Info_Collection_Container.children[8].textContent = `and ${
            Total_Collection_Skins - 8
          } more item...`;
        }
        Inventory_Item_Info_Collection_Container.children[9].textContent = "or a Rare Special Item";

        function setBackgroundRarityColor(Color) {
          Inventory_Item_Info_Rarity.style.background = `linear-gradient(90deg,rgba(100, 100, 100,0.01) 0%, ${Color} 20%, ${Color} 80% , rgba(0, 0, 0,0.01) 100%)`;
        }
        if (Item.Rarity == Rarity_Array[0])
          setBackgroundRarityColor(Rarity_Colors[0]);
        if (Item.Rarity == Rarity_Array[1])
          setBackgroundRarityColor(Rarity_Colors[1]);
        if (Item.Rarity == Rarity_Array[2])
          setBackgroundRarityColor(Rarity_Colors[2]);
        if (Item.Rarity == Rarity_Array[3] || Item.Rarity == Rarity_Array[4])
          setBackgroundRarityColor(Rarity_Colors[3]);
        //Move the Info Box
        Inventory_Item_Info.style.transform = `translate3d(${newPosX}px , ${newPosY}px , 0px)`;
      };
      Item.onmouseleave = function () {
        Inventory_Item_Info.style.display = "none";
      };

      let debounce = false;
      Item.onclick = function (e) {

        function position_Inventory_Item_Buttons_Function (){
            let rect = Item.parentNode.parentNode.getBoundingClientRect();
             
            let x = e.clientX - rect.left + Inventory_Item_Buttons_WIDTH/5;
            let y = e.clientY - rect.top - Inventory_Item_Buttons_HEIGHT / 4;
            console.log( Inventory_Item_Buttons_WIDTH , " | " , Inventory_Item_Buttons_HEIGHT )
            Inventory_Item_Info.style.display = "none";
            Inventory_Item_Buttons.style.display = "flex";
            Inventory_Item_Buttons.style.transform = `translate3d(${x}px , ${y}px , 0px)`;
        }

        if (Current_Item === Item || Current_Item === undefined) {

          if (debounce === false) {
         
            debounce = true;
            position_Inventory_Item_Buttons_Function();

          } else {

            debounce = false;
            Inventory_Item_Buttons.style.display = "none";

          }

        } else {
            debounce = true;
       position_Inventory_Item_Buttons_Function();
        }

        Current_Item = Item;
      };
    });
  });
});

observer.observe(Inventory_Grid, {
  attributes: true,
  attributeFilter: ["style"],
  subtree: true,
});
