/**
 * 哗啦啦抽奖小程序
 * 抽中名字后该字符串即删掉。
 */

var mytime = null;
var selected=nameList.length;

function doit() {
    var bt = window.document.getElementById("bt");
    if (mytime == null) {
        bt.innerHTML = "停止抽奖";
        show();
    } else {
        bt.innerHTML = "开始抽奖";
        clearTimeout(mytime);
        nameList.splice(selected,1);
        mytime = null;
    }
}

function show() {
    var box = window.document.getElementById("box");
    var num = Math.floor( Math.random() * nameList.length );
    box.innerHTML = nameList[num];
    mytime = setTimeout("show()", 1);
    selected=num;
}

function spaceClick(e) {
    var keynum = window.event ? e.keyCode : e.which;
    if(keynum=='32'){
        doit();
    }
}

window.addEventListener('keydown',spaceClick)