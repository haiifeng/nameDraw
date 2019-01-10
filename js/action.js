/**
 * 哗啦啦抽奖小程序
 * 抽中名字后该字符串即删掉。
 */
let mytime = null;
let nameList=Array.from(Array(400), (v,k) =>k);
let selected=nameList.length;
let timer=null,flag=true;
let bt = document.querySelector("#bt"); 

const doit=() => {  
    if (mytime == null) {
        bt.innerHTML = "停止抽奖";
        show();
    } else {
        bt.innerHTML = "开始抽奖";
        clearTimeout(mytime);
        clearTimeout(timer);
        nameList.splice(selected,1);
        if(nameList.length===0){
            nameList=['哗啦啦']
        }
        mytime = null;
    }
}

const show = ()=> {
    let box = document.querySelector("#box");
    let num = Math.floor( Math.random() * nameList.length );
    box.innerHTML = nameList[num];
    mytime = setTimeout("show()", 1);
    selected=num;
}

const spaceClick =(e) => {
    timer=setTimeout(function(){flag=true;},3000);
    if(flag){
        let keynum = window.event ? e.keyCode : e.which;
        if(keynum=='32'){
            doit();
            flag=false;
        }
    }
}

window.addEventListener('keydown',spaceClick)