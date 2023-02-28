function create(){
  let msg = "😼 ";
  let msgbox = document.createElement('div');
  msgbox.className = "msg_cat";
  document.getElementById("msgcontainer").append(msgbox);
  let timerid = setInterval(add,100);
  let count = 0;
  let max_count = Math.ceil(Math.random()*10) + 5;
  function add(){
    if(count == max_count)
    clearInterval(timerid);
    msg = msg + "meow ";
    msgbox.innerText = msg;
    count++;
  }
}
create();

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
  setTimeout(create,500);
}

// for enter key
let input = document.getElementById("ques");

input.addEventListener('keyup',(e) =>{
  if(e.keyCode === 13){
    ask();
  }
})