var nml1 = ["","","","","","b","d","g","jh","k","l","m","n","r","s","sh","t","tr","th","thr","v"];
var nml2 = ["a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","aa","ae","ao","au"];
var nml3 = ["ch","d","dr","dh","g","gr","gh","gg","l","ll","lt","lth","lr","p","r","rg","rht","rk","rt","rd","rth","sh","sk","shr","sh","sl","t","th","tr","thr"];
var nml4 = ["a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","y","a","e","i","o","u","a","e","i","o","u","ea","ua","ae","ia","aa","ao"];
var nml5 = ["c","g","gr","gn","k","kh","kr","r","rr","s","ss","sr","st","str","t","th","tr"];
var nml6 = ["","","","","","","","ch","k","n","nd","nk","nt","r","rd","rk","rt","rth","s","ss","sh","sj","sk","t","th","v","x"];

var br = "";


function nameGenLizardfolk(){
var nMsLizard = "";
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nml1.length | 0;
	rnd2 = Math.random() * nml2.length | 0;
	rnd3 = Math.random() * nml6.length | 0;
	if(i < 2){
		if(rnd < 5){
			while(nml6[rnd3] === nml1[rnd]){
				rnd3 = Math.random() * nml6.length | 0;
			}
		}
		nMsLizard = nml1[rnd] + nml2[rnd2] + nml6[rnd3];
	}else{
		rnd4 = Math.random() * nml3.length | 0;
		rnd5 = Math.random() * nml4.length | 0;
		while(nml3[rnd4] === nml1[rnd] || nml3[rnd4] === nml6[rnd3]){
			rnd4 = Math.random() * nml3.length | 0;
		}
		if(i < 7){
			nMsLizard = nml1[rnd] + nml2[rnd2] + nml3[rnd4] + nml4[rnd5] + nml6[rnd3];
		}else{
			rnd6 = Math.random() * nml2.length | 0;
			rnd7 = Math.random() * nml5.length | 0;
			while(nml5[rnd7] === nml3[rnd4] || nml5[rnd7] === nml6[rnd3]){
				rnd7 = Math.random() * nml5.length | 0;
			}
			nMsLizard = nml1[rnd] + nml2[rnd2] + nml3[rnd4] + nml2[rnd6] + nml5[rnd7] + nml4[rnd5] + nml6[rnd3];
		}
	}
		return nMsLizard
	}
}