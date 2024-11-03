const sound0 = document.querySelector('#sound0');
const sound1 = document.querySelector('#sound1');
const sound2 = document.querySelector('#sound2');
const sound3 = document.querySelector('#sound3');
const sound4 = document.querySelector('#sound4');
const sound5 = document.querySelector('#sound5');
const sound6 = document.querySelector('#sound6');
const sound7 = document.querySelector('#sound7');
const sound8 = document.querySelector('#sound8');
const sound9 = document.querySelector('#sound9');
const sound10 = document.querySelector('#sound10');
const sound11 = document.querySelector('#sound11');
const sound12 = document.querySelector('#sound12');
const sound13 = document.querySelector('#sound13');    

function playSound(number){
    if(typeof number == 'number'){
        stopSound();
        if(number == 0){
            sound0.play();
        }else if(number == 1){
            sound1.play();
        }else if(number == 2){
            sound2.play();
        }else if(number == 3){
            sound3.play();
        }else if(number == 4){
            sound4.play();
        }else if(number == 5){
            sound5.play();
        }else if(number == 6){
            sound6.play();
        }else if(number == 7){
            sound7.play();
        }else if(number == 8){
            sound8.play();
        }else if(number == 9){
            sound9.play();
        }else if(number == 10){
            sound10.play();
        }else if(number == 11){
            sound11.play();
        }else if(number == 12){
            sound12.play();
        }else if(number == 13){
            sound13.play();
        }
    }
}

function stopSound(){
    sound0.pause();
    sound0.currentTime = 0;
    sound1.pause();
    sound1.currentTime = 0;
    sound2.pause();
    sound2.currentTime = 0;
    sound3.pause();
    sound3.currentTime = 0;
    sound4.pause();
    sound4.currentTime = 0;
    sound5.pause();
    sound5.currentTime = 0;
    sound6.pause();
    sound6.currentTime = 0;
    sound7.pause();
    sound7.currentTime = 0;
    sound8.pause();
    sound8.currentTime = 0;
    sound9.pause();
    sound9.currentTime = 0;
    sound10.pause();
    sound10.currentTime = 0;
    sound11.pause();
    sound11.currentTime = 0;
    sound12.pause();
    sound12.currentTime = 0;
    sound13.pause();
    sound13.currentTime = 0;
}