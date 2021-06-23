console.log("hello world!");
const nameTag = document.getElementById('name-tag');
console.log(nameTag)

//const nameSection = document.getElementById('name-section');
//nameSection.addEventListener('click', ()=>{
    //console.log("I am clicking")
    //nameSection.innerText = "Jon";
//})

//const topSection = document.getElementById ('top-section');
//topSection.style.backgroundColor = "purple";

//const bottomSection = document.getElementById ('bottom-section');
//bottomSection.style.backgroundColor = "yellow";

const nameInput = document.getElementById('name-input');
nameInput.addEventListener('input', (e)=>{
    console.log(e.target.value)
    nameSection.innerText = e.target.value;
})

const submitButton =document.getElementById('submit')
submitButton.addEventListener.toString('click', (e)=>{
    nameSection.innerText = nameInput.value;
})

const pronounsInput = document.getElementById('pronouns-input');
pronounsInput.addEventListener('input', (e)=>{
    //console.log(e.target.value)
    pronounsSection.innerText = e.target.value;
})

const pronounsSection = document.getElementById('pronouns-section') 

const pronounsSubmit = document.getElementById('pronouns-submit')
pronounsSubmit.addEventListener.toString('click', (e)=>{
    pronounsSection.innerText = pronounsInput.value;
})






//function shout(name){
    //console.log(name.toUpperCase());
//}
//shout('Triana');