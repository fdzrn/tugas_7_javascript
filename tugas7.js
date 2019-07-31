tinggiBadan = [160,155,171,168,165,157,181,190,186,177];
function arraySatu() {
	for (let i = 0; i < tinggiBadan.length; i++) {
	console.log(tinggiBadan[i]);
	}
}
arraySatu();
console.log("");
function arrayDua() {
	for(tinggiBadanBaru of tinggiBadan){
		console.log(tinggiBadanBaru);
	}
}
arrayDua();