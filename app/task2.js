// Задание 2.

// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

// const status = document.querySelector('.status');
// const mapLink = document.querySelector('.map-link');

const btn = document.querySelector('.btn');
const myFunction = () => {
    alert('Ширина экрана' + ' ' + document.documentElement.clientWidth + 'px')
}
  
btn.addEventListener('click', myFunction)
