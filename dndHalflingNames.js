var nmhl1 = ["An", "Ar", "Bar", "Bel", "Con", "Cor", "Dan", "Dav", "El", "Er", "Fal", "Fin", "Flyn", "Gar", "Go", "Hal", "Hor", "Ido", "Ira", "Jan", "Jo", "Kas", "Kor", "La", "Lin", "Mar", "Mer", "Ne", "Nor", "Ori", "Os", "Pan", "Per", "Pim", "Quin", "Quo", "Ri", "Ric", "San", "Shar", "Tar", "Te", "Ul", "Uri", "Val", "Vin", "Wen", "Wil", "Xan", "Xo", "Yar", "Yen", "Zal", "Zen"];
var nmhl2 = ["ace", "amin", "bin", "bul", "dak", "dal", "der", "don", "emin", "eon", "fer", "fire", "gin", "hace", "horn", "kas", "kin", "lan", "los", "min", "mo", "nad", "nan", "ner", "orin", "os", "pher", "pos", "ras", "ret", "ric", "rich", "rin", "ry", "ser", "sire", "ster", "ton", "tran", "umo", "ver", "vias", "von", "wan", "wrick", "yas", "yver", "zin", "zor", "zu"];
var nmhl3 = ["An", "Ari", "Bel", "Bre", "Cal", "Chen", "Dar", "Dia", "Ei", "Eo", "Eli", "Era", "Fay", "Fen", "Fro", "Gel", "Gra", "Ha", "Hil", "Ida", "Isa", "Jay", "Jil", "Kel", "Kith", "Le", "Lid", "Mae", "Mal", "Mar", "Ne", "Ned", "Odi", "Ora", "Pae", "Pru", "Qi", "Qu", "Ri", "Ros", "Sa", "Shae", "Syl", "Tham", "Ther", "Tryn", "Una", "Uvi", "Va", "Ver", "Wel", "Wi", "Xan", "Xi", "Yes", "Yo", "Zef", "Zen"];
var nmhl4 = ["alyn", "ara", "brix", "byn", "caryn", "cey", "da", "dove", "drey", "elle", "eni", "fice", "fira", "grace", "gwen", "haly", "jen", "kath", "kis", "leigh", "la", "lie", "lile", "lienne", "lyse", "mia", "mita", "ne", "na", "ni", "nys", "ola", "ora", "phina", "prys", "rana", "ree", "ri", "ris", "sica", "sira", "sys", "tina", "trix", "ula", "vira", "vyre", "wyn", "wyse", "yola", "yra", "zana", "zira"];

function nameGenHalfling(type) {
	var tp = type;
	var br = "";
	var nMshalfling = "";

	for (i = 0; i < 10; i++) {
		if (tp === 1) {
			rnd = Math.floor(Math.random() * nmhl3.length);
			rnd2 = Math.floor(Math.random() * nmhl4.length);
			nMshalfling = nmhl3[rnd] + nmhl4[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nmhl1.length);
			rnd2 = Math.floor(Math.random() * nmhl2.length);
			nMshalfling = nmhl1[rnd] + nmhl2[rnd2];
		}
		return nMshalfling
	}
}