
const Header_Container = document.querySelector(".Header_Container")
//Header Buttons
const Header_Play_Button = document.querySelector(".Play_Button");
const Header_Inventory_Button = document.querySelector(".Invetory_Button");
const Header_Cases_Button = document.querySelector(".Cases_Button");
const Header_Awards_Button = document.querySelector(".Awards_Button");
const Header_Options_Button = document.querySelector(".Options_Button");

//Game
const Game_UI = document.querySelector(".Game_UI")
const Game_Children = Game_UI.children


const Header_Array = [
    Header_Play_Button,
    Header_Inventory_Button,
    Header_Cases_Button,
    Header_Awards_Button,
    Header_Options_Button
]
const UI_Array = [
    "",
    Game_Children[0],
    "",
    "",
    ""
]

function switching_UI (Selected_UI) {
    console.log("Working")
    if (Selected_UI === undefined) return;
   // if (Selected_UI.style.display == "none") return console.log("gay");
   console.log("1")

    Selected_UI.style.display = "flex"
    if (Selected_UI === Game_Children[0]) {
        
        for (let i = 0 ; i < Game_Children[0].children.length; i++){
            if (i < 1){
                Game_Children[0].children[i].style.display = "flex"
            }
            if (i === 2){
                Game_Children[0].children[i].style.display = "none"
            }
            if (i === 3){
                Game_Children[0].children[i].style.display = "grid"
            }
            if (i > 3){
                Game_Children[0].children[i].style.display = "none"
            }
        }
       }

}

for (let i = 1 ; i < 2 ; i++){
    Header_Container.children[i].onclick = () => {

        switching_UI(Game_Children[i-1]);
    }
        
    
}