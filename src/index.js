document.addEventListener('DOMContentLoaded', () => {


  const activity = document.querySelector('#activity-list')
  const activityBTN = document.querySelector('#activity')

  //get new activity when clicked again
  activityBTN.addEventListener('click', getActivity)
  //getActivity()
  //alert("I've been clicked");




  function getActivity() {
    fetch(`https://www.boredapi.com/api/activity`)
      .then(res => res.json())
      .then(data => {
        Object.values([data]).forEach(act => displayInfo(act))
        console.log(data)
        //displayInfo(data)

      })
  }

  // Display Activity information
  function displayInfo(act) {
    activity.innerHTML = ""
    const h2 = document.createElement('h2')
    const div1 = document.createElement('div')
    activity.append(h2)
    activity.append(div1)
    h2.innerText = act.activity
    div1.innerText = "Participants: " + act.participants

    //create "Favorite" button
    const fav = document.createElement('button')
    activity.append(fav)
    fav.innerText = "I love this!"

  }
})

