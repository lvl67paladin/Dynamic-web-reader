let cog = document.getElementById('wheel');
let settings = document.getElementById('settings');
const body = document.getElementById('body');
let text = document.getElementById('text');
let fonts = document.getElementById('fonts');
let fsize = document.getElementById('size');
let flabel = document.getElementById('fontlabel');
let theme = document.getElementById('theme');

let arrow = document.getElementById('arrow');
let weight = document.getElementById('fontweight');


let changeobj = {
    changeBgColor(color){
        body.style.backgroundColor=color;
    },
    changeFgColor(color){
        text.style.color=color;
    },
    changeFontFamily(fontFamily){
        text.style.fontFamily=fontFamily.value;
    },
    changeFontWeight(weight){
        text.style.fontWeight=weight.value;
    },
    changeFontSize(size){
        //change font size in px
        text.style.fontSize=size.value+"px";
    }
  };
arrow.onclick=()=>{
    arrow.style.transform="rotate(90deg)";
};


theme.onchange=()=>{
    if(theme.value=="dark"){
        changeobj.changeBgColor("black");
        changeobj.changeFgColor("white");
    }
    else if(theme.value=="light"){
        changeobj.changeBgColor("white");
        changeobj.changeFgColor("black");
        
    }
    else if(theme.value=="sunset"){
        changeobj.changeBgColor("#f54c2f"); 
        changeobj.changeFgColor("#d4c02a")
    }
};

fonts.onchange=()=>{
    changeobj.changeFontFamily(fonts);
};

fsize.onchange=()=>{
    changeobj.changeFontSize(fsize);
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

weight.onchange = () => {
    //text.style.fontWeight=weight.value;
    changeobj.changeFontWeight(weight);
};

/* to hide settings when user clicks outside of settings*/
text.onclick = () => {
    settings.style.display= "none"
};