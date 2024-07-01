//Setting the choose screen to be visible
let choose1=document.getElementById('choose1');
let choose2=document.getElementById('choose2');
choose1.style.display = 'flex';
choose2.style.display = 'flex';

//Selecting the item for player 1 and player 2
let selectedText1=document.getElementById('chosen1');
let selectedText2=document.getElementById('chosen2');
let selectedSection1 = document.getElementById('selected1');
let selectedSection2= document.getElementById('selected2');
let selectedItem1 = document.getElementById('selected_item1');
let selectedItem2 = document.getElementById('selected_item2');
let item1;
let item2;
let finishAnimationScreen ='false';

function chosen_text1(item){
    choose1.style.display ='none';
    selectedSection1.style.display = 'flex';
    selectedText1.style.display ='block'; 
    selectedItem1.style.display='none';
    item1=item;
    console.log(`Player 1 has chosen ${item}`);
    detectInput();
}

function chosen_text2(item){
    choose2.style.display ='none';
    selectedSection2.style.display='flex';
    selectedText2.style.display ='block'; 
    selectedItem2.style.display='none';
    item2=item;
    console.log(`Player 2 has chosen ${item}`);
    detectInput();
}

//Detects if both players have chosen and displays outputs
let winSentence = document.getElementById('winner');
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

let detectInput = async () =>{
    if((item1 == '✊' || item1 == '✋' || item1 == '✌️') && (item2 == '✌️' || item2 == '✊' || item2=='✋')){
        loadScreen();
        let delayres = await delay(2000);
        outputScreen();
        let winner = winCond(item1,item2);
        if(winner=='draw'){
            winSentence.textContent = 'It was a Draw';
        } else {
            winSentence.textContent = `${winner} has Won`;
        }
    }
}

//animation screen
let animationSection = document.getElementById('animation')
function loadScreen(){
    selectedText1.style.display='none';
    selectedText2.style.display='none';
    animationSection.style.display='flex';
}

//Output screen
let rock1s = document.getElementById('rock1s');
let paper1s = document.getElementById('paper1s');
let scissor1s = document.getElementById('scissor1s');
let rock2s = document.getElementById('rock2s');
let paper2s = document.getElementById('paper2s');
let scissor2s = document.getElementById('scissor2s');
function outputScreen(){
    animationSection.style.display='none';
    selectedItem1.style.display='block';
    selectedItem2.style.display='block';
    if(item1 == '✊'){
        rock1s.style.transform = 'rotateY(180deg) rotateZ(-80deg)';
        paper1s.style.display='none';
        scissor1s.style.display='none';
    } else if(item1 =='✋'){
        paper1s.style.transform = 'rotateY(180deg) rotateZ(-80deg)';
        scissor1s.style.display='none';
        rock1s.style.display='none';
    } else if(item1 =='✌️'){
        scissor1s.style.transform = 'rotateY(180deg) rotateZ(-80deg)';
        paper1s.style.display='none';
        rock1s.style.display='none';
    }
    if(item2 == '✊'){
        rock2s.style.transform = 'rotateZ(-80deg)';
        paper2s.style.display='none';
        scissor2s.style.display='none';
    } else if(item2 =='✋'){
        paper2s.style.transform = 'rotateZ(-80deg)';
        scissor2s.style.display='none';
        rock2s.style.display='none';
    } else if(item2 =='✌️'){
        scissor2s.style.transform = 'rotateZ(-80deg)';
        paper2s.style.display='none';
        rock2s.style.display='none';
    }
}

//Computes the winner
let winCond = (item1,item2) =>{
    if(item1==item2){
        return 'draw';
    } else if(item1 == '✊'){
        if(item2 == '✋'){
            return 'Player 2';
        } else {
            return 'Player 1';
        }
    } else if(item1 == '✋'){
        if(item2 == '✌️'){
            return 'Player 2';
        } else {
            return 'Player 1';
        }
    } else if(item1 == '✌️'){
        if(item2 == '✊'){
            return 'Player 2';
        } else {
            return 'Player 1';
        }
    }
}

//Reset Button
let resetBtn = document.getElementById('button');
let reset = () => {
    history.go(0);
}
resetBtn.addEventListener('click',reset);