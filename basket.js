
document.addEventListener('DOMContentLoaded', ()=>{

    const basket = document.querySelector('#basket')

    let basketPlusMinus = function(event) {
        let plus = basket.querySelectorAll('.plus');
        let minus = basket.querySelectorAll('.minus');
        let itemsNumber = basket.querySelectorAll('.itemsNumber');
        if(event.target.classList.contains('plus')) {
            for(let i=0; i<plus.length; i++) {
                if(event.target === plus[i]) {
                    if(itemsNumber[i].textContent  < 1000) {
                        itemsNumber[i].textContent++;
                    } else {
                        itemsNumber[i] = 1000;
                    }
                }
            }
        }
        if(event.target.classList.contains('minus')) {
            for(let i = 0; i<minus.length; i++) {
                if(event.target === minus[i]) {
                    if(itemsNumber[i].textContent > 0) {
                        itemsNumber[i].textContent--;
                    } else {
                        itemsNumber[i] = 1;
                    }
                }
            }
        }
  
    }
    if(basket) {
        document.addEventListener('click', basketPlusMinus)
    }

        
})

