
const ctrl_name = document.getElementById('ctrl-name');
const ctrl_create = document.getElementById('ctrl-create');
const ctrl_reponr = document.getElementById('ctrl-reponr');
const repos_div = document.getElementById('repos');
const reposlist = document.getElementById('reposlist');
const loader = document.getElementById('loader');
const loader2 = document.getElementById('loader2');

datacheck()

function datacheck(){
    if(ctrl_name.innerHTML.length > 1){
        loader.style.display = 'none'
    }else{
        setTimeout(datacheck, 0)
    };
}
//i know, r/programminghorror but I have to
datacheck2()

function datacheck2(){
    if(reposlist.innerHTML.length > 1){
        loader2.style.display = 'none'
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
                let repowrap = document.createElement('div')
                repowrap.className = 'repowrap'

                let repodiv = document.createElement('div');
                repodiv.className = 'repos'
                repodiv.innerHTML = `<span class="arrow"><img src="img/arrow.png" width="20px"></span>  ${repo.name}`;

                let expanddiv = document.createElement('div')
                expanddiv.className = 'expanddiv';
                expanddiv.innerHTML = 
                `<div class="expanddivcontent"><span class="yellow">language</span>: ${repo.language}</div><br>
                <div class="expanddivcontent"><span class="yellow">description</span>: ${repo.description}</div><br>
                <div class="expanddivcontent"><span class="yellow">created at</span>: ${repo.created_at.slice(0,10).replace(/-/g, ' ')}</div><br>`;

                expanddiv.style.display = 'none'

                let contributors = ''


                //CONTRIBUTORS

                fetch('https://api.github.com/repos/ctrl-team/' + repo.name + '/contributors')
                .then(resp => resp.json())
                .then(resp => {
                    for(contributor of resp){
                        contributors += contributor.login + ' '
                    }

                    expanddiv.innerHTML += `<div class="expanddivcontent"><span class="yellow">contributors</span>: ${contributors}</div><br>`
                })

                //LAST COMMIT

                fetch('https://api.github.com/repos/ctrl-team/' + repo.name + '/commits')
                .then(resp => resp.json())
                .then(resp=>{
                    expanddiv.innerHTML += `<div class="expanddivcontent"><span class="yellow">last commit</span>: ${resp[0].commit.message} <span class="yellow">by</span> ${resp[0].commit.author.name}</div>`
                })

                reposlist.appendChild(repowrap)
                repowrap.appendChild(repodiv)
                repowrap.appendChild(expanddiv)

                repodiv.addEventListener('click', ()=>{
                    if(expanddiv.style.display == 'none')
                    {
                        expanddiv.style.display = 'block'
                        repodiv.children[0].children[0].style.transform = 'scaleY(-1)'

                    }else {
                        expanddiv.style.display = 'none'
                        repodiv.children[0].children[0].style.transform = 'scaleY(1)'
                    }
                })
            }
        
         
        }
     else
      console.log("error");
  }
};
req2.send()




