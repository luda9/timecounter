console.log('hello')

const form = document.getElementById('form');
const date = document.getElementById('date');

const currentDate = new Date();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(date.value)
  console.log('bye')

  console.log(currentDate)
})
