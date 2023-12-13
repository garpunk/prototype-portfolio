let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabName) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }

  for (let tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }

  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}

/* side menu*/

let sideMenu = document.getElementById('sidemenu');

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-200px';
}

const scriptURL =
  'https://script.google.com/macros/s/AKfycbwcUm9k2ZtNeqxVvWLeaCMJ0l8CzUM8DcjOB2UntcNBcQU3s2l-oXQBxiRzm73HZHFs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = 'Message sent successfully!';
      setTimeout(function () {
        msg.innerHTML = '';
      }, 1500);
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
