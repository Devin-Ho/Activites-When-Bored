const activity = document.querySelector('#activity')
const activityBTN = document.querySelector('#activity-list')

document.addEventListener('DOMContentLoaded', () => {
  //activityBTN.addEventListener('click', getActivity)
  getActivity();
})

function getActivity() {
  fetch(`https://www.boredapi.com/api/activity`)
    .then(res => res.json())
    .then(data => {
      activity.innerHTML += `<li>${data.activity}</li>`
      console.log(data)
    })
}