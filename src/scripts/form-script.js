function mailCheck(input) {
    let reg = /[a-zA-Z]+[0-9]+@[a-zA-Z]+\.sjcetpalai\.ac\.in/i;
    return reg.test(input);
}


function dataTransfer() {
    const thForm = document.forms['THForm']
    if(thForm['memid'].value.length==17){
        if(mailCheck(thForm['email'].value)){
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
            fetch('https://member-details-api.herokuapp.com/', options);
            document.getElementById('submit').innerText='Processing';
            setTimeout(() => {location.replace("success.html");},5000);
            
        }
        else{
            document.getElementById('mail_error').innerText='You should enter your college mail';
            setTimeout(() => {document.getElementById('mail_error').innerText='';},5000);
        }
    }
    else{
        document.getElementById('id_error').innerText='You should enter 17 character TH id';
        setTimeout(() => {document.getElementById('id_error').innerText='';},5000);
        
        console.log(thForm['memid'].value.length);
    }
}