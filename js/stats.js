
const ctrl_name = document.getElementById('ctrl-name');
const ctrl_create = document.getElementById('ctrl-create');
const ctrl_reponr = document.getElementById('ctrl-reponr');
const repos_div = document.getElementById('repos')
const loader = document.getElementById('loader')

datacheck()

function datacheck(){
    if(ctrl_name.innerHTML.length > 1){
        loader.style.display = 'none'
    }else{
        setTimeout(datacheck, 0)
    };
}

let req = new XMLHttpRequest();
req.open('GET', 'https://api.github.com/users/ctrl-team')
req.onreadystatechange = function () {
    if (req.readyState == 4) {
       if(req.status == 200)
         {
           let data = JSON.parse(this.responseText)

           ctrl_name.innerHTML = `Name<span class="yellow">:</span> ${data.login}`;
           ctrl_create.innerHTML = `Created at<span class="yellow">:</span> ${data.created_at.slice(0,10).replace(/-/g, ' ')}`;
           ctrl_reponr.innerHTML = `Repos number<span class="yellow">:</span> ${data.public_repos}`;


         }
       else
        console.log("error");
    }
  };
req.send()

let req2 = new XMLHttpRequest();
req2.open('GET', 'https://api.github.com/users/ctrl-team/repos')
req2.onreadystatechange = function () {
  if (req2.readyState == 4) {
     if(req2.status == 200)
        {
            let repos = JSON.parse(this.responseText)
            for(repo of repos){
                let repodiv = document.createElement('div');
                repodiv.className = 'repos'
                repodiv.innerHTML = repo.name;

                repos_div.appendChild(repodiv)
            }
        
         
        }
     else
      console.log("error");
  }
};
req2.send()