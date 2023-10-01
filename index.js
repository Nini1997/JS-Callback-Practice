const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250) 

const character = newImage('https://github.com/Nini1997/JS-Callback-Practice/blob/main/assets/green-character/static.gif?raw=true');
let direction = null;
let x = 100;
let y = 250;




const intervalId = setInterval(function () {
  if (direction === 'west') {
    x = x - 1;
  }
  if (direction === 'north') {
    y = y + 1;
  }
  if (direction === 'east') {
    x = x + 1;
  }
  if (direction === 'south') {
    y = y - 1;
  }
  character.style.left = x + 'px';
  character.style.bottom = y + 'px';
}, 1);


document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    direction = 'west';
  } else if (event.key === 'ArrowUp') {
    direction = 'north';
  } else if (event.key === 'ArrowRight') {
    direction = 'east';
  } else if (event.key === 'ArrowDown') {
    direction = 'south';
  }
});

document.addEventListener('keyup', function (event) {
  if (
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowUp' ||
    event.key === 'ArrowRight' ||
    event.key === 'ArrowDown'
  ) {
    direction = null; 
  }
});

document.addEventListener('keydown', function(e) {
  if (e.repeat) return; 

  if (e.key === 'ArrowLeft') {
    direction = 'west';
  } else if (e.key === 'ArrowUp') {
    direction = 'north';
  } else if (e.key === 'ArrowRight') {
    direction = 'east';
  } else if (e.key === 'ArrowDown') {
    direction = 'south';
  }
});

document.addEventListener('keyup', function(e) {
  direction = null; 
});


function moveWithArrowKeys(left, bottom) {
  let direction = null;
  let x = left;
  let y = bottom;

  element.style.left = x + 'px';
  element.style.bottom = y + 'px';

  function moveCharacter() {
    if (direction === 'west') {
      x -= 1;
    }
    if (direction === 'north') {
      y += 1;
    }
    if (direction === 'east') {
      x += 1;
    }
    if (direction === 'south') {
      y -= 1;
    }
    element.style.left = x + 'px';
    element.style.bottom = y + 'px';
  }

  setInterval(moveCharacter, 1);

  document.addEventListener('keydown', function (e) {
    if (e.repeat) return;

    if (e.key === 'ArrowLeft') {
      direction = 'west';
    }
    if (e.key === 'ArrowUp') {
      direction = 'north';
    }
    if (e.key === 'ArrowRight') {
      direction = 'east';
    }
    if (e.key === 'ArrowDown') {
      direction = 'south';
    }
  });

  document.addEventListener('keyup', function (e) {
    direction = null;
  });
}
