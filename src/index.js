document.addEventListener('DOMContentLoaded', () => {


  const activity = document.querySelector('#activity-list')
  const activityBTN = document.querySelector('#activity')
  const buttons = document.querySelector('#buttons')

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
    const div = document.createElement('div')
    //const div1 = document.createElement('div')
    activity.append(div)
    //activity.append(div1)
    div.innerText = act.activity
    //div1.innerText = "Participants: " + act.participants

    //create "Show More" button 
    const showMore = document.createElement('button')
    buttons.append(showMore)
    showMore.innerText = "Show More Information"

    //create "Favorite" button
    const fav = document.createElement('button')
    buttons.append(fav)
    fav.innerText = "I love this!"

  }
})

