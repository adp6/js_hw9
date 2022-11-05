window.onload = ()=> {
    let fragment = document.createDocumentFragment();
    let body = document.querySelector('body');
    function divs() {
        let divContain = document.createElement("div");
        divContain.setAttribute('style', 'display:inline-block; width:50%;');
        fragment.appendChild(divContain);
        body.appendChild(fragment);
        for(let i = 0; i!=100; i++){
            let div = document.createElement("div");
            div.setAttribute('style', 'display:inline-block; border:2px solid black; width:50px; height:50px;')
            fragment.appendChild(div);
            divContain.appendChild(fragment);
            div.onclick = ()=>{
                div.style.backgroundColor = 'red';
            }
        }
        
    }
    divs()
    function modalWindow() {
        let btn = document.createElement('button');
        let divContain = document.createElement("div");
        fragment.appendChild(divContain);
        body.appendChild(fragment);
        btn.innerHTML = 'open modal window';
        fragment.appendChild(btn);
        divContain.appendChild(fragment);
        let divWindow = document.createElement('div');
        divWindow.classList.add('hide');
        fragment.appendChild(divWindow);
        divContain.appendChild(fragment);
        divWindow.classList.add('overlay');
        let divModal = document.createElement('div');
        divModal.classList.add('modal');
        divModal.classList.add('hide')
        fragment.appendChild(divModal);
        divContain.appendChild(fragment);
        let divClose = document.createElement('div');
        divClose.classList.add('close')
        divModal.innerHTML = 'modal window';
        fragment.appendChild(divClose);
        divModal.appendChild(fragment);
        let btnNew = document.createElement('button');
        btnNew.innerHTML = 'close';
        btnNew.addEventListener('click', close, false)
        divWindow.addEventListener('click', close,false)
        fragment.appendChild(btnNew);
        divClose.appendChild(btnNew);
        btn.onclick = (close);
       
        function close() {
            divWindow.classList.toggle('hide');
            divModal.classList.toggle('hide')
        }
    }
    modalWindow()


    let divMain = document.querySelector('.window-slider')
    let path = ['image/gosling.jpg', 'image/homelander.jpg', 'image/img.png']
    for (let i = 0; i<path.length; i++) {
        let windowImg = document.createElement('div');
        fragment.appendChild(windowImg);
        divMain.appendChild(fragment);
        let img = document.createElement('img');
        img.setAttribute('style', "width:100%; border: 2px solid white; display: flex; height: 300px;")
        img.setAttribute('src', path[i])
        windowImg.setAttribute('id', `img${i}`)
        fragment.appendChild(img);
        windowImg.appendChild(fragment);
        if(i>0) {
            windowImg.classList.add('hide')
        }
    }
    let i = 0;
    let btnLeft = document.querySelector('.arrow-left')
    let btnRight = document.querySelector('.arrow-right')
        function lClick(){
            i--
            if(i < 0){
                i = 0;
            }
            else {
                document.querySelector(`#img${i+1}`).classList.add('hide')
                document.querySelector(`#img${i}`).classList.remove('hide')
            }    
        }; 
        
        function rClick(){
            i++
            if(i > path.length - 1){
                i=0
                document.querySelector(`#img${path.length-1}`).classList.add('hide')
                document.querySelector(`#img${i}`).classList.remove('hide')
                document.querySelector(`#img${i}`).classList.add('hideImg')
            }
            else{
                document.querySelector(`#img${i-1}`).classList.add('hide')
                document.querySelector(`#img${i}`).classList.remove('hide')
                document.querySelector(`#img${i}`).classList.add('hideImg')
            }
        }
        function slider(){
            setInterval(rClick,2000)
        }
        slider()
        
        
            

  

   function move(){
        let divMove = document.querySelector('.move');
        let btnDown = document.querySelector('#down');
        let btnUp = document.querySelector('#up');
        let btnRight = document.querySelector('#right');
        let btnLeft = document.querySelector('#left');
        let pxVertical = 0;
        let pxHorizontal = 200;
        btnDown.onclick = ()=>{
            pxVertical +=15
            divMove.style.top = `${pxVertical}px`;
        }
        btnUp.onclick = ()=>{
            pxVertical -=15
            divMove.style.top = `${pxVertical}px`;
        }
        btnRight.onclick = ()=>{
            pxHorizontal +=15
            divMove.style.left = `${pxHorizontal}px`
        }
        btnLeft.onclick = ()=>{
            pxHorizontal -=15
            divMove.style.left = `${pxHorizontal}px`
        }
   }
   move()
}