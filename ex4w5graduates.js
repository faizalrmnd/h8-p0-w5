function graduates(students) {
	var hasil = {};
	if (students === undefined || students.length === 0) {
		return hasil;
	} else {
		var kelas = [];
		for (var i = 0; i < students.length; i++) {
			kelas.push(students[i].class);
		}
		var filteredKelas = [];
		for (var j = 0; j < kelas.length; j++) {
			var current = kelas[j];
			if (filteredKelas.indexOf(current) < 0) filteredKelas.push(current);
		}
		for (var k = 0; k < filteredKelas.length; k++) {
			var arrStudent = [];
			for (var l = 0; l < students.length; l++) {
				var objStudent = {};
				if (filteredKelas[k] === students[l].class) {
					if (students[l].score >= 75) {
						objStudent.name = students[l].name;
						objStudent.score = students[l].score;
						arrStudent.push(objStudent);
					}
				}
			}
			hasil[filteredKelas[k]] = arrStudent;
		}
		return hasil;
	}
}

console.log(
	graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(
	graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

console.log(graduates([])); //{}
