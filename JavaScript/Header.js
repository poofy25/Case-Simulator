
//Header Buttons
const Header_Container_Buttons = document.querySelector(".Header_Container").children
//Game UI
const Game_UI_Inventory_Menu = document.querySelector(".Game_UI_Inventory_Menu")

const Game_UI_Menus = [
    "",
    Game_UI_Inventory_Menu,
    "",
    "",
    ""
]

function switching_UI (Selected_UI) {
 
    if (Selected_UI === undefined) return;

    Selected_UI.style.display = "flex"
    if (Selected_UI === Game_UI_Menus[1]) {
        
        for (let i = 0 ; i < Game_UI_Menus[1].children.length; i++){
            if (i < 1){
                Game_UI_Menus[1].children[i].style.display = "flex"
            }
            if (i === 2){
                Game_UI_Menus[1].children[i].style.display = "none"
            }
            if (i === 3){
                Game_UI_Menus[1].children[i].style.display = "grid"
            }
            if (i > 3){
                Game_UI_Menus[1].children[i].style.display = "none"
            }
        }
       }

}

for (let i = 1 ; i < 2 ; i++){

    Header_Container_Buttons[i].onclick = () => {
        switching_UI(Game_UI_Menus[i]);
    }
        
}