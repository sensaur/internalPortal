const $newDep = document.forms.newDep;
const $depContainer = document.querySelector('.depContainer');

function createHTMLforNewDep(newDep) {
  return `
  <div data-id="${newDep.id}" class=".btn-lg btn-outline-info my-2 my-sm-0" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${newDep.name}</h5>
    <h5 class="card-title">Описание отдела: ${newDep.description}</h5>
    <a href="/departments/${newDep.id}">Сотрудники департамента</a>

  </div>
</div>
  `;
}

function createHTMLforNewTeam(newTeam) {
  return `
  <div data-id="${newTeam.id}" class=".btn-lg btn-outline-info my-2 my-sm-0" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${newTeam.name}</h5>
    <h5 class="card-title">Чем занимается: ${newTeam.description}</h5>
    <a href="/teams/${newTeam.id}">Участники команды</a>
  </div>
</div>
  `;
}

if ($newDep) {
  $newDep.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    const response = await fetch('http://localhost:3000/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const dataFromServer = await response.json();

    const newTweetHTML = createHTMLforNewDep(dataFromServer);

    $depContainer.insertAdjacentHTML('afterbegin', newTweetHTML);

    event.target.reset();
  });
}

const $newTeam = document.forms.newTeam;
const $teamContainer = document.querySelector('.teamContainer');

if ($newTeam) {
  $newTeam.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    const response = await fetch('http://localhost:3000/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const dataFromServer = await response.json();

    const newTweetHTML = createHTMLforNewTeam(dataFromServer);

    $teamContainer.insertAdjacentHTML('afterbegin', newTweetHTML);

    event.target.reset();
  });
}

const $editForm = document.forms.editForm;

if ($editForm) {
  $editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const $user = event.target.closest('[data-id]');
    const userId = $user.dataset.id;

    const name = document.querySelector('#name').value;
    const picture = document.querySelector('#picture').value;
    const email = document.querySelector('#email').value;
    const role = document.querySelector('#role').value;
    const teamid = document.querySelector('#teamid').value;
    const departmentid = document.querySelector('#departmentid').value;

    const response = await fetch(`http://localhost:3000/employees/edit/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, picture, role, teamid, departmentid,
      }),
    });

    if (response.status === 200) {
      document.location = 'http://localhost:3000/employees';
    }
  });
}
