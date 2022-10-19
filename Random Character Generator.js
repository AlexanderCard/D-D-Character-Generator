window.onload = function () {

}

function getPotion(roll){
    potions = ["Potion of Animal Friendship	Potion	Uncommon			dmg 187",
    "Potion of Clairvoyance	Potion	Rare			dmg 187",
    "Potion of Climbing	Potion	Common			dmg 187",
    "Potion of Cloud Giant Strength	Potion	Very Rare			dmg 187",
    "Potion of Diminution	Potion	Rare			dmg 187",
    "Potion of Fire Breath	Potion	Uncommon			dmg 187",
    "Potion of Fire Giant Strength	Potion	Rare			dmg 187",
    "Potion of Flying	Potion	Very Rare			dmg 187",
    "Potion of Frost Giant Strength	Potion	Rare			dmg 187",
    "Potion of Gaseous Form	Potion	Rare			dmg 187",
    "Potion of Greater Healing	Potion	Uncommon			dmg 187",
    "Potion of Growth	Potion	Uncommon			dmg 187",
    "Potion of Healing	Potion	Common			dmg 187",
    "Potion of Heroism	Potion	Rare			dmg 188",
    "Potion of Hill Giant Strength	Potion	Uncommon			dmg 187",
    "Potion of Invisibility	Potion	Very Rare			dmg 188",
    "Potion of Invulnerability	Potion	Rare			dmg 188",
    "Potion of Longevity	Potion	Very Rare			dmg 188",
    "Potion of Mind Reading	Potion	Rare			dmg 188",
    "Potion of Poison	Potion	Uncommon			dmg 188",
    "Potion of Resistance	Potion	Uncommon			dmg 188",
    "Potion of Speed	Potion	Very Rare			dmg 188",
    "Potion of Stone Giant Strength	Potion	Rare			dmg 187",
    "Potion of Storm Giant Strength	Potion	Legendary			dmg 187",
    "Potion of Superior Healing	Potion	Rare			dmg 187",
    "Potion of Supreme Healing	Potion	Very Rare			dmg 187",
    "Potion of Vitality	Potion	Very Rare			dmg 188",
    "Potion of Water Breathing	Potion	Uncommon			dmg 188"]
    return potions[roll];
}


function getRoll(rollMax){
    roll = Math.floor(Math.random() * rollMax) + 1;
    return roll;
}

function getCharacter(race, characterString) {
    gender = getGender(getRoll(3))
    characterString = append(characterString, gender)
    raceNameGen = "nameGen" + race
    name = window[raceNameGen](getRoll(2))
    characterString = append(characterString, "name: " + name)
    appearance = getAppearance(getRoll(20))
    characterString = append(characterString, appearance)
    highAbilities = getAbilities(getRoll(6))
    characterString = append(characterString, "high " + highAbilities)
    lowAbilities = getAbilities(getRoll(6))
    while (lowAbilities == highAbilities)
        lowAbilities = getAbilities(getRoll(6))
    characterString = append(characterString, "low " + lowAbilities)
    talents = getTalent(getRoll(20))
    characterString = append(characterString, talents)
    mannerisms = getMannerisms(getRoll(20))
    characterString = append(characterString, mannerisms)
    interactionTraits = getInteractionTraits(getRoll(12))
    characterString = append(characterString, interactionTraits)
    background = getBackground(getRoll(13))
    characterString = append(characterString, background)
    alignment = getAlignment(getRoll(9))
    characterString = append(characterString, alignment)
    return characterString
}

function append(string, info){
    return string + '\n' + info
}

function printCharacter(characterString) {
    document.getElementById('characterInfo').innerHTML = characterString
}

function getVillan() {
    race = getRace(getRoll(24))
    characterString = append(characterString, race, characterString)
    getFamily(race, characterString)
    getCharacter(race, characterString)
    printCharacter()
}

function getNPC() {
    race = getRace(getRoll(24))
    var characterString = race
    characterString = getCharacter(race, characterString)
    characterString = getFamily(race, characterString)
    printCharacter(characterString)
}

function getNPCWithClass() {
    charClass = getClass(getRoll(14))
    subClass = getSubClass(charClass)
    var characterString = charClass
    characterString = append(characterString, subClass)
    race = getRace(getRoll(21))
    characterString = append(characterString, race)
    characterString = getCharacter(race, characterString)
    characterString = getFamily(race, characterString)
    printCharacter(characterString)
}

function getFamily(race, characterString){
    parents = getParents(getRoll(100))
    characterString = append(characterString, parents)

    siblings = getSiblings(getRoll(5))
    if (race == "Elf" || race == "Dwarf")
        siblings - 2 >= 0 ? siblings = siblings - 2: siblings = 0
    characterString = append(characterString, siblings + " siblings") 
    while(siblings>0){
        characterString = append(characterString, "")
        characterString = append(characterString, "Sibling " + siblings + ":")
        characterString = getCharacter(race, characterString)
        status = getStatus(getRoll(7))
        characterString = append(characterString, "Status: " + status)
        if(status == "Dead"){
            causeOfDeath = getCauseOfDeath(getRoll(11))
            characterString = append(characterString, "Died from: " + causeOfDeath)
        }
        siblings = siblings - 1
    }
    characterString = append(characterString, "")
    characterString = append(characterString, "Siblings done.")
    characterString = append(characterString, "")
    guardian = getGuardian(getRoll(13))
    if(parents == "Doesn't know who their parents are or were")
        while(guardian == "Mother and father")
            guardian = getGuardian(getRoll(13))
    characterString = append(characterString, "Raised in/by " + guardian)

    absentFather = getAbsentParent(getRoll(4))
    absentMother = getAbsentParent(getRoll(4))
    if(guardian == "Single father or stepfather"){
        characterString = append(characterString, "Mother " + absentMother)
        if(absentMother == "died"){
            causeOfDeath = getCauseOfDeath(getRoll(11))
            characterString = append(characterString, "Died from: " + causeOfDeath)
        }
        characterString = append(characterString, "Father :")
        characterString = getCharacter(race, characterString)
    }
    else if(guardian == "Single mother or stepmother"){
        characterString = append(characterString, "Father " + absentFather)
        if(absentFather == "died"){
            causeOfDeath = getCauseOfDeath(getRoll(11))
            characterString = append(characterString, "Died from: " + causeOfDeath)
        }
        characterString = append(characterString, "Mother :")
        characterString = getCharacter(race, characterString)
    }
    else if(guardian != "Mother and father"){
        characterString = append(characterString, "Father " + absentFather)
        if(absentFather == "died"){
            causeOfDeath = getCauseOfDeath(getRoll(11))
            characterString = append(characterString, "Died from: " + causeOfDeath)
        }
        
        characterString = append(characterString, "Mother " + absentMother)
        if(absentMother == "died"){
            causeOfDeath = getCauseOfDeath(getRoll(11))
            characterString = append(characterString, "Died from: " + causeOfDeath)
        }
    }
    else {
        characterString = append(characterString, "Mother :")
        characterString = getCharacter(race, characterString)
        characterString = append(characterString, "Father :")
        characterString = getCharacter(race, characterString)
    }

    childhoodHome = getChildhoodHome(getRoll(9))
    characterString = append(characterString, childhoodHome)
    return characterString
}

function getAlignment(roll){
    switch(roll){
        case 1: return "Chaotic Evil";
        case 2: return "Chaotic Neutral";
        case 3: return "Lawful Evil";
        case 4: return "Neutral Evil";
        case 5: return "Neutral";
        case 6: return "Neutral Good";
        case 7: return "Lawful Good";
        case 8: return "Lawful Neutral";
        case 9: return "Chaotic Good";
    }
}

function getCauseOfDeath(roll){
    switch(roll) {
        case 1: return "Unknown";
        case 2: return "Murdered";
        case 3: return "Killed in battle";
        case 4: return "Accident related to class or occupation";
        case 5: return "Accident unrelated to class or occupation";
        case 6: return "Natural causes, such as disease or old age";
        case 7: return "Apparent suicide";
        case 8: return "Torn apart by an animal or a natural disaster";
        case 9: return "Consumed by a monster";
        case 10: return "Executed for a crime or tortured to death";
        case 11: return "Bizarre event";
    }
}

function getStatus(roll){
    switch(roll) {
        case 1: return "Dead";
        case 2: return "Missing or unknown";
        case 3: return "Alive, but doing poorly due to injury, financial trouble, or relationship difficulties";
        case 4: return "Alive and well";
        case 5: return "Alive and quite successful";
        case 6: return "Alive and infamous";
        case 7: return "Alive and famous";
    }
}

function getAbsentParent(roll){
    switch(roll) {
        case 1: return "died";
        case 2: return "was imprisoned, enslaved, or otherwise taken away";
        case 3: return "abandoned you";
        case 4: return "disappeared to an unknown fate";
    }
}

function getChildhoodHome(roll){
    switch(roll) {
        case 1: return "On the streets";
        case 2: return "Rundown shack";
        case 3: return "No permanent residence; you moved around a lot";
        case 4: return "Encampment or village in the wilderness";
        case 5: return "Apartment in a rundown neighborhood";
        case 6: return "Small house";
        case 7: return "Large house";
        case 8: return "Mansion";
        case 9: return "Palace or castle";
    }
}

function getGuardian(roll){
    switch(roll) {
        case 1: return "None";
        case 2: return "Institution such as an asylum";
        case 3: return "Temple";
        case 4: return "Orphanage";
        case 5: return "Guardian";
        case 6: return "Uncle/Aunt";
        case 7: return "Grandparents";
        case 8: return "Extended Family";
        case 9: return "Tribe or clan";
        case 10: return "Adoptive Family";
        case 11: return "Single father or stepfather";
        case 12: return "Single mother or stepmother";
        case 13: return "Mother and father";
    }
}

function getParents(roll){
    if(roll<=95)
        return "Know who their parents are or were"
    else
        return "Doesn't know who their parents are or were"
}

function getSiblings(roll){
    switch(roll) {
        case 1: return 0;
        case 2: return getRoll(3);
        case 3: return getRoll(4)+1;
        case 4: return getRoll(6)+2;
        case 5: return getRoll(8)+3;
    }
}

function getBirthplace(roll){
    switch(roll) {
        case 1: return "Home";
        case 2: return "Home of a family friend";
        case 3: return "Home of a healer or midwife";
        case 4: return "Carriage, cart, or wagon";
        case 5: return "Barn, shed, or other outbuilding";
        case 6: return "Cave";
        case 7: return "Field";
        case 8: return "Forest";
        case 9: return "Temple";
        case 10: return "Battlefield";
        case 11: return "Alley or street";
        case 12: return "Brothel, Tavern, or inn";
        case 13: return "Castle, keep, tower or palace";
        case 14: return "Sewer or rubbish heap";
        case 15: return "Among people of a different race";
        case 16: return "Onboard boat or ship";
        case 17: return "In a prison or headquarters of a secret organization";
        case 18: return "In a sage's laboratory";
        case 19: return "In the feywild";
        case 20: return "In the shadowfell";
        case 21: return "On the astral plane or ethereal plane";
        case 22: return "On an inner plane of choice";
        case 23: return "On an outer plane of choice";
        case 24: return "Outlands";
    }
}


function getBackground(roll) {
    switch(roll) {
        case 1: return "Acolyte";
        case 2: return "Charlatan";
        case 3: return "Criminal";
        case 4: return "Entertainer";
        case 5: return "Folk Hero";
        case 6: return "Guild Artisan";
        case 7: return "Hermit";
        case 8: return "Noble";
        case 9: return "Outlander";
        case 10: return "Sage";
        case 11: return "Sailor";
        case 12: return "Soldier";
        case 13: return "Urchin";
    }
}



function getInteractionTraits(roll){
    switch(roll) {
        case 1: return "Argumentative";
        case 2: return "Arrogant";
        case 3: return "Blustering";
        case 4: return "Rude";
        case 5: return "Curious";
        case 6: return "Friendly";
        case 7: return "Honest";
        case 8: return "Hot tempered";
        case 9: return "Irritable";
        case 10: return "Ponderous";
        case 11: return "Quiet";
        case 12: return "Suspicious";
    }
}

