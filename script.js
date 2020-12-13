const immagine=document.getElementById("immagine")
const tag=document.getElementById("tag")
const descrizione=document.getElementById("descrizione")
const nome=document.getElementById("nome")
const link_immagine = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'
const link_eroi = 'https://ddragon.leagueoflegends.com/cdn/10.25.1/data/it_IT/champion.json'
let eroi = new Array()
fetch (link_eroi)
.then (r=>r.json())
.then (data => {
    let i=0
    for (eroe in data.data)
        eroi[i++] = data.data[eroe]
    crea_eroe()
})

function crea_eroe(){
    let eroe = eroi[Math.floor(Math.random()*eroi.length)]
    console.log(eroe)
    let imgname = eroe.image.full
    imgname = imgname.substr(0, (imgname.length-4))+'_0.jpg'
    immagine.src=link_immagine+imgname
    nome.innerText=eroe.name+", " + eroe.title
    descrizione.innerText=eroe.blurb
    let tipo = eroe.tags[0]
    for (let i=1; i<eroe.tags.length; i++){
        tipo+= "-" + eroe.tags[i]
    }
    tag.innerText = tipo
}
