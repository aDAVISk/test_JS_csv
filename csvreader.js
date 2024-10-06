async function loadCSVData() {
  const response = await fetch('./csv/AU Mic b.csv');
  const text = await response.text();
  const data = text.trim().split('\n')
    .map(line => line.split(',').map(x => x.trim()));
	return data;
}

function printon(data){
	const articles = data.slice(1)
		.map(x => `
			<article>
				<h3>planet ${x.name}</h3>
				<p>${x.x}, ${x.y}, ${x.z}</p>
			</article>
		`)
		.join('');
	document.getElementById('js-csv').innerHTML = articles;
}

function run(){
	var data = await loadCSVData();
	var stars = data.slice(1).map(x=>{
		name: x[8],
		x: parseFloat(x[5]),
		y: parseFloat(x[6]),
		z: parseFloat(x[7])
	}
	)
	printon(data);
}

run();
