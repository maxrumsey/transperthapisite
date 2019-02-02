function smartRiderFormSubmit() {
  const btn = document.getElementById('form-submit');
  const card_number_input = document.getElementById('smartrider-input');

  axios.get(`/api/v1/smartrider?card_number=${card_number_input.value}`)
  .then(function (response) {
    if (response.data.balance === null) {
      pushError('SmartRider Not Found', 'error-container')
    }
    const output_balance = document.getElementById('form_output_balance');
    const output_conc_type = document.getElementById('form_output_conc_type');
    const output_conc_expiry = document.getElementById('form_output_conc_expiry');
    const output_autoload = document.getElementById('form_output_autoload');

    output_balance.innerHTML = response.data.balance;
    output_conc_type.innerHTML = response.data.conc_type;
    output_conc_expiry.innerHTML = response.data.conc_expiry;
    output_autoload.innerHTML = response.data.autoload;

  })
  .catch(function (error, r) {
    console.log(error);
    pushError(error.response.data.msg || error.message, 'error-container')
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('form-submit');
  if (!btn) return;
  btn.disabled = false;
})

function pushError(msg, id) {
  const html = `
  <div class="alert alert-danger" role="alert">
    ${msg || 'An error has occured.'}
  </div>`
  const container = document.getElementById(id);
  if (!container) throw new Error('Container not Found')
  container.innerHTML = html;
}
