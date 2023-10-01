function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

function handleDirectionChange(direction) {
  if (direction === null) {
    character.src = 'https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/static.gif?raw=true';
  }
  if (direction === 'west') {
    character.src = 'https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/west.gif?raw=true';
  }
  if (direction === 'north') {
    character.src = 'https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/north.gif?raw=true';
  }
  if (direction === 'east') {
    character.src = 'https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/east.gif?raw=true';
  }
  if (direction === 'south') {
    character.src = 'https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/south.gif?raw=true';
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange);


