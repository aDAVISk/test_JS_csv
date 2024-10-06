async function loadCSVData() {
  const response = await fetch('./csv/AU Mic b.csv');
  const text = await response.text();
  const data = text.trim().split('\n')
    .map(line => line.split(',').map(x => x.trim()));
  const articles = data.slice(1)
    .map(x => `
      <article>
        <h3>${x[0]}</h3>
        <p>${x[1]}</p>
        <p>${x[2]}</p>
        <p>${x[3]}</p>
        <p>${x[4]}</p>
        <p>${x[5]}</p>
        <p>${x[6]}</p>
        <p>${x[7]}</p>
      </article>
    `)
    .join(';');
  document.getElementById('js-csv').innerHTML = articles;
}

loadCSVData();
