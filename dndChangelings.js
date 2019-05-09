var nmc1 = ["", "", "", "b", "d", "f", "h", "j", "l", "m", "n", "p", "r", "s", "t", "v", "w", "y"];
var nmc2 = ["a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "a", "i", "o", "u", "ee", "ie", "ea", "ae", "ai", "oo", "ou"];
var nmc3 = ["c", "g", "gs", "k", "ks", "kt", "m", "n", "rx", "rt", "rs", "s", "sk", "t", "ts", "x", "z"];

var br = "";


function nameGenChangeling() {
	var nMsc = "";
	for (i = 0; i < 10; i++) {
		rnd = Math.random() * nmc1.length | 0;
		rnd2 = Math.random() * nmc2.length | 0;
		rnd3 = Math.random() * nmc3.length | 0;
		while (nmc1[rnd] === nmc3[rnd3]) {
			rnd3 = Math.random() * nmc3.length | 0;
		}
		nMsc = nmc1[rnd] + nmc2[rnd2] + nmc3[rnd3];
		return nMsc
	}
}
