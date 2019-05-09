var nmd1 = ["Ali", "Ar", "Ba", "Bal", "Bel", "Bha", "Bren", "Caer", "Calu", "Dur", "Do", "Dra", "Era", "Faer", "Fro", "Gre", "Ghe", "Gora", "He", "Hi", "Ior", "Jin", "Jar", "Kil", "Kriv", "Lor", "Lumi", "Mar", "Mor", "Med", "Nar", "Nes", "Na", "Oti", "Orla", "Pri", "Pa", "Qel", "Ravo", "Ras", "Rho", "Sa", "Sha", "Sul", "Taz", "To", "Trou", "Udo", "Uro", "Vor", "Vyu", "Vrak", "Wor", "Wu", "Wra", "Wul", "Xar", "Yor", "Zor", "Zra"];
var nmd2 = ["barum", "bor", "broth", "ciar", "crath", "daar", "dhall", "dorim", "farn", "fras", "gar", "ghull", "grax", "hadur", "hazar", "jhan", "jurn", "kax", "kris", "kul", "lasar", "lin", "mash", "morn", "naar", "prax", "qiroth", "qrin", "qull", "rakas", "rash", "rinn", "roth", "sashi", "seth", "skan", "trin", "turim", "varax", "vroth", "vull", "warum", "wunax", "xan", "xiros", "yax", "ythas", "zavur", "zire", "ziros"];
var nmd3 = ["Ari", "A", "Bi", "Bel", "Cris", "Ca", "Drys", "Da", "Erli", "Esh", "Fae", "Fen", "Gur", "Gri", "Hin", "Ha", "Irly", "Irie", "Jes", "Jo", "Ka", "Kel", "Ko", "Lilo", "Lora", "Mal", "Mi", "Na", "Nes", "Nys", "Ori", "O", "Ophi", "Phi", "Per", "Qi", "Quil", "Rai", "Rashi", "So", "Su", "Tha", "Ther", "Uri", "Ushi", "Val", "Vyra", "Welsi", "Wra", "Xy", "Xis", "Ya", "Yr", "Zen", "Zof"];
var nmd4 = ["birith", "bis", "bith", "coria", "cys", "dalynn", "drish", "drith", "faeth", "fyire", "gil", "gissa", "gwen", "hime", "hymm", "karyn", "kira", "larys", "liann", "lyassa", "meila", "myse", "norae", "nys", "patys", "pora", "qorel", "qwen", "rann", "riel", "rina", "rinn", "rish", "rith", "saadi", "shann", "sira", "thibra", "thyra", "vayla", "vyre", "vys", "wophyl", "wyn", "xiris", "xora", "yassa", "yries", "zita", "zys"];

var nmd5 = ["", "", "", "", "c", "cl", "cr", "d", "dr", "f", "g", "k", "kl", "kr", "l", "m", "my", "n", "ny", "pr", "sh", "t", "th", "v", "y"];
var nmd6 = ["a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "a", "e", "i", "a", "e", "i", "o", "u", "aa", "ia", "ea", "ua", "uu"];
var nmd7 = ["c", "cc", "ch", "lm", "lk", "lx", "ld", "lr", "ldr", "lt", "lth", "mb", "mm", "mp", "mph", "mr", "mt", "nk", "nx", "nc", "p", "ph", "r", "rd", "rj", "rn", "rrh", "rth", "st", "tht", "x"];
var nmd8 = ["c", "cm", "cn", "d", "j", "k", "km", "l", "n", "nd", "ndr", "nk", "nsht", "nth", "r", "s", "sht", "shkm", "st", "t", "th", "x"];
var nmd9 = ["d", "j", "l", "ll", "m", "n", "nd", "rg", "r", "rr", "rd"];
var nmd10 = ["c", "d", "k", "l", "n", "r", "s", "sh", "th"];

function nameGenDragonborn(type) {
	var tp = type;
	var br = "";
	var nMsd = ""
	var nSrd = ""

	for (i = 0; i < 10; i++) {
		ntp = Math.random() * 10 | 0;
		rnd = Math.random() * nmd5.length | 0;
		rnd2 = Math.random() * nmd6.length | 0;
		rnd3 = Math.random() * nmd7.length | 0;
		rnd4 = Math.random() * nmd6.length | 0;
		rnd5 = Math.random() * nmd10.length | 0;
		while (nmd7[rnd3] === nmd5[rnd] || nmd7[rnd3] === nmd10[rnd5]) {
			rnd3 = Math.random() * nmd7.length | 0;
		}
		if (ntp < 4) {
			nSrd = nmd5[rnd] + nmd6[rnd2] + nmd7[rnd3] + nmd6[rnd4] + nmd10[rnd5];
		} else {
			rnd6 = Math.random() * nmd6.length | 0;
			rnd7 = Math.random() * nmd8.length | 0;
			while (nmd7[rnd3] === nmd8[rnd7] || nmd8[rnd7] === nmd10[rnd5]) {
				rnd7 = Math.random() * nmd8.length | 0;
			}
			if (ntp < 7) {
				nSrd = nmd5[rnd] + nmd6[rnd2] + nmd7[rnd3] + nmd6[rnd4] + nmd8[rnd7] + nmd6[rnd6] + nmd10[rnd5];
			} else {
				rnd8 = Math.random() * nmd6.length | 0;
				rnd9 = Math.random() * nmd9.length | 0;
				while (nmd9[rnd9] === nmd8[rnd7] || nmd9[rnd9] === nmd10[rnd5]) {
					rnd9 = Math.random() * nmd9.length | 0;
				}
				nSrd = nmd5[rnd] + nmd6[rnd2] + nmd7[rnd3] + nmd6[rnd4] + nmd8[rnd7] + nmd6[rnd6] + nmd9[rnd9] + nmd6[rnd8] + nmd10[rnd5];
			}
		}
		if (tp === 1) {
			rnd = Math.random() * nmd3.length | 0;
			rnd2 = Math.random() * nmd4.length | 0;
			nMsd = nmd3[rnd] + nmd4[rnd2];
		} else {
			rnd = Math.random() * nmd1.length | 0;
			rnd2 = Math.random() * nmd2.length | 0;
			nMsd = nmd1[rnd] + nmd2[rnd2];
		}
		var name = nMsd + " " + nSrd;
		return name
	}
}
