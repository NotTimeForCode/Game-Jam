function colorChanger() {
    let color = getRandomColor();
    let color2 = getRandomColor();
    let angle = [Math.floor(Math.random() * 360)];
    document.body.style.backgroundImage = `linear-gradient(${angle}deg, ${color}, ${color2})`;

};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // setInterval(colorChanger, 50); Epilepsy mode