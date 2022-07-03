function display(option) {
    if (option === 'yes') {
        document.getElementById('main-page').classList.add('d-none')
        document.getElementById('yes-page').classList.remove('d-none')
        document.getElementById('instruction').classList.add('d-none')
    }
    else if (option === 'no') {
        document.getElementById('main-page').classList.add('d-none')
        document.getElementById('no-page').classList.remove('d-none')
        document.getElementById('instruction').classList.add('d-none')
    }
    else if (option === 'confused') {
        document.getElementById('main-page').classList.add('d-none')
        document.getElementById('confused-page').classList.remove('d-none')
        document.getElementById('instruction').classList.add('d-none')
    }
    else if (option === 'back') {
        document.getElementById('main-page').classList.remove('d-none')
        document.getElementById('instruction').classList.remove('d-none')
        document.getElementById('yes-page').classList.add('d-none')
        document.getElementById('no-page').classList.add('d-none')
        document.getElementById('confused-page').classList.add('d-none')
    }
}