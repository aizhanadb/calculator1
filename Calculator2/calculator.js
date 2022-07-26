const amount = document.querySelector('#amount');//cost
const guests = document.querySelector('#guests');//people
const quality = document.querySelector('#quality');//service
const button = document.guerySelector('button');
const tip = document.querySelector('#tipP');
const each = document.querySelector('#each');
const result = document.querySelector('#result');

button.addEventListener('click', () =>{
    let index = quality.selectedIndex;
    let percent = Number(amount.value) * Number(quality.options[index].value) / 100;
    result.style.visibility = 'visible';
    tip.style.visibility = 'visible';
    if(guests.value > 1) {
        result.innerText = (percent / Number(guests.value)).toFixed(2);
        each.style.visibility = 'visible';
    }else{
        result.innerText = percent.toFixed(2);
        each.style.visibility = 'hidden';
    }
})

