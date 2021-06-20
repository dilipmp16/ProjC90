function addUser() 
{
    Player_1_Name  = document.getElementById("player_1_name_input").value;
    Player_2_Name  = document.getElementById("player_2_name_input").value;
    localStorage.setItem("player_1_name",Player_1_Name);
    localStorage.setItem("player_2_name",Player_2_Name);
    window.location.replace("game_page.html")
}


