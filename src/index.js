const activity = document.querySelector('#activity-list')
const activityBTN = document.querySelector('#activity')

document.addEventListener('DOMContentLoaded', () => {
  activityBTN.addEventListener('click', () => {
    //getActivity()
    alert("I've been clicked");
  })
})

function getActivity() {
  fetch(`https://www.boredapi.com/api/activity`)
    .then(res => res.json())
    .then(data => {
      Object.values([data]).forEach(act => displayInfo(act))
      console.log(data)
      //return displayInfo(data)
    })
}


function displayInfo(act) {
  let info = document.createElement('div')
  info.className = 'card'
  activity.append(info)
  info.innerHTML = `
  <h2>${act.activity}</h2>
  <p>Type of Activity: ${act.type}</p>
  <p>Number of  Participants: ${act.participants}</p>
  <button class="like-btn" id="${act.id}">Like ❤️</button>
`
}


