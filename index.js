const color = document.getElementById('colors');
const nameTag = document.getElementById('name-tag');
const nameSection = document.getElementById('name-section');
const nameInput = document.getElementById('name-input');
const submitButton =document.getElementById('submit')
submitButton.addEventListener('click', (e)=>{
   console.log(color.value)
    nameSection.innerText = nameInput.value;
})

const pronounsInput = document.getElementById('pronouns-input');
const pronounsSection = document.getElementById('pronouns-section') 
const pronounsSubmit = document.getElementById('pronouns-submit')
pronounsSubmit.addEventListener('click', (e)=>{
    pronounsSection.innerText = pronounsInput.value;
})

const bgColorTop = document.getElementById('top-section');
const bgColorBottom = document.getElementById('bottom-section');
const colorButton = document.getElementById('color-button');
colorButton.addEventListener('click', ()=>{
    console.log(colors.value);
    bgColorTop.style.backgroundColor = colors.value
    bgColorBottom.style.backgroundColor = colors.value
});

