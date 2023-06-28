// creating user questions
function ask(){
  //creating user response div
  let askmsg = document.createElement('div');
  //user response class name
  askmsg.className = "msg_sender";
  // setting inner text of response from input bar
  askmsg.innerText = "🤵 "
  askmsg.innerText += document.getElementById("ques").value;
  //reseting input bar
  document.getElementById("ques").value = "";
  //appending response into chatbox
  document.getElementById("msgcontainer").append(askmsg);
  // printing meow response
  create()
}

// creating cat response

let url = 'http://localhost:3000/resp';

async function create(){
  let resp = await fetch(url,{
    method: 'GET',
})
  let msg = await resp.json();
  let data = msg.msg;
  let msgbox = document.createElement('div');
  msgbox.className = "msg_cat";
  document.getElementById("msgcontainer").append(msgbox);
  msgbox.innerText = data;

}
create()




// for enter key 
let input = document.getElementById("ques");

input.addEventListener('keyup',(e) =>{
  if(e.keyCode === 13){
    ask();
  }
})