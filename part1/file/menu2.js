const toggleBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('menuItems');
const iframe = document.getElementById('contentFrame');

// باز و بسته کردن منو
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  toggleBtn.textContent = sidebar.classList.contains('active') ? '✕' : '☰';
});

// وقتی روی دکمه‌ها کلیک شد، محتوای iframe تغییر کنه
sidebar.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const page = e.target.getAttribute('data-src');
    iframe.src = page;

    // بعد از انتخاب، منو بسته بشه (اختیاری)
    sidebar.classList.remove('active');
    toggleBtn.textContent = '☰';
  }
});
