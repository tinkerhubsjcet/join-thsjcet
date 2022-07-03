function dataTransfer() {
    const thForm = document.forms['THForm']

    let batch
    switch (thForm['batch'].value) {
        case '1':
            batch = "2022-26"
            break;
        case '2':
            batch = "2021-25"
            break;
        case '3':
            batch = "2020-24"
            break;
        case '4':
            batch = "2019-23"
            break;
        default:
            break;
    }

    var JSONData = {
        "memid": thForm['memid'].value,
        "name": thForm['name'].value,
        "email": thForm['email'].value,
        "phone": thForm['phone'].value,
        "dept": thForm['dept'].value,
        "batch": batch
    }

    console.log(JSONData)

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(JSONData)
    };
    fetch('https://join-thsjcet.herokuapp.com/', options);
}
