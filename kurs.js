/*document.addEventListener('DOMContentLoaded', () => {

    const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы
  
    const main = document.querySelectorAll('.fat') // получаем все карточки
  
    main.forEach(fat => { // для каждой карточки
      fat.addEventListener('mouseenter', () => { // при наведении на карточку
        siblings(fat).forEach(el => { // для каждого соседнего элемента
          el.classList.add('fat_sibling') // добавляем активный класс, который визуально ставит соседние карточки на задний план
        })
      })
      fat.addEventListener('mouseleave', () => { // если убираем курсор с карточки
        siblings(fat).forEach(el => { // для каждого соседнего элемента
          el.classList.remove('fat_sibling') // удаляем активный класс
        })
      })
    })
  
  })
*/

  function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    } else {
    change.target.classList.remove('element-show');
    }
    });
    }
  let options = {
    threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

