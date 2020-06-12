document.addEventListener('DOMContentLoaded', ()=> {
    
    const mainScreen = document.querySelector('.mainScreen');
    let slideMain = function(event) {
        let slides = mainScreen.querySelectorAll('.slider-item');
        let textSlides = mainScreen.querySelectorAll('.text_wrapper');
        if(event.target.classList.contains('left')) {
            for(let i = 0; i<slides.length; i++) {
                if(slides[i].classList.contains('active')) {
                    if(i === 0) {
                        slides[i].classList.remove('active');
                        slides[slides.length-1].classList.add('active');
                        textSlides[i].classList.remove('active');
                        textSlides[slides.length-1].classList.add('active');
                        return;
                    } else {
                        slides[i].classList.remove('active');
                        slides[i-1].classList.add('active');
                        textSlides[i].classList.remove('active');
                        textSlides[i-1].classList.add('active');
                        return;
                    }

                }
            }  
        }
        if(event.target.classList.contains('right')) {
            for(let i = 0; i<slides.length; i++) {
                if(slides[i].classList.contains('active')) {
                    if(i === slides.length-1) {
                        slides[i].classList.remove('active');
                        slides[0].classList.add('active');
                        textSlides[i].classList.remove('active');
                        textSlides[0].classList.add('active');
                        return;
                    } else {
                        slides[i].classList.remove('active');
                        slides[i+1].classList.add('active');
                        textSlides[i].classList.remove('active');
                        textSlides[i+1].classList.add('active');
                        return;
                    }

                }
            }  
        }
    }
    const feedback = document.querySelector('#feedback');
    let slideFeedback = function(event) {
        let slides = feedback.querySelectorAll('.slider_item');
        let points = feedback.querySelectorAll('.point');
        if(event.target.classList.contains('left')) {
            for(let i = 0; i<slides.length; i++) {
                if(slides[i].classList.contains('active')) {
                    if(i === 0) {
                        slides[i].classList.remove('active');
                        slides[slides.length-1].classList.add('active');
                        points[i].classList.remove('active');
                        points[slides.length-1].classList.add('active');             
                        return;
                    } else {
                        slides[i].classList.remove('active');
                        slides[i-1].classList.add('active');
                        points[i].classList.remove('active');
                        points[i-1].classList.add('active');
                        return;
                    }

                }
            }  
        }
        if(event.target.classList.contains('right')) {
            for(let i = 0; i<slides.length; i++) {
                if(slides[i].classList.contains('active')) {
                    if(i === slides.length-1) {
                        slides[i].classList.remove('active');
                        slides[0].classList.add('active');
                        points[i].classList.remove('active');
                        points[0].classList.add('active');
                        return;
                    } else {
                        slides[i].classList.remove('active');
                        slides[i+1].classList.add('active');
                        points[i].classList.remove('active');
                        points[i+1].classList.add('active');
                        return;
                    }

                }
            }  
        }
        if(event.target.classList.contains('point')) {
            for(let i = 0; i<slides.length; i++) {
                if(slides[i].classList.contains('active')){
                    slides[i].classList.remove('active');
                    points[i].classList.remove('active');
                }
                if(event.target === points[i]) {
                    slides[i].classList.add('active');
                    points[i].classList.add('active');
                }
            }
        }
    }
    // Появление скрытого меню
    let hamburger = document.querySelector('.ham');
    let hamTwin = document.querySelector('.ham_twin');
    let hiddenMenu = document.querySelector('.hidden');
    let toggleMenu = function(event){
        if(event.target.classList.contains('ham_twin')) {
            if(!hiddenMenu.classList.contains('active')) {
                hiddenMenu.classList.add('active');
                hamburger.classList.add('active');
                hamTwin.classList.add('active');

            } else {
                hiddenMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamTwin.classList.remove('active');

            }
        }
        if(event.target.classList.contains('main_menu_item') && hiddenMenu.classList.contains('active')) {
            hiddenMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamTwin.classList.remove('active');
        }
    }
    let showHamburger = function(event) {
        let hamTwin = document.querySelector('.ham_twin');
        let hiddenMenu = document.querySelector('.hidden');
        let hamburger = document.querySelector('.ham');
        let scrollPosition = window.scrollY;
        if(document.body.clientWidth > 800) {
            if(scrollPosition > 1000) {
                hamburger.classList.add('visible');
                hamTwin.classList.add('visible');
            } else if(hiddenMenu.classList.contains('active')) {
                hamburger.classList.add('visible');
                hamTwin.classList.add('visible');
            } else {
                hamburger.classList.remove('visible');
                hamTwin.classList.remove('visible');
            }
        } else return;

    }
    document.addEventListener('scroll', showHamburger);
    document.addEventListener('click', toggleMenu);
    if(feedback) {
        document.addEventListener('click', slideFeedback);
    }
    if(mainScreen) {
        document.addEventListener('click', slideMain);
    }
    
    // события из каталога
    
        const grid = document.querySelector('.gridIcon');
        const rows = document.querySelector('.rowsIcon');
        let goodWrapperAll = document.querySelectorAll('.goodWrapper');
        if(grid) {
            grid.addEventListener('click', (event)=> {
                for(let i=0; i<goodWrapperAll.length; i++) {
                    if(goodWrapperAll[i].classList.contains('list')) {
                        goodWrapperAll[i].classList.remove('list');
                    }
                }
            })
        }
        if(rows) {
            rows.addEventListener('click', (event)=> {
                for(let i=0; i<goodWrapperAll.length; i++) {
                    if(!goodWrapperAll[i].classList.contains('list')) {
                        goodWrapperAll[i].classList.add('list');
                    }
                }
            })
        }

        
    
    
    let catalog = document.querySelector('#catalog');
    if(catalog) {
        setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);
    }
    
    
    function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
        var slider = document.getElementById(idX);
        var between = document.getElementById(btwX); 
        var button1 = document.getElementById(btn1X);
        var button2 = document.getElementById(btn2X);   
        var inpt1 = document.getElementById(input1); 
        var inpt2 = document.getElementById(input2); 
          
                var min=inpt1.min;
                          var max=inpt1.max;
        
        /*init*/
        var sliderCoords = getCoords(slider);
        button1.style.marginLeft = '0px';
        button2.style.marginLeft = (slider.offsetWidth-button1.offsetWidth) + 'px';
        between.style.width = (slider.offsetWidth-button1.offsetWidth) + 'px';
        inpt1.value = min;
        inpt2.value = max;
        
        inpt1.onchange= function(evt)
        {
            if (parseInt(inpt1.value) < min)
                inpt1.value = min;
            if (parseInt(inpt1.value) > max)
                inpt1.value = max;
            if (parseInt(inpt1.value) > parseInt(inpt2.value))
          {
              var temp = inpt1.value;
                inpt1.value = inpt2.value;
                inpt2.value = temp;
          }
          
          
            var sliderCoords = getCoords(slider);
            var per1 = parseInt(inpt1.value-min)*100/(max-min);
            var per2 = parseInt(inpt2.value-min)*100/(max-min);
            var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
            var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
            
                button1.style.marginLeft = left1 + 'px'; 
                button2.style.marginLeft = left2 + 'px';
                
                if (left1 > left2)
                  {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                  }
                else
                  {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';  
                  }
        }
        inpt2.onchange= function(evt)
        {
            if (parseInt(inpt2.value) < min)
                inpt2.value = min;
            if (parseInt(inpt2.value) > max)
                inpt2.value = max;
            if (parseInt(inpt1.value) > parseInt(inpt2.value))
          {
              var temp = inpt1.value;
                inpt1.value = inpt2.value;
                inpt2.value = temp;
          }
          
            var sliderCoords = getCoords(slider);
            var per1 = parseInt(inpt1.value-min)*100/(max-min);
            var per2 = parseInt(inpt2.value-min)*100/(max-min);
            var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
            var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
            
                button1.style.marginLeft = left1 + 'px'; 
                button2.style.marginLeft = left2 + 'px';
                
                if (left1 > left2)
                  {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                  }
                else
                  {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';  
                  }
        }
      
        /*mouse*/
        button1.onmousedown = function(evt) {       
            var sliderCoords = getCoords(slider);
            var betweenCoords = getCoords(between); 
            var buttonCoords1 = getCoords(button1);
            var buttonCoords2 = getCoords(button2);
            var shiftX2 = evt.pageX - buttonCoords2.left; 
            var shiftX1 = evt.pageX - buttonCoords1.left;
          
            document.onmousemove = function(evt) {
                var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                var right1 = slider.offsetWidth - button1.offsetWidth;
                if (left1 < 0) left1 = 0;
                if (left1 > right1) left1 = right1;
                button1.style.marginLeft = left1 + 'px';  
                
                
                        shiftX2 = evt.pageX - buttonCoords2.left; 
                var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                var right2 = slider.offsetWidth - button2.offsetWidth;
                if (left2 < 0) left2 = 0;
                if (left2 > right2) left2 = right2;            
                 
                    var per_min = 0;
                    var per_max = 0;
                if (left1 > left2)
                  {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                     
                    per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                    per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
                  }
                else
                  {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';                
                    
                    per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                    per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
                  }
                    inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                    inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
            
            };
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        };
        
      button2.onmousedown = function(evt) {       
            var sliderCoords = getCoords(slider);
            var betweenCoords = getCoords(between); 
            var buttonCoords1 = getCoords(button1);
            var buttonCoords2 = getCoords(button2);
            var shiftX2 = evt.pageX - buttonCoords2.left; 
            var shiftX1 = evt.pageX - buttonCoords1.left;
          
            document.onmousemove = function(evt) {
                var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                var right2 = slider.offsetWidth - button2.offsetWidth;
                if (left2 < 0) left2 = 0;
                if (left2 > right2) left2 = right2;
                button2.style.marginLeft = left2 + 'px';                      
              
              
                shiftX1 = evt.pageX - buttonCoords1.left; 
                var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                var right1 = slider.offsetWidth - button1.offsetWidth;  
                if (left1 < 0) left1 = 0;
                if (left1 > right1) left1 = right1;                      
                 
                    var per_min = 0;
                    var per_max = 0;
                    
                if (left1 > left2)
                  {
                    between.style.width = (left1-left2) + 'px';
                    between.style.marginLeft = left2 + 'px';
                    per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                    per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
                  }
                else
                  {
                    between.style.width = (left2-left1) + 'px';
                    between.style.marginLeft = left1 + 'px';
                    per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                    per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
                  }
                    inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                    inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
                
            };
            document.onmouseup = function() {
                document.onmousemove = document.onmouseup = null;
            };
            return false;
        };
        
        button1.ondragstart = function() {
            return false;
        };
        button2.ondragstart = function() {
            return false;
        };
    
        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
        }   
       
    }
    // Каталог скрытие и показ поля сортировки
    let closePanelButton = document.querySelector('.cl-btn-7');
    let hiddenSidePanel = document.querySelector('.side_panel');
    if(closePanelButton) {
        
        document.addEventListener('click', (event)=> {
            if(event.target.classList.contains('cl-btn-7')) {
                hiddenSidePanel.classList.remove('active')
            }
           
        })
    }
    let showHiddenPanel = document.querySelector('.show_hidden_panel');
    if(showHiddenPanel) {
        document.addEventListener('click', (event)=>{
            if(event.target.classList.contains('show_hidden_panel')) {
                hiddenSidePanel.classList.add('active');
            }
            
        })
    }
    // js карточки товара
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
    let cardTabsToggle = function(event) {
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

    // Слайдер в карточке товара 
    let cardSlide = function(event) {
        const cardMain = document.querySelector('.card_main');
        let addImages = cardMain.querySelectorAll('.additionalImage');
        let mainImages =  cardMain.querySelectorAll('.main');
        let addImContainer = cardMain.querySelectorAll('.addImCont')
        
        if(event.target.classList.contains('additionalImage')) {
            for(i=0; i<addImages.length; i++) {
                if(addImages[i].classList.contains('active')){
                    addImages[i].classList.remove('active');
                    mainImages[i].classList.remove('active');
                    addImContainer[i].classList.remove('active');
                }
                if(event.target === addImages[i]) {
                    addImages[i].classList.add('active');
                    mainImages[i].classList.add('active');
                    addImContainer[i].classList.add('active');
                }
            }
        }
        
    }
    if(card) {
        document.addEventListener('click', cardSlide);
    }
    // конец слайдера в карточке товара
    // конец js карточки товара
    // Начало js корзины
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
    // конец js корзины ----------------------------------------------------

})