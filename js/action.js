/**
 * 哗啦啦抽奖小程序
 * 抽中名字后该字符串即删掉。
 */
let mytime = null;
let nameList=Array.from(Array(400), (v,k) =>k);
let selected=nameList.length;

const doit=() => {
    let bt = document.querySelector("#bt");
    if (mytime == null) {
        bt.innerHTML = "停止抽奖";
        show();
    } else {
        bt.innerHTML = "开始抽奖";
        clearTimeout(mytime);
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
    console.log(num,nameList);
    mytime = setTimeout("show()", 1);
    selected=num;
}

const spaceClick =(e) => {
    var keynum = window.event ? e.keyCode : e.which;
    if(keynum=='32'){
        doit();
    }
}

window.addEventListener('keydown',spaceClick)