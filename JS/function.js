function selectOption(option) {
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => button.classList.remove('active'));
  
    if (option === 'dine-in') {
      buttons[0].classList.add('active');
    } else if (option === 'take-away') {
      buttons[1].classList.add('active');
    }
  }