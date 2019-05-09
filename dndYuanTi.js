var nmy1 = ["","","","","","h","m","n","s","sh","ss","ssh","sz","t","th","y","z","zh","zs"];
var nmy2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oa","ui"];
var nmy3 = ["h","hl","htl","hl","hs","hsh","k","kh","kl","ktl","ks","l","lk","ls","ltl","lts","lsh","m","n","s","sh","ss","st","stl","sz","sk","t","tl","ts","tsh","tsz","tz","tstl","zs","zh","zsh","zt","ztl"];
var nmy4 = ["h","hs","hl","l","ll","s","sh","ss","shl","t","th","y","z","zh"];
var nmy5 = ["a","i","u","a","i","u","a","i","u","a","i","u","a","i","u","a","i","u","ie","ia","ei","ee","iu","ui"];
var nmy6 = ["","","","","","","","","h","h","l","ll","s","ss","sh"];

var br = "";	


function nameGenYuanTi(type){
	var tp = type;
var nMsYuan = "";

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nmy1.length | 0;
		rnd2 = Math.random() * nmy2.length | 0;
		rnd3 = Math.random() * nmy3.length | 0;
		rnd4 = Math.random() * nmy5.length | 0;
		rnd5 = Math.random() * nmy6.length | 0;
		if(i < 6){
			while(nmy1[rnd] === nmy3[rnd3] || nmy3[rnd3] === nmy6[rnd5]){
				rnd3 = Math.random() * nmy3.length | 0;
			}
			nMsYuan = nmy1[rnd] + nmy2[rnd2] + nmy3[rnd3] + nmy5[rnd4] + nmy6[rnd5];
		}else{
			rnd6 = Math.random() * nmy4.length | 0;
			rnd7 = Math.random() * nmy2.length | 0;
			while(nmy3[rnd4] === nmy4[rnd6] || nmy4[rnd6] === nmy6[rnd5]){
				rnd6 = Math.random() * nmy4.length | 0;
			}
			nMsYuan = nmy1[rnd] + nmy2[rnd2] + nmy3[rnd3] + nmy2[rnd7] + nmy4[rnd6] + nmy5[rnd4] + nmy6[rnd5];
		}
			return nMsYuan
	}
}