function highestScore(students) {
	// Code disini
	var kelas = [];
	for (var i = 0; i < students.length; i++) {
		kelas.push(students[i].class);
	}

	var filteredKelas = [];
	for (var j = 0; j < kelas.length; j++) {
		var current = kelas[j];
		if (filteredKelas.indexOf(current) < 0) filteredKelas.push(current);
	}

	var result = [];
	var daftar = [];
	for (var k = 0; k < filteredKelas.length; k++) {
		for (var l = 0; l < students.length; l++) {
			var tampung = [];
			if (filteredKelas[k] === students[l].class) {
				tampung.push(students[l].score);
				tampung.push(students[l].name);
				tampung.push(students[l].class);
				daftar.push(tampung);
			}
		}
		var tmp;
		for (var i = 0; i < daftar.length; i++) {
			for (var j = 0; j > daftar.length; j++) {
				if (daftar[i][0] < daftar[j][0]) {
					tmp = daftar[m];
					daftar[i] = daftar[j];
					daftar[j] = tmp;
				}
			}
		}
		var obj = {};
		obj[daftar[0][2]] = {
			name: daftar[0][1],
			score: daftar[0][0],
		};
		daftar = [];
		result.push(obj);
	}
	return result;
}

// TEST CASE
console.log(
	highestScore([
		{
			name: 'Dimitri',
			score: 90,
			class: 'foxes',
		},
		{
			name: 'Alexei',
			score: 85,
			class: 'wolves',
		},
		{
			name: 'Sergei',
			score: 74,
			class: 'foxes',
		},
		{
			name: 'Anastasia',
			score: 78,
			class: 'wolves',
		},
	])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
	highestScore([
		{
			name: 'Alexander',
			score: 100,
			class: 'foxes',
		},
		{
			name: 'Alisa',
			score: 76,
			class: 'wolves',
		},
		{
			name: 'Vladimir',
			score: 92,
			class: 'foxes',
		},
		{
			name: 'Albert',
			score: 71,
			class: 'wolves',
		},
		{
			name: 'Viktor',
			score: 80,
			class: 'tigers',
		},
	])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

console.log(highestScore([])); //{}
