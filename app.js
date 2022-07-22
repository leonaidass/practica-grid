
document.addEventListener('DOMContentLoaded',()=>{
    
    images()
  })

const images=async ()=>{
    try{
        let res= await fetch('https://picsum.photos/v2/list?page=2&limit=7')
        const data= await res.json()
        pintarCard(data)
    }catch(e){
        console.log(e)
    }

}
const main=document.querySelector(".container")
let num=1
const pintarCard=(d)=>{
     d.forEach(element => {
         
          
         
         const card=document.createElement('img')
         const divContent=document.createElement('div')
         divContent.className = `containerCard num${num}`;
         card.src=`${element.download_url}`
         main.append(divContent)
         divContent.append(card)
         num++
     });
}


    