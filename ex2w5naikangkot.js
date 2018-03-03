function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang[0] === undefined){
        return [];
    }


    var result = [];
    for(var i =0; i < arrPenumpang.length;i++){
        var obj = {};
        obj.penumpang = arrPenumpang[i][0];
        var count =-1;
            for(var j =0; j<rute.length;j++){
                if(arrPenumpang[i][1] === rute[j]){
                    count = 0
                    obj.naikDari = rute[j];
                }else if(arrPenumpang[i][2] === rute[j]){
                    obj.tujuan = rute[j];
                    obj.bayar = count * 2000
                    break;
                }if(count >= 0){
                    count ++
                }
            }
        result.push(obj);
      }
    return result;
  }

  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

  console.log(naikAngkot([])); //[]
