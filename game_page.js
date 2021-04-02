player1_name = localStorage.getItem(player1_name)
player2_name = localStorage.getItem(player2_name)
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
function send(){
    get_no1=document.getElementById("no1").value;
    get_no2=document.getElementById("no2").value;
    console.log("No 1 = "+ get_no1);
    question_no= get_no1+"X"+get_no2
    question_word="<h4 id 'word_display' Q. "+question_no+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class= 'btn btn-info' onclick='check()'>Check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}