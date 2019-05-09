var nmo1 = ["", "", "", "b", "bh", "br", "d", "dh", "dr", "g", "gh", "gr", "j", "l", "m", "n", "r", "rh", "sh", "z", "zh"];
var nmo2 = ["a", "o", "u"];
var nmo3 = ["b", "br", "bz", "d", "dd", "dz", "dg", "dr", "g", "gg", "gr", "gz", "gv", "hr", "hz", "j", "kr", "kz", "m", "mz", "mv", "n", "ng", "nd", "nz", "r", "rt", "rz", "rd", "rl", "rz", "t", "tr", "v", "vr", "z", "zz"];
var nmo4 = ["b", "d", "g", "g", "k", "k", "kk", "kk", "l", "ll", "n", "r"];

var nmo5 = ["", "", "", "", "b", "bh", "d", "dh", "g", "gh", "h", "k", "m", "n", "r", "rh", "s", "sh", "v", "z"];
var nmo6 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "au", "ye", "ie", "aa", "ou", "ua", "ao"];
var nmo7 = ["d", "dd", "dk", "dg", "dv", "g", "gg", "gn", "gv", "gz", "l", "ll", "lv", "lz", "m", "md", "mz", "mv", "ng", "nk", "ns", "nz", "t", "thr", "th", "v", "vn", "vr", "vg", "vd", "wnk", "wg", "wn"];
var nmo8 = ["", "", "", "", "", "f", "h", "k", "l", "m", "n", "ng", "v", "z"];

var nmo9 = ["Aberrant", "Ancient", "Angry", "Anguished", "Arrogant", "Barbarian", "Barbaric", "Barren", "Berserk", "Bitter", "Bloody", "Broad", "Broken", "Brutal", "Brute", "Butcher", "Coarse", "Cold", "Colossal", "Crazy", "Crooked", "Cruel", "Dark", "Defiant", "Delirious", "Deranged", "Disfigured", "Enormous", "Enraged", "Fearless", "Feisty", "Fierce", "Filthy", "Forsaken", "Frantic", "Gargantuan", "Giant", "Glorious", "Grand", "Grave", "Grim", "Gross", "Gruesome", "Hollow", "Infernal", "Lethal", "Lost", "Loyal", "Macabre", "Mad", "Maniac", "Merciless", "Mighty", "Miscreant", "Noxious", "Outlandish", "Powerful", "Prime", "Proud", "Putrid", "Radical", "Reckless", "Repulsive", "Rotten", "Ruthless", "Shady", "Sick", "Silent", "Simple", "Smug", "Spiteful", "Swift", "Turbulent", "Ugly", "Unsightly", "Vengeful", "Venomous", "Vicious", "Violent", "Vivid", "Volatile", "Vulgar", "Warped", "Wicked", "Wild", "Worthless", "Wrathful", "Wretched"];
var nmo10 = ["Anger", "Ankle", "Ash", "Battle", "Beast", "Bitter", "Black", "Blood", "Bone", "Brain", "Brass", "Breath", "Chaos", "Chest", "Chin", "Cold", "Dark", "Death", "Dirt", "Doom", "Dream", "Elf", "Eye", "Fang", "Feet", "Fiend", "Finger", "Flame", "Flesh", "Foot", "Ghost", "Giant", "Gnoll", "Gnome", "Gore", "Hand", "Hate", "Head", "Heart", "Heel", "Hell", "Horror", "Iron", "Joint", "Kidney", "Kill", "Knee", "Muscle", "Nose", "Pest", "Poison", "Power", "Pride", "Rib", "Scale", "Skin", "Skull", "Slave", "Smoke", "Sorrow", "Spine", "Spite", "Steel", "Storm", "Talon", "Teeth", "Throat", "Thunder", "Toe", "Tooth", "Vein", "Venom", "Vermin", "War"];
var nmo11 = ["Axe", "Blade", "Brand", "Breaker", "Bruiser", "Burster", "Butcher", "Carver", "Chopper", "Cleaver", "Clobberer", "Conquerer", "Cracker", "Cruncher", "Crusher", "Cutter", "Dagger", "Defacer", "Despoiler", "Destroyer", "Dissector", "Ender", "Flayer", "Gasher", "Glaive", "Gouger", "Hacker", "Hammer", "Killer", "Lance", "Marauder", "Masher", "Mutilator", "Piercer", "Pummel", "Quasher", "Quelcher", "Queller", "Razer", "Render", "Ripper", "Saber", "Sabre", "Scalper", "Shatterer", "Skinner", "Slayer", "Slicer", "Smasher", "Snapper", "Spear", "Splitter", "Squasher", "Squelcher", "Squisher", "Strangler", "Sunderer", "Sword", "Trampler", "Trasher", "Vanquisher", "Wrecker"];

var br = "";


function nameGenOrc(type) {
	var namesorc = "";
var nSrorc = ""
var nMsorc = ""
var nFmorc = ""
	var tp = type;
	for (i = 0; i < 10; i++) {
		rSr = Math.random() * 2 | 0;
		if (rSr === 0) {
			nSrorc = "The " + nmo9[Math.random() * nmo9.length | 0];
		} else {
			nSrorc = nmo10[Math.random() * nmo10.length | 0] + " " + nmo11[Math.random().length * nmo11 | 0];
		}
		if (tp === 1) {
			rnd = Math.random() * nmo5.length | 0;
			rnd2 = Math.random() * nmo6.length | 0;
			rnd3 = Math.random() * nmo8.length | 0;
			if (i < 4) {
				while (rnd < 4) {
					rnd = Math.random() * nmo5.length | 0;
				}
				while (rnd3 < 5 || nmo8[rnd3] === nmo5[rnd]) {
					rnd3 = Math.random() * nmo8.length | 0;
				}
				nFmorc = nmo5[rnd] + nmo6[rnd2] + nmo8[rnd3];
			} else {
				rnd4 = Math.random() * nmo7.length | 0;
				rnd5 = Math.random() * nmo6.length | 0;
				while (nmo7[rnd4] === nmo8[rnd3]) {
					rnd4 = Math.random() * nmo7.length | 0;
				}
				nFmorc = nmo5[rnd] + nmo6[rnd2] + nmo7[rnd4] + nmo6[rnd5] + nmo8[rnd3];
			}
			namesorc = nFmorc + " " + nSrorc;
		} else {
			rnd = Math.random() * nmo1.length | 0;
			rnd2 = Math.random() * nmo2.length | 0;
			rnd3 = Math.random() * nmo4.length | 0;
			if (i < 4) {
				while (rnd < 3 || nmo1[rnd] === nmo4[rnd3]) {
					rnd = Math.random() * nmo1.length | 0;
				}
				nMsorc = nmo1[rnd] + nmo2[rnd2] + nmo4[rnd3];
			} else {
				rnd4 = Math.random() * nmo3.length | 0;
				rnd5 = Math.random() * nmo2.length | 0;
				while (nmo3[rnd4] === nmo1[rnd] || nmo3[rnd4] === nmo4[rnd3]) {
					rnd4 = Math.random() * nmo3.length | 0;
				}
				nMsorc = nmo1[rnd] + nmo2[rnd2] + nmo3[rnd4] + nmo2[rnd5] + nmo4[rnd3];
			}
			namesorc = nMsorc + " " + nSrorc;
		}
		return namesorc
	}
}
