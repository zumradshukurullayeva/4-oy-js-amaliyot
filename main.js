setInterval(() => {
    const wrapper = document.getElementsByClassName('wrepper');
    const wrepperTwo = document.getElementsByClassName('wreppertwo');

    if(wrapper[0].children[0].style.backgroundColor === 'rgb(255, 255, 255)') {
        wrapper[0].children[0].style.backgroundColor = '#000000'
        wrapper[0].children[1].style.backgroundColor = '#000000'
    } else {
        wrapper[0].children[0].style.backgroundColor = '#ffffff'
        wrapper[0].children[1].style.backgroundColor = '#ffffff'
    }

    if(wrepperTwo[0].children[0].style.backgroundColor === 'rgb(0, 0, 0)') {
        wrepperTwo[0].children[0].style.backgroundColor = '#ffffff'
        wrepperTwo[0].children[1].style.backgroundColor = '#ffffff'
    } else {
        wrepperTwo[0].children[0].style.backgroundColor = '#000000'
        wrepperTwo[0].children[1].style.backgroundColor = '#000000'
    }
    console.log(wrepperTwo)
}, 1000);
