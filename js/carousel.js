const carouselElement = document.querySelector('.home__carousel');
const carouselItems = document.querySelectorAll('.home__carousel-img');
let currentItem = 0;

  function scroll(node, left) {
    if(node){
      return node.scrollTo({
        'left': left,
        behavior: 'smooth'
      })
    }
  }

  function handleClick(i, elementName) {
    const Id = i.id.split(elementName)[1];

    if (carouselElement) {
      const scrollLeft = Math.floor(carouselElement.scrollWidth  * (Id / carouselItems.length));
      scroll(carouselElement, scrollLeft);
    }
  }

  function changeSlide(changeBy) {
    currentItem += changeBy;
    if(currentItem > carouselItems.length) currentItem === 0;

    if (carouselElement) {
      const scrollLeft = Math.floor(carouselElement.scrollWidth  * (currentItem / carouselItems.length));
      scroll(carouselElement, scrollLeft);
    }
  }
