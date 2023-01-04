
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
    Game_Children[1],
    "",
    ""
]

function switching_UI (Selected_UI) {
    if (Selected_UI === undefined) return;
    if (Selected_UI.style.display != "none") return;

    for (let i in Header_Array){
        if (UI_Array[i] == ""){
        } else{
        UI_Array[i].style.display = "none"
       
       }
      
    }
    Selected_UI.style.display = "flex"
    if (Selected_UI === Game_Children[1]) {
        
        Game_Children[1].children[1].style.display= "none"
        Game_Children[1].children[1].children[3].style.display= "none"
        Game_Children[1].children[0].style.display = "grid"
       }

}

for (let i = 0 ; i < Header_Container.children.length ; i++){
    Header_Container.children[i].onclick = () => {

        switching_UI(Game_Children[i-1]);
    }
        
    
}