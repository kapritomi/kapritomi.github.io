fetch("https://raw.githubusercontent.com/android/sunflower/main/app/src/main/assets/plants.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(tomb){
    let sz2=""
    for (let elem of tomb) {
        sz2+='<tr>'
        sz2+='<td>'
        sz2+=elem.name
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.description
        sz2+='</td>'
        sz2+='<td>'
        sz2+=elem.wateringInterval
        sz2+='</td>'
        sz2+='<td>'
        sz2+='<img src="'+elem.imageUrl+'" class="kepek"></a>'
        sz2+='</td>'
        sz2+='</tr>'
    }
    document.getElementById("torzs").innerHTML=sz2;
}
