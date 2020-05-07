// Import stylesheets
import './style.css';

// Write Javascript code!

const modalInner =document.querySelector('.modal-inner');
const modalOuter =document.querySelector('.modal-outer');

const btn = document.querySelectorAll('.card button');

function handleBtnClick(e){
  const button = e.currentTarget;
  const card = button.closest('.card');

  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description
  const name = card.querySelector('h2').textContent;

  modalInner.innerHTML = ` <img width="600" height="600" src='${imgSrc.replace('200', '600')}' alt=${name} />
     <p>${desc}</p>
  `
   modalOuter.classList.add('open');

}


function closeModal(){
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (e) => {
const isOutside = !e.target.closest('.modal-inner');
if(isOutside){
  closeModal()
}

})

btn.forEach( button => button.addEventListener('click', handleBtnClick))

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});