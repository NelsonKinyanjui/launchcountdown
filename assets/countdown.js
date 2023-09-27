for(i = 10; 10 > i; i-- ){
    let output = document.querySelector('.output');
output.innerHTML = '';

    
    if(i === 10){
        const para = document.createElement('p');
    output.appendChild(para);
        para.textContent = 'Countdown 10';

    }
    else if(i === 0){
        const para = document.createElement('p');
    output.appendChild(para);
        para.textContent ='Blast off!';
    }

    else{ 
        const para = document.createElement('p');
    output.appendChild(para);
        para.textContent = i;
    }

}