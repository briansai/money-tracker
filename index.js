const form = document.querySelector('form');
const name = document.querySelector('#name');
const cost = document.querySelector('#cost');
const error = document.querySelector('#error');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const costValue = parseInt(cost.value);

  if (!name.value || !cost.value) {
    error.textContent = 'Please enter values before submitting';
  } else if (!costValue) {
    error.textContent = 'Please enter a valid number';
  } else {
    const item = {
      name: name.value,
      cost: costValue,
    };
    db.collection('expenses')
      .add(item)
      .then((res) => {
        name.value = '';
        cost.value = '';
        error.textContent = '';
      })
      .catch((err) => {
        error.textContent = 'Error adding data.  Please try again later.';
      });
  }
});
