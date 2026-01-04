const searchInput = document.querySelector('.search-input');
const productBoxes = document.querySelectorAll('.box');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  productBoxes.forEach(box => {
    const title = box.querySelector('h2').innerText.toLowerCase();
    if (title.includes(query)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
});
const toggleBtn = document.getElementById('theme-toggle');

// Load the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save the theme preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
