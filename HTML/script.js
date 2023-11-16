//Cache the DOM
var button=document.getElementById("button")
var body=document.getElementById("body")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var img=document.getElementById("imagine")
var asteptari=document.getElementById("asteptari")
var an=document.getElementById("anNastere")

//Add eventListener to button
button.addEventListener("click",Nou)
an.addEventListener("mouseover",displayAge)

const d=new Date()
var year=d.getFullYear()

function displayAge(){
	an.innerHTML=year-an.innerHTML
}

function Nou(){
	nume.innerHTML="Functie: Presedinte FCB"
	prenume.innerHTML="Locul de munca: Barcelona"
	asteptari.innerHTML="Experiente: <ol><li>trofee</li><li>internship</li></ol>"
	
	img.src="Joan_Laporta.jpg"
	
	body.style.backgroundColor="800000"
	body.style.color="000080"
	
	
	img.style.opacity="90%"
	img.style.borderWidths="25px"
	img.style.width="200px"
	img.style.height="200px"
}
