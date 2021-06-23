console.log("hello world!");

const nameTag = document.getElementById('name-tag');
console.log(nameTag)

const nameSection = document.getElementById('name-section');
console.log(nameSection);

const nameInput = document.getElementById('name-input');

const submitButton =document.getElementById('submit')
submitButton.addEventListener('click', (e)=>{
    nameSection.innerText = nameInput.value;
})

const pronounsInput = document.getElementById('pronouns-input');

const pronounsSection = document.getElementById('pronouns-section') 

const pronounsSubmit = document.getElementById('pronouns-submit')
pronounsSubmit.addEventListener('click', (e)=>{
    pronounsSection.innerText = pronounsInput.value;
})

