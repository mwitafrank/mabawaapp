let count = 0
let ct = 1
let countEl = document.getElementById('countEl')
let pass_num = document.getElementById('pass_num')
function increment()
{
     count += 1
     pass_num.textContent = count
     
}

function save()
{    
     
     countStr ="Mzunguko wa  "+ ct +" = "+ count + " / "
     ct += 1
     countEl.textContent += " "+countStr
     count = 0
     pass_num.textContent = count
}

function refresh()
{
     let text = "Una Uhakika unataka kufuta taarifa ? Bonyeza Ok Kufuta au Cancel Kughairi"
     if(confirm(text)==true)
     {
          window.location.reload()
     }else{
          return false
     }
}




let name = "Linda"
let gr = "Hi, there "
function greating(){
     let ful = gr + name
     console.log(ful)
}


greating()
