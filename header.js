const test = () => {
  const button = document.querySelector('.menu');
  
  let state;
  
  if (button.classList.contains('menu_opened'))
  {
    state = 'opened';
  }
  
  if (button.classList.contains('menu_closed'))
  {
    state = 'closed';
  }
  
  switch (state) {
    case 'closed': {
      console.log('Closed')
      button.classList.replace('menu_closed', 'menu_opened')
      break;
    }
    
    case 'opened': {
      console.log('Opened');
      button.classList.replace('menu_opened', 'menu_closed')
      break;
    }
  }
}