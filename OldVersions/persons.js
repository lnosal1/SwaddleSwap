const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne',  lastname: 'Cobb' },
];

function getFullName(item) {
  return [item.firstname, item.lastname].join(' ');
  
  // Alternative with template literals:
  // return `${ item.firstname } ${ item.lastname }`;
}

function renderList() {
  document.getElementById('list').innerHTML = persons.map((person) => {
    return `<li>${ getFullName(person) }</li>`;
  }).join('');
  
  // Alternative using arrow function expression:
  // document.getElementById('list').innerHTML = persons.map(person => `<li>${ getFullName(person) }</li>`).join('');
  
}

renderList();
