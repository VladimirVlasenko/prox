document.addEventListener('DOMContentLoaded', ()=>{
    let card = document.querySelector('.card_main')
    let cardPlusMinus = function(){
        const plus = document.querySelector('.plus');
        const minus = document.querySelector('.minus');
        if(event.target.classList.contains('plus')) {
            let itemsNumber = document.querySelector('.itemsNumber');
            if(itemsNumber.textContent > 0) {
                itemsNumber.textContent++;
            } else itemsNumber.textContent = 1;
            
        }
        if(event.target.classList.contains('minus')) {
            let itemsNumber = document.querySelector('.itemsNumber');
            if(itemsNumber.textContent > 0) {
                itemsNumber.textContent--;
            } else itemsNumber.textContent = 1;
        }
        
    }

    // Табы в карточке товара
    let cardTabsToggle = function() {
        const cardDescription = document.querySelector('#card_description');
        let tabs = cardDescription.querySelectorAll('.tab');
        let tabsContent =  cardDescription.querySelectorAll('.tab_content');
        
        if(event.target.classList.contains('tab')) {
            for(i=0; i<tabs.length; i++) {
                if(tabs[i].classList.contains('active')){
                    tabs[i].classList.remove('active');
                    tabsContent[i].classList.remove('active');
                }
                if(event.target === tabs[i]) {
                    tabs[i].classList.add('active');
                    tabsContent[i].classList.add('active');
                }
            }
        }
        
    }


    if(card) {
        document.addEventListener('click', cardPlusMinus);
        document.addEventListener('click', cardTabsToggle);
    }
})