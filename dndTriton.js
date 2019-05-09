var nmtr1 = ["c", "d", "dh", "j", "jh", "k", "kh", "m", "n", "r", "v", "z"];
var nmtr2 = ["a", "e", "i", "o", "u"];
var nmtr3 = ["d", "dd", "g", "gl", "hn", "hl", "hr", "l", "lg", "lm", "ld", "ln", "lz", "m", "mn", "mr", "n", "nn", "nd", "nl", "nr", "nv", "r", "rl", "rn", "rv", "rz", "v", "vn", "z"];

var nmtr4 = ["", "", "", "", "", "", "", "", "b", "bh", "d", "dh", "f", "fl", "h", "l", "m", "n", "s", "sh", "vl", "w", "wh", "y"];
var nmtr5 = ["a", "e", "o", "u", "a", "e", "o", "u", "i"];
var nmtr6 = ["d", "dd", "dr", "gr", "gl", "hl", "hn", "l", "lr", "lt", "lth", "ml", "nl", "nth", "nr", "r", "rn", "rl", "rr", "s", "sh", "st", "sl", "sn", "t", "th", "tr", "thr", "tl", "thl"];
var nmtr7 = ["d", "h", "l", "m", "n", "r"];
var nmtr8 = ["e", "y", "y", "y", "y", "y", "y"];

var nmtr9 = ["", "", "", "b", "bh", "d", "dh", "j", "g", "l", "m", "n", "p", "r", "s", "v", "z"];
var nmtr10 = ["a", "u", "a", "u", "a", "u", "e", "o"];
var nmtr11 = ["b", "d", "g", "gh", "hl", "hn", "hm", "hr", "l", "n", "m", "r", "v"];
var nmtr12 = ["a", "o", "a", "o", "e", "u"];
var nmtr13 = ["d", "g", "l", "ll", "ln", "lm", "lv", "m", "mn", "n", "ns", "nz", "r", "rs", "s", "sn", "x", "z"];

var br = "";


function nameGenTriton(type) {
	var tp = type;
var nSrTriton = ""
var namesTriton = ""
var nFmTriton = ""
var nMsTriton = ""

	for (i = 0; i < 10; i++) {
		rnd = Math.random() * nmtr9.length | 0;
		rnd2 = Math.random() * nmtr10.length | 0;
		rnd3 = Math.random() * nmtr11.length | 0;
		rnd4 = Math.random() * nmtr12.length | 0;
		rnd5 = Math.random() * nmtr13.length | 0;
		while (nmtr11[rnd3] === nmtr9[rnd] || nmtr11[rnd3] == nmtr13[rnd5]) {
			rnd3 = Math.random() * nmtr11.length | 0;
		}
		nSrTriton = nmtr9[rnd] + nmtr10[rnd2] + nmtr11[rnd3] + nmtr12[rnd4] + nmtr13[rnd5] + "ath";
		if (tp === 1) {
			rnd = Math.random() * nmtr4.length | 0;
			rnd2 = Math.random() * nmtr5.length | 0;
			rnd3 = Math.random() * nmtr6.length | 0;
			rnd4 = Math.random() * nmtr8.length | 0;
			while (nmtr6[rnd3] === nmtr4[rnd]) {
				rnd3 = Math.random() * nmtr6.length | 0;
			}
			if (i < 5) {
				nFmTriton = nmtr4[rnd] + nmtr5[rnd2] + nmtr6[rnd3] + nmtr8[rnd4] + "n";
			} else {
				rnd5 = Math.random() * nmtr5.length | 0;
				rnd6 = Math.random() * nmtr7.length | 0;
				while (nmtr7[rnd6] === nmtr6[rnd3]) {
					rnd6 = Math.random() * nmtr7.length | 0;
				}
				nFmTriton = nmtr4[rnd] + nmtr5[rnd2] + nmtr6[rnd3] + nmtr5[rnd5] + nmtr7[rnd6] + nmtr8[rnd4] + "n";
			}
			namesTriton = nFmTriton + " " + nSrTriton;
		} else {
			rnd = Math.random() * nmtr1.length | 0;
			rnd2 = Math.random() * nmtr2.length | 0;
			rnd3 = Math.random() * nmtr3.length | 0;
			while (nmtr1[rnd] === nmtr3[rnd3]) {
				rnd3 = Math.random() * nmtr3.length | 0;
			}
			rnd4 = Math.random() * nmtr2.length | 0;
			nMsTriton = nmtr1[rnd] + nmtr2[rnd2] + nmtr3[rnd3] + nmtr2[rnd2] + "s";
			namesTriton = nMsTriton + " " + nSrTriton;
		}
		return nMsTriton
	}
}