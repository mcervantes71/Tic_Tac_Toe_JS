const init = () => {
  const { body } = document;
  const title = document.createElement('h1');
  title.innerText = 'Tic Tac Toe JS';
  title.classList.add('title');

  body.appendChild(title);

  const table = document.createElement('table');
  table.classList.add('center');

  const tr1 = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.classList.add('align');

  const div1 = document.createElement('div');
  div1.classList.add('names', 'current_player');
  div1.id = 'player1';

  td1.appendChild(div1);
  tr1.appendChild(td1);

  const td2 = document.createElement('td');

  const div2 = document.createElement('div');
  div2.classList.add('square', 'bottom', 'right', 'empty');
  div2.id = '0';

  td2.appendChild(div2);
  tr1.appendChild(td2);

  const td3 = document.createElement('td');

  const div3 = document.createElement('div');
  div3.classList.add('square', 'bottom', 'right', 'empty');
  div3.id = '1';

  td3.appendChild(div3);
  tr1.appendChild(td3);

  const td4 = document.createElement('td');

  const div4 = document.createElement('div');
  div4.classList.add('square', 'bottom', 'empty');
  div4.id = '2';

  td4.appendChild(div4);
  tr1.appendChild(td4);

  const td5 = document.createElement('td');
  td5.classList.add('align');

  const div5 = document.createElement('div');
  div5.classList.add('names');
  div5.id = 'player2';

  td5.appendChild(div5);
  tr1.appendChild(td5);

  table.appendChild(tr1);

  const tr2 = document.createElement('tr');

  const td6 = document.createElement('td');

  tr2.appendChild(td6);

  const td7 = document.createElement('td');

  const div7 = document.createElement('div');
  div7.classList.add('square', 'bottom', 'right', 'empty');
  div7.id = '3';

  td7.appendChild(div7);
  tr2.appendChild(td7);

  const td8 = document.createElement('td');

  const div8 = document.createElement('div');
  div8.classList.add('square', 'bottom', 'right', 'empty');
  div8.id = '4';

  td8.appendChild(div8);
  tr2.appendChild(td8);

  const td9 = document.createElement('td');

  const div9 = document.createElement('div');
  div9.classList.add('square', 'bottom', 'empty');
  div9.id = '5';

  td9.appendChild(div9);
  tr2.appendChild(td9);

  const td10 = document.createElement('td');

  tr2.appendChild(td10);

  table.appendChild(tr2);

  const tr3 = document.createElement('tr');

  const td11 = document.createElement('td');

  tr3.appendChild(td11);

  const td12 = document.createElement('td');

  const div12 = document.createElement('div');
  div12.classList.add('square', 'right', 'empty');
  div12.id = '6';

  td12.appendChild(div12);
  tr3.appendChild(td12);

  const td13 = document.createElement('td');

  const div13 = document.createElement('div');
  div13.classList.add('square', 'right', 'empty');
  div13.id = '7';

  td13.appendChild(div13);
  tr3.appendChild(td13);

  const td14 = document.createElement('td');

  const div14 = document.createElement('div');
  div14.classList.add('square', 'empty');
  div14.id = '8';

  td14.appendChild(div14);
  tr3.appendChild(td14);

  const td15 = document.createElement('td');
  td15.classList.add('align');

  const button = document.createElement('button');
  button.innerText = 'Reset';
  button.id = 'reset';

  td15.appendChild(button);
  tr3.appendChild(td15);

  table.appendChild(tr3);

  body.appendChild(table);

  const container = document.createElement('div');
  container.innerHTML = 'Winner<br />Player 1';
  container.id = 'winner';

  body.appendChild(container);
};


export default init;