function getMannerisms(roll){
    switch(roll) {
        case 1: return "Prone to singing or whistling or humming quietly";
        case 2: return "Speaks in rhyme or other peculiar way";
        case 3: return "Particularly low or high voice";
        case 4: return "Slurs words, lisps, or stutters";
        case 5: return "Enunciates overly clearly";
        case 6: return "Speaks loudly";
        case 7: return "Whispers";
        case 8: return "Uses flowery speech or long words";
        case 9: return "Frequently uses the wrong word";
        case 10: return "Uses colorful oaths or exclamations";
        case 11: return "Makes constant jokes or puns";
        case 12: return "Prone to predictions of doom";
        case 13: return "Fidgits";
        case 14: return "Squints";
        case 15: return "Stares into the distance";
        case 16: return "Chews something";
        case 17: return "Paces";
        case 18: return "Taps fingers";
        case 19: return "Bites fingernails";
        case 20: return "Twirls hair or tugs beard";
    }
}

function getTalent(roll){
    switch(roll) {
        case 1: return "Plays a musical instrument";
        case 2: return "Speaks several languages fluently";
        case 3: return "Unbelievably lucky";
        case 4: return "Perfect memory";
        case 5: return "Great with animals";
        case 6: return "Great with children";
        case 7: return "Great at solving puzzles";
        case 8: return "Great at one game";
        case 9: return "Great at impersonations";
        case 10: return "Draws beautifully";
        case 11: return "Paints beautifully";
        case 12: return "Sings beautifully";
        case 13: return "Drinks everyone under the table";
        case 14: return "Expert carpenter";
        case 15: return "Expert cook";
        case 16: return "Expert dart thrower and rock skipper";
        case 17: return "Expert juggler";
        case 18: return "Skilled actor and master of disguise";
        case 19: return "Skilled dancer";
        case 20: return "Knows thieves cant";
    }
}

function getGender(roll){
    switch(roll) {
        case 1: return "Male";
        case 2: return "Female";
        case 3: return "Non-Binary";
    }
}

function getAbilities(roll) {
    switch(roll){
        case 1: return "Strength";
        case 2: return "Dexterity";
        case 3: return "Constitution";
        case 4: return "Intelligence";
        case 5: return "Wisdom";
        case 6: return "Charisma";
    }
}

function getAppearance(roll){
    switch(roll){
        case 1: return "Distinctive Jewelry";
        case 2: return "Piercings";
        case 3: return "Flamboyant or outlandish clothes";
        case 4: return "Formal clean clothes";
        case 5: return "Ragged dirty clothes";
        case 6: return "Pronounced scar";
        case 7: return "Missing teeth";
        case 8: return "Missing fingers";
        case 9: return "Unusual eye color";
        case 10: return "Tattoos";
        case 11: return "Birthmark";
        case 12: return "Unusual skin color";
        case 13: return "Bald";
        case 14: return "Braided beard or hair";
        case 15: return "Unusual hair color";
        case 16: return "Nervous eye twitch";
        case 17: return "Distinctive nose";
        case 18: return "Distinctive posture";
        case 19: return "Exceptionally beautiful";
        case 20: return "Exceptionally ugly";
    }
}

function getRace(roll){
    switch(roll){
        case 1: return "Dwarf";
        case 2: return "Elf";
        case 3: return "Halfling";
        case 4: return "Human";
        case 5: return "Dragonborn";
        case 6: return "Gnome";
        case 7: return "HalfElf";
        case 8: return "HalfOrc";
        case 9: return "Tiefling";
        case 10: return "Aasimar";
        case 11: return "Warforged";
        case 12: return "Genasi";
        case 13: return "Changeling";
        case 14: return "Goliath";
        case 15: return "Aarakocra";
        case 16: return "Lizardfolk";
        case 17: return "Tabaxi";
        case 18: return "Human";
        case 19: return "Human";
        case 20: return "Triton";
        case 21: return "YuanTi";
        case 22: return "Orc";
        case 23: return "Drow";
        case 24: return "Kobold";
    }
}
function getClass(roll) {   
    switch(roll) {
        case 1: return "Barbarian";
        case 2: return "Bard";
        case 3: return "Cleric";
        case 4: return "Druid";
        case 5: return "Fighter";
        case 6: return "Monk";
        case 7: return "Paladin";
        case 8: return "Ranger";
        case 9: return "Rogue";
        case 10: return "Sorcerer";
        case 11: return "Warlock";       
        case 12: return "Wizard";
        case 13: return "Artificer";        
        case 14: return "Mystic";
    }
}

