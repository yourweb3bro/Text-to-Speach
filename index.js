const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  // Load saved theme from localStorage
  if(localStorage.getItem('theme') === 'dark'){
    root.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    
    // Save preference
    if(root.classList.contains('dark')){
      localStorage.setItem('theme','dark');
    } else {
      localStorage.setItem('theme','light');
    }
  });