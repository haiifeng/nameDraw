/**
 * 哗啦啦年会抽奖名单
 * 共计	354
 */
// const nameList=[];
const Center=[1,2,3,4];
const Finance=[11,22,33,44];
const Administration=[21,22,23,34];
const Personnel=[31,32,33,34];
const InWard=[41,42,43,44]

//总名单
const NameList=[].concat(Center,Finance,Administration,Personnel,InWard);

//特等奖 
const SpecialAward=[].concat(Center);


//打乱顺序,不再按照部门顺序,按照名字最后一个字的unicode编码值大小来比较。
// nameList.sort((a,b)=>{return a[a.length-1]-b[b.length-1]>0?-1:1});
// 洗牌算法
Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}
NameList.shuffle();
SpecialAward.shuffle();