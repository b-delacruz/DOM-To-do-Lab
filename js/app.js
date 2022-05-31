// cached elements

const submitButton = document.querySelector("#submit-button")
const firstId = document.querySelector("#first-id")
const doList = document. querySelector("#todo-list")
// 


submitButton.addEventListener('click',function(evt){
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inp.value = ''
})

