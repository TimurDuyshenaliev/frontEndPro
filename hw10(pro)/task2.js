const imageOut = document.querySelector('.image-out');
    let pic = document.createElement('img');
    pic.src = `images/${Math.floor(Math.random() * (9 - 1)) + 1}.jpg`;
    pic.width =((window.innerWidth)*80)/100;
    imageOut.append(pic)