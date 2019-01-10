/**
 * 哗啦啦抽奖小程序
 * 抽中名字后该字符串即删掉
 * 开始3秒内不能再次点击，结束三秒内不能再点击
 */

const bt = window.document.getElementById("bt");
const box = window.document.getElementById("box");
const au = window.document.getElementById("au");
const changeList = window.document.getElementById("changeList");
const nameTitle = window.document.getElementById("nameTitle");
let mytime,nameList,selected,tempList=SpecialAward;
let timer=null,flag=true;

const init=(list)=>{
    mytime = null;
    nameList=list;
    selected=list.length;
    console.log('初始化名单',list);
}

const doit=()=> {
    if (mytime == null) {
        bt.innerHTML = "停止抽奖";
        au.play();
        show();
    } else {
        bt.innerHTML = "开始抽奖";
        clearTimeout(mytime);
        clearTimeout(timer);
        nameList.splice(selected,1);
        console.log('某次名单',nameList);
        if(nameList.length===0){
            nameList=['哗啦啦']
        }
        mytime = null;
        au.load();
    }
}

const show=()=> {
    let num = Math.floor((Math.random() * Math.random()*10000000000000)) % nameList.length;
    box.innerHTML = nameList[num];
    mytime = setTimeout("show()", 1);
    selected=num;
}

const spaceClick=e=> {
    timer=setTimeout(function(){flag=true;},3000);
    if(flag){
        let keynum = window.event ? e.keyCode : e.which;
        if(keynum=='32'){
            doit();
            flag=false;
        }
    }
}

init(NameList);

window.addEventListener('keydown',spaceClick)
changeList.addEventListener('click',()=>{
    let temp=nameList;
    init(tempList);
    tempList=temp;
    box.innerHTML="GO !"
    nameTitle.innerHTML="年会大抽奖(特等奖)"
})