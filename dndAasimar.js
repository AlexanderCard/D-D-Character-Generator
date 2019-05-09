var nmaa1 = ["", "", "", "", "b", "br", "c", "cr", "h", "l", "m", "n", "p", "r", "t", "v", "w", "z"];
var nmaa2 = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "y", "au", "ai", "ea", "ei"];
var nmaa3 = ["d", "dr", "g", "gg", "gr", "gw", "k", "kr", "kl", "l", "ld", "lg", "lw", "lr", "lt", "n", "nr", "nw", "nl", "r", "rn", "rr", "rw", "rl", "v", "vr", "w"];
var nmaa4 = ["a", "i", "a", "i", "a", "i", "a", "i", "a", "i", "a", "i", "e", "a", "i", "e", "a", "i", "e", "o", "o", "u", "u", "ee", "ia", "ie", "ai", "ei"];
var nmaa5 = ["d", "l", "m", "n", "t", "v"];
var nmaa6 = ["l", "m", "n", "nt", "r"];

var nmaa7 = ["", "", "", "", "", "br", "d", "dr", "h", "l", "m", "n", "ph", "r", "rh", "th", "v", "w", "z"];
var nmaa8 = ["a", "i", "o", "a", "i", "o", "a", "i", "o", "a", "i", "o", "a", "i", "o", "a", "i", "o", "e", "e", "ia", "io", "ea", "eo"];
var nmaa9 = ["d", "j", "l", "ld", "ldr", "lv", "ll", "lt", "m", "mm", "mn", "n", "nr", "nv", "nl", "ndr", "nm", "r", "rd", "rk", "rs", "s", "sr", "sl", "v"];
var nmaa10 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "ea", "ia", "ie"];
var nmaa11 = ["l", "m", "n", "r", "s", "z"];
var nmaa12 = ["a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "a", "e", "i", "au", "ou", "oe"];
var nmaa13 = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "h", "l", "m", "n", "r"];

var br = "";


function nameGenAasimar(type) {
	var tp = type;
	var nMsa = ""
	for (i = 0; i < 10; i++) {
		if (tp === 1) {
			rnd = Math.random() * nmaa7.length | 0;
			rnd2 = Math.random() * nmaa8.length | 0;
			rnd3 = Math.random() * nmaa9.length | 0;
			rnd4 = Math.random() * nmaa10.length | 0;
			rnd5 = Math.random() * nmaa13.length | 0;
			if (i < 6) {
				while (nmaa9[rnd3] === nmaa7[rnd] || nmaa9[rnd3] === nmaa13[rnd5]) {
					rnd3 = Math.random() * nmaa9.length | 0;
				}
				nMsa = nmaa7[rnd] + nmaa8[rnd2] + nmaa9[rnd3] + nmaa10[rnd4] + nmaa13[rnd5];
			} else {
				rnd6 = Math.random() * nmaa11.length | 0;
				rnd7 = Math.random() * nmaa12.length | 0;
				while (nmaa11[rnd6] === nmaa9[rnd3] || nmaa11[rnd6] === nmaa13[rnd5]) {
					rnd6 = Math.random() * nmaa11.length | 0;
				}
				nMsa = nmaa7[rnd] + nmaa8[rnd2] + nmaa9[rnd3] + nmaa10[rnd4] + nmaa11[rnd6] + nmaa12[rnd7] + nmaa13[rnd5];
			}
		} else {
			rnd = Math.random() * nmaa1.length | 0;
			rnd2 = Math.random() * nmaa2.length | 0;
			rnd3 = Math.random() * nmaa3.length | 0;
			rnd4 = Math.random() * nmaa4.length | 0;
			rnd5 = Math.random() * nmaa6.length | 0;
			if (i < 6) {
				while (nmaa3[rnd3] === nmaa1[rnd] || nmaa3[rnd3] === nmaa6[rnd5]) {
					rnd3 = Math.random() * nmaa3.length | 0;
				}
				nMsa = nmaa1[rnd] + nmaa2[rnd2] + nmaa3[rnd3] + nmaa4[rnd4] + nmaa6[rnd5];
			} else {
				rnd6 = Math.random() * nmaa5.length | 0;
				rnd7 = Math.random() * nmaa4.length | 0;
				while (nmaa5[rnd6] === nmaa3[rnd3] || nmaa5[rnd6] === nmaa6[rnd5]) {
					rnd6 = Math.random() * nmaa5.length | 0;
				}
				nMsa = nmaa1[rnd] + nmaa2[rnd2] + nmaa3[rnd3] + nmaa4[rnd4] + nmaa5[rnd6] + nmaa4[rnd7] + nmaa6[rnd5];
			}
		}
		return nMsa
	}
}