function getSubClass(charClass) {
    if(charClass == "Barbarian"){
        switch(getRoll(5)){
            case 1: return "Berserker";
            case 2: return "Totem Warrior";
            case 3: return "Ancestral Guardian";
            case 4: return "Storm Herald";
            case 5: return "Zealot";
        }
    }
    if(charClass == "Bard"){
        switch(getRoll(5)){
            case 1: return "Lore";
            case 2: return "Valor";
            case 3: return "Glamour";
            case 4: return "Swords";
            case 5: return "Whispers";
        }
    }
    if(charClass == "Cleric"){
        switch(getRoll(9)){
            case 1: return "Knowledge";
            case 2: return "Life";
            case 3: return "Light";
            case 4: return "Nature";
            case 5: return "Tempest";
            case 6: return "Trickery";
            case 7: return "War";
            case 8: return "Grave";
            case 9: return "Forge";
        }
    }
    if(charClass == "Druid"){
        switch(getRoll(4)){
            case 1: return "Land";
            case 2: return "Moon";
            case 3: return "Dreams";
            case 4: return "Shepherd";
        }
    }
    if(charClass == "Fighter"){
        switch(getRoll(6)){
            case 1: return "Champion";
            case 2: return "Battle Master";
            case 3: return "Eldritch Knight";
            case 4: return "Arcane Archer";
            case 5: return "Samurai";
            case 6: return "Cavalier";
        }
    }
    if(charClass == "Monk"){
        switch(getRoll(6)){
            case 1: return "Open Hand";
            case 2: return "Shadow";
            case 3: return "Four Elements";
            case 4: return "Drunken Master";
            case 5: return "Kensei";
            case 6: return "Sun Soul";    
        }
    }
    if(charClass == "Paladin"){
        switch(getRoll(5)){
            case 1: return "Devotion";
            case 2: return "Ancients";
            case 3: return "Vengeance";
            case 4: return "Conquest";
            case 5: return "Redemption";
        }
    }
    if(charClass == "Ranger"){
        switch(getRoll(5)){
            case 1: return "Hunter";
            case 2: return "Beastmaster";
            case 3: return "Horizon Walker";
            case 4: return "Monster Slayer";
            case 5: return "Gloomstalker";
        }
    }
    if(charClass == "Rogue"){
        switch(getRoll(7)){
            case 1: return "Thief";
            case 2: return "Assassin";
            case 3: return "Arcane Trickster";
            case 4: return "Swashbuckler";
            case 5: return "Mastermind";
            case 6: return "Inquisitive";
            case 7: return "Scout";
        }
    }
    if(charClass == "Sorcerer"){
        switch(getRoll(5)){
            case 1: return "Draconic Bloodline";
            case 2: return "Wild Magic";
            case 3: return "Divine Soul";
            case 4: return "Storm Sorcerer";
            case 5: return "Shadow Sorcerer";
        }
    }
    if(charClass == "Warlock"){
        switch(getRoll(5)){
            case 1: return "Archfey";
            case 2: return "Fiend";
            case 3: return "Great Old One";
            case 4: return "Celestial";
            case 5: return "Hexblade";
        }
    }
    if(charClass == "Wizard"){
        switch(getRoll(9)){
            case 1: return "Abjuration";
            case 2: return "Conjuration";
            case 3: return "Divination";
            case 4: return "Enchantment";
            case 5: return "Evocation";
            case 6: return "Illusion";
            case 7: return "Necromancy";
            case 8: return "Transmution";
            case 9: return "War Magic";
        }
    }
    if(charClass == "Mystic"){
        switch(getRoll(6)){
            case 1: return "Avatar";
            case 2: return "Awakened";
            case 3: return "Immortal";
            case 4: return "Nomad";
            case 5: return "Soul Knife";
            case 6: return "Wu Jen";
        }
    }
    if(charClass == "Artificer"){
        switch(getRoll(2)){
            case 1: return "Alchemist";
            case 2: return "Gunsmith";
        }
    }

}
