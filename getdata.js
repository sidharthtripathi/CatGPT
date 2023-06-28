let url = 'http://localhost:3000/ansme';
fetch(url,{
    method: 'GET'
})
.then(resp => resp.json())
.then(data => console.log(data.msg))
