const test = () => {
  const button = document.querySelector('.menu');
  const menu = document.querySelector('.main');
  
  let buttonState;
  let menuState;
  
  if (button.classList.contains('menu_opened'))
  {
    buttonState = 'opened';
    menuState = buttonState;
  }
  
  if (button.classList.contains('menu_closed'))
  {
    buttonState = 'closed';
    menuState = buttonState;
  }
  
  switch (buttonState) {
    case 'closed': {
      // console.log('Closed');
      button.classList.replace('menu_closed', 'menu_opened');
      menu.classList.replace('main_closed', 'main_opened');
      break;
    }
    
    case 'opened': {
      // console.log('Opened');
      button.classList.replace('menu_opened', 'menu_closed');
      menu.classList.replace('main_opened', 'main_closed');
      break;
    }
  }
}