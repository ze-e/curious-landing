//don't load script until document loads so we can query elements
window.onload = () =>{

//query
const carouselElement = document.querySelector('.home__carousel');
const carouselItems = document.querySelectorAll('.home__carousel-img');

//set var
let currentItem = 0;

autoChangeSlide();

  function scroll(node, left) {
    if(node){
      return node.scrollTo({
        'left': left,
        behavior: 'smooth'
      })
    }
  }

  function clickChangeSlide(i, elementName) {
    const Id = i.id.split(elementName)[1];

    if (carouselElement) {
      const scrollLeft = Math.floor(carouselElement.scrollWidth  * (Id / carouselItems.length));
      scroll(carouselElement, scrollLeft);
    }
  }

  function changeSlide(changeBy) {
    currentItem += changeBy;
    if(currentItem  > carouselItems.length - 1) currentItem = 0;

    if (carouselElement) {
      const scrollLeft = Math.floor(carouselElement.scrollWidth  * (currentItem / carouselItems.length));
      scroll(carouselElement, scrollLeft);
    }
  }

  function autoChangeSlide() {
    setInterval(changeSlide, 5000, 1);
  }

//attach events
document.querySelector('.button_left').addEventListener('click', ()=>{changeSlide(-1)});
document.querySelector('.button_right').addEventListener('click', ()=>{changeSlide(1)});

}

