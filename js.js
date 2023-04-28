let h3 = document.createElement('h3');
h3.innerText = 'Клавиатура создана в операционной системе Windows \n Для переключения языка комбинация: левыe shift + alt';
document.body.appendChild(h3);

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
let lang = 'eng';
let leter = 'lower';
let textbox = document.createElement('textarea');
document.body.appendChild(textbox);



async function main() {
    let data = await fetch("main.json");
    let json = await data.json();
    create__btn(json);
    document.addEventListener('keydown', function(event) {
        if (event.shiftKey && event.altKey){
            change_language(json);
        }
        if (event.shiftKey){
            if (leter == 'upper'){
                noShift(json);
            }else{
                press_shift(json);
                document.getElementById(event.code).classList.add('active');
            }
        }
        if (event.code == 'CapsLock'){
            if (leter == 'lower'){
                leter = 'upper';
                upper_case(json);
                document.getElementById(event.code).classList.add('active');
            }else{
                leter = 'lower';
                lower_case(json);
            }
        }


        
    });
    

    document.addEventListener('keyup', function(event) {
        if (event.code == 'ShiftLeft' || event.code == 'ShiftRight'){
            if (leter == 'upper'){
                noShift(json);
                upper_case(json);
            }else{
                noShift(json);
            }
        }

        
    });
    click_input(json);
}

function create__btn(json){
    for(let i=0; i<json.length; i++){
        let btn = document.createElement('button');
        btn.innerText = json[i].eng;
        btn.id = json[i].name;
        keyboard.appendChild(btn);
    }
    document.body.appendChild(keyboard);
}

function change_language(json){
    if(lang == 'eng'){
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].rus==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].rus;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
        lang = 'rus';
    }else{
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            btn.innerText = json[i].eng;
            btn.id = json[i].name;
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
        lang = 'eng';
    }
    click_input(json);
}

function press_shift(json){
    if(lang == 'rus'){
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].rusShift==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].rusShift;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }else{
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].engShift==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].engShift;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }
    click_input(json);
}

function noShift(json){
    if(lang == 'rus'){
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].rus==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].rus;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }else{
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            btn.innerText = json[i].eng;
            btn.id = json[i].name;
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }
    click_input(json);
}

function upper_case(json){
    if(lang == 'rus'){
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].rusCap==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].rusCap;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }else{
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].engCap==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].engCap;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }
    click_input(json);
}

function lower_case(json){
    if(lang == 'rus'){
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            if (json[i].rus==undefined){
                btn.innerText = json[i].eng;
                btn.id = json[i].name;
            }else{
                btn.innerText = json[i].rus;
                btn.id = json[i].name;
            }
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }else{
        document.body.removeChild(keyboard);
        keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        for(let i=0; i<json.length; i++){
            let btn = document.createElement('button');
            btn.innerText = json[i].eng;
            btn.id = json[i].name;
            keyboard.appendChild(btn);
        }
        document.body.appendChild(keyboard);
    }
    click_input(json);
}

main();





function click_input(json){
    keyboard.addEventListener('click',(e) => {
        if (e.target.innerText.length == 1){
            textbox.value += e.target.innerText;
        }else if(e.target.innerText == 0){
            textbox.value += ' ';
        }else if(e.target.innerText == 'Tab'){
            textbox.value += '\t';
        }else if(e.target.innerText == 'CapsLock'){
            if (leter == 'lower'){
                leter = 'upper';
                upper_case(json);
                e.target.classList.add('active');
            }else{
                leter = 'lower';
                lower_case(json);
                e.target.classList.remove('active');
            }
        }else if(e.target.innerText == 'Enter'){
            textbox.value += '\n';
        }else if(e.target.innerText == 'BackSpace'){
            let index = getCaret(textbox);
            if (index != 0){
                str = textbox.value.split("");
                str = str.slice(0,index-1).concat(str.slice(index));
                textbox.value = str.join("");
                textbox.focus();
                textbox.setSelectionRange(index-1, index-1);
            }
        }else if(e.target.innerText == 'Del'){
            let index = getCaret(textbox);
            if (index != textbox.value.length){
                str = textbox.value.split("");
                str = str.slice(0,index).concat(str.slice(index+1));
                textbox.value = str.join("");
                textbox.focus();
                textbox.setSelectionRange(index, index);
            }
        }
    });
    keyboard.addEventListener('mousedown',(e) => {
        if(e.target.innerText == 'Shift'){
            press_shift(json);
            e.target.classList.add('active');
        }
    });
    keyboard.addEventListener('mouseup',(e) => {
        if(e.target.innerText == 'Shift'){
            e.target.classList.remove('active');
            noShift(json);
        }
    });
    
}







document.addEventListener('keydown', function(event) {
    event.preventDefault();
    document.getElementById(event.code).classList.add('active');
    if(document.getElementById(event.code).innerText.length == 1){
        textbox.value += document.getElementById(event.code).innerText;
    }else if(document.getElementById(event.code).innerText.length == 0){
        textbox.value += ' ';
    }else if(document.getElementById(event.code).innerText == 'BackSpace'){
        let index = getCaret(textbox);
        if (index != 0){
            str = textbox.value.split("");
            str = str.slice(0,index-1).concat(str.slice(index));
            textbox.value = str.join("");
            textbox.focus();
            textbox.setSelectionRange(index-1, index-1);
        }
    }else if(document.getElementById(event.code).innerText == 'Del'){
        let index = getCaret(textbox);
        if (index != textbox.value.length){
            str = textbox.value.split("");
            str = str.slice(0,index).concat(str.slice(index+1));
            textbox.value = str.join("");
            textbox.focus();
            textbox.setSelectionRange(index, index);
        }
    }else if(document.getElementById(event.code).innerText == 'Enter'){
        textbox.value += '\n';
    }else if(document.getElementById(event.code).innerText == 'Tab'){
        textbox.value += '\t';
    }
});

document.addEventListener('keyup', function(event) {
    document.getElementById(event.code).classList.remove('active');
    
});



function getCaret(el)
{
  if (el.selectionStart) {return el.selectionStart;}
  else if (document.selection)
          { el.focus();
            var r = document.selection.createRange();
            if (r == null) {return 0;}
            var re = el.createTextRange(),
            rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);
            return rc.text.length;
          } 
  return 0;
}