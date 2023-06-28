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
  try{
    create()
  }
  
  catch(err){
    console.log('err occured')
  }
}

// creating cat response

let url = 'https://catgpt.onrender.com/resp';

async function create(){
try{
  let resp = await fetch(url,{
    method: 'GET',
})
if (!resp.ok) {
  throw new Error('Network response was not OK');
}
  let msg = await resp.json();
  let data = msg.msg;
  let msgbox = document.createElement('div');
  msgbox.className = "msg_cat";
  document.getElementById("msgcontainer").append(msgbox);
  msgbox.innerText = data;
}
catch(err){
  console.log('Kitty drained out !')
  let msgbox = document.createElement('div');
  msgbox.className = "msg_cat";
  document.getElementById("msgcontainer").append(msgbox);
  msgbox.innerText = '😴 Our supreme cat is resting as of now, Come back later 👋';
}


}

create()




// for enter key 
let input = document.getElementById("ques");

input.addEventListener('keyup',(e) =>{
  if(e.keyCode === 13){
    ask();
  }
})