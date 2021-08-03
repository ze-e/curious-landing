const carouselElement = document.querySelector('.home__carousel');
const carouselItems = document.querySelectorAll('.home__carousel-img');
console.log(carouselItems.length);

  function scroll(node, left) {
    if(node){
      return node.scrollTo({
        'left': left,
        behavior: 'smooth'
      })
    }
  }

  function handleClick(i) {
    console.log(i);

    if (carouselElement) {
      const scrollLeft = Math.floor(carouselElement.scrollWidth  * (i.id / carouselItems.length));
      scroll(carouselElement, scrollLeft);
    }
  }

