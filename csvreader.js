async function loadCSVData() {
  const response = await fetch('./csv/AU Mic b.csv');
  const text = await response.text();
  const data = text.trim().split('\n')
    .map(line => line.split(',').map(x => x.trim()));
  const articles = data.slice(1)
    .map(x => `
      <article>
        <h3>${x[8]}</h3>
        <p>${x[5]}, ${x[6]}, ${x[7]}</p>
				<p>${parseFloat(x[5])+parseFloat(x[6])+parseFloat(x[7])} </p>
      </article>
    `)
    .join(';');
  document.getElementById('js-csv').innerHTML = articles;
}

loadCSVData();
