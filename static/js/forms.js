function smartRiderFormSubmit() {
  clearContainer('error-container')
  const btn = document.getElementById('form-submit');
  const card_number_input = document.getElementById('smartrider-input');
  btn.disabled = true;
  axios.get(`/api/v1/smartrider?card_number=${card_number_input.value}`)
  .then(function (response) {
    btn.disabled = false;
    clearContainer('error-container')
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
    btn.disabled = false;

    console.log(error);
    pushError(error.response.data.msg || error.message, 'error-container')
  });
}
function busTimesFormSubmit() {
  clearContainer('error-container')
  const btn = document.getElementById('form-submit');
  const stop_number_input = document.getElementById('bus-stop-input');
  btn.disabled = true;

  axios.get(`/api/v1/busTimes?stop_number=${stop_number_input.value}`)
  .then(function (response) {
    btn.disabled = false;

    if (!response.data.buses || response.data.buses.length === 0) {
      pushError('Bus Stop Not Recognized or No More Bus Activity', 'error-container')
    }
    const output = document.getElementById('form-output');
    const data = []
    for (var i = 0; i < response.data.buses.length; i++) {
      data.push(`
        <div class='section'>
          <p>Time: ${response.data.buses[i].time}.</p>
          <p>Route: ${response.data.buses[i].route}.</p>
          <p>Destination: ${response.data.buses[i].destination}.</p>
        </div>
      `)
    }
    output.innerHTML = data.join('\n')
  })
  .catch(function (error, r) {
    btn.disabled = false;

    console.log(error);
    pushError(error.response.data.msg || error.message, 'error-container')
  });
}
function ferryTimesFormSubmit() {
  clearContainer('error-container')
  const btn = document.getElementById('form-submit');
  const stop_number_input = document.getElementById('ferry-stop-input');
  btn.disabled = true;

  axios.get(`/api/v1/ferryTimes?stop_number=${stop_number_input.value}`)
  .then(function (response) {
    btn.disabled = false;
    if (!response.data.ferries || response.data.ferries.length === 0) {
      pushError('Ferry Stop Not Recognized or No More Ferry Activity', 'error-container')
    }
    const output = document.getElementById('form-output');
    const data = []
    for (var i = 0; i < response.data.ferries.length; i++) {
      data.push(`
        <div class='section'>
          <p>Time: ${response.data.ferries[i].time}.</p>
          <p>Route: ${response.data.ferries[i].route}.</p>
          <p>Departs: ${response.data.ferries[i].departs}.</p>
        </div>
      `)
    }
    output.innerHTML = data.join('\n')
  })
  .catch(function (error, r) {
    btn.disabled = false;

    console.log(error);
    pushError(error.response.data.msg || error.message, 'error-container')
  });
}
function trainTimesFormSubmit() {
  clearContainer('error-container')
  const btn = document.getElementById('form-submit');
  const train_line_input = document.getElementById('train-line-input');
  const train_station_input = document.getElementById('train-station-input');
  const train_direction_input = document.getElementById('train-direction-input');
  btn.disabled = true;

  axios.get(`/api/v1/trainTimes?direction=${train_direction_input.value}&trainline=${train_line_input.value}&station=${train_station_input.value}`)
  .then(function (response) {
    btn.disabled = false;
    console.log(response)
    if (!response.data.trains || response.data.trains.length === 0) {
      pushError('Train Station Not Recognized or No More Train Activity', 'error-container')
    }
    const output = document.getElementById('form-output');
    const data = []
    for (var i = 0; i < response.data.trains.length; i++) {
      data.push(`
        <div class='section'>
          <p>Scheduled Time: ${response.data.trains[i].scheduled_time}.</p>
          <p>Estimated Time: ${response.data.trains[i].running_time}.</p>
          <p>Platform: ${response.data.trains[i].platform}.</p>
          <p>Stopping Pattern: ${response.data.trains[i].stopping_pattern}.</p>
        </div>
      `)
    }
    output.innerHTML = data.join('\n')
  })
  .catch(function (error, r) {
    btn.disabled = false;

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
function clearContainer(id) {
  const container = document.getElementById(id);
  container.innerHTML = '';
}
