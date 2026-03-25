let editName = document.querySelector('.name')
let reqNumber = document.querySelector('.req-number')
let conNumber = document.querySelector('.con-number')

function editBtn() {
    editName = editName.innerHTML = 'Marwa Tanani'
}
function handleReq(elm,state){
    let row = elm.parentElement.parentElement;
    row.remove();
    let num = parseInt(reqNumber.innerText);
    reqNumber.innerText = --num;
    if(state === 'accept'){
        let conNum = parseInt(conNumber.innerText);
        conNumber.innerText = ++conNum;
    }
}

