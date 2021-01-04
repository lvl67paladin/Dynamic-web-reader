let cog = document.getElementById('wheel');
let settings = document.getElementById('settings');
let body = document.getElementById('body');

let text = document.getElementById('text');
let fonts = document.getElementById('fonts');
let fsize = document.getElementById('size');
let flabel = document.getElementById('fontlabel');
let theme = document.getElementById('theme');

let arrow = document.getElementById('arrow');

arrow.onclick=()=>{
    arrow.style.transform="rotate(90deg)";
};


theme.onchange=()=>{
    if(theme.value=="dark"){
    body.style.backgroundColor="black";
    text.style.color="white";
    
    
    }
    else if(theme.value=="light"){
        body.style.backgroundColor="white";
        text.style.color="black";
        
    }
    else if(theme.value=="sunset"){
        body.style.backgroundColor="#f54c2f"; 
        text.style.color="#d4c02a";
    }
};

fonts.onchange=()=>{
    text.style.fontFamily=fonts.value;
    
};

fsize.onchange=()=>{
    text.style.fontSize = fsize.value+"px";
    flabel.innerHTML="Font size:"+fsize.value;
};

let clicked = 0
let settingsfun = () =>{
    
    if(clicked==0){
    cog.style.transform = "rotate(90deg)";
    settings.style.display = "block";
    clicked=1;
    }
    else{
        settings.style.display = "none";
        clicked=0;
    }
};
cog.addEventListener('click', settingsfun);
/* to hide settings when user clicks outside of settings*/


text.onclick = () => {
    settings.style.display= "none"
};