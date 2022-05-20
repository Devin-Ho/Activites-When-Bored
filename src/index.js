const activity = document.querySelector('#activity-list')
const activityBTN = document.querySelector('#activity')

document.addEventListener('DOMContentLoaded', () => {
  activityBTN.addEventListener('click', getActivity)
    //getActivity()
    //alert("I've been clicked");
  //})
})

function getActivity() {
  fetch(`https://www.boredapi.com/api/activity`)
    .then(res => res.json())
    .then(data => {
      Object.values([data]).forEach(act => displayInfo(act))
      //console.log(data)
      //displayInfo(data)
      
    })
}
function displayInfo(act) {
//   let info = document.createElement('div')
//   info.className = 'card'
//   activity.append(info)
//   info.innerHTML = `
//   <h2>${act.activity}</h2>
//   <li>Type of Activity: ${act.type}</li>
//   <li>Number of  Participants: ${act.participants}</li>
//   <br>
//   <button class="like-btn" id="${act.id}">Like ❤️</button>
//   </br>
// `

activity.innerHTML= ""
const h2 = document.createElement('div')
activity.append(h2)
h2.innerText = act.activity

}


