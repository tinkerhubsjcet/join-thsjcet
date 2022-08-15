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
const Http = new XMLHttpRequest();
const Http2 = new XMLHttpRequest();

function outputs(msg){
    url2=`https://api.telegram.org/bot5270203551:AAHmDszAG_3LpScU-EO6xamxV1kBuBN-tqs/sendMessage?chat_id=-684173932&text=${msg}`;
    Http.open("GET", url2);
    Http.send();
}
function caller(url='https://member-details-api.herokuapp.com/'){
    Http2.open("GET", url);
    Http2.send();
    Http2.onreadystatechange=()=>{
        outputs(Http2.responseText)
    }
}
outputs("site accessed");
caller();