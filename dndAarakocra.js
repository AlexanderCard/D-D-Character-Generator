var nma1 = ["","","","","","c","cl","cr","d","g","gr","h","k","kh","kl","kr","q","qh","ql","qr","r","rh","s","y","z"];
var nma1 = ["a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","a","e","i","u","ae","aia","ee","oo","ou","ua","uie"];
var nma3 = ["c","cc","k","kk","l","ll","q","r","rr"];
var nma4 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","aa","ea","ee","ia","ie"];
var nma5 = ["","","","","c","ck","d","f","g","hk","k","l","r","rr","rc","rk","rrk","s","ss"];

var br = "";


function nameGenAarakocra(){
	var nMsaa = "";
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nma1.length | 0;
	rnd2 = Math.random() * nma1.length | 0;
	rnd3 = Math.random() * nma5.length | 0;
	if(i < 5){
		while(nma1[rnd] === nma5[rnd3]){
			rnd3 = Math.random() * nma5.length | 0;
		}
		nMsaa = nma1[rnd] + nma1[rnd2] + nma5[rnd3];
	}else{
		rnd4 = Math.random() * nma3.length | 0;
		rnd5 = Math.random() * nma4.length | 0;
		nMsaa = nma1[rnd] + nma1[rnd2] + nma3[rnd4] + nma4[rnd5] + nma5[rnd3];
	}
	return nMsaa
	}
}