var nmk1 = ["","","","","d","g","h","k","m","n","r","s","sn","t","v","z"];
var nmk2 = ["a","e","i","o","u"];
var nmk3 = ["b","bl","d","dr","g","gg","gl","gn","gr","hz","hr","hl","hs","k","kk","kr","kl","kb","kd","l","ld","lb","lt","ll","lp","lg","p","pl","pp","r","rt","rp","rb","rk","t","tr","tl","v","vl","vn"];
var nmk4 = ["","","","","","d","g","gs","k","ks","m","n","r","rn","s","ss","tt","v","x"];

var br = "";

function nameGenKobold(){
var nMsKobold = "";
var namesKobald = "";

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nmk1.length | 0;
	rnd2 = Math.random() * nmk2.length | 0;
	rnd4 = Math.random() * nmk4.length | 0;
	if(i < 4){
		while(rnd < 4){
			rnd = Math.random() * nmk1.length | 0;
		}
		while(rnd4 < 5 || nmk4[rnd4] === nmk1[rnd]){
			rnd4 = Math.random() * nmk4.length | 0;
		}
		nMsKobold = nmk1[rnd] + nmk2[rnd2] + nmk4[rnd4];
	}else{
		rnd3 = Math.random() * nmk3.length | 0;
		rnd5 = Math.random() * nmk2.length | 0;
		if(rnd < 4){
			while(rnd4 < 5){
				rnd4 = Math.random() * nmk4.length | 0;
			}
		}
		while(nmk3[rnd3] === nmk1[rnd] || nmk3[rnd3] === nmk4[rnd4]){
			rnd3 = Math.random() * nmk3.length | 0;
		}
		nMsKobold = nmk1[rnd] + nmk2[rnd2] + nmk3[rnd3] + nmk2[rnd5] + nmk4[rnd2];
	}
		namesKobald = nMsKobold;
		return nMsKobold
	}
}

