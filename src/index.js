document.addEventListener('DOMContentLoaded', () => {


  const activity = document.querySelector('#activity-list')
  const activityBTN = document.querySelector('#activity')
  const buttons = document.querySelector('#buttons')
  const information = document.querySelector('#showInformation')
  const informationList = document.querySelector('#information-list')

  //get new activity when clicked again
  activityBTN.addEventListener('click', getActivity)
  //buttons.addEventListener('click', showMoreInfo)
  //getActivity()
  //alert("I've been clicked");




  function getActivity() {
    fetch(`https://www.boredapi.com/api/activity`)
      .then(res => res.json())
      .then(data => {
        Object.values([data]).forEach(act => displayInfo(act))
        //console.log(data)
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

    showMoreBtn(act)
   
    //create "Favorite" button
    const fav = document.createElement('button')
    buttons.append(fav)
    fav.innerText = "I Love This!"

  }

  //create "Show More" button 
  function showMoreBtn (info) {
      information.innerHTML = ""
      const showMore = document.createElement('button')
      information.append(showMore)
      showMore.innerText = "Show More Information"
      information.addEventListener('click', (e) => {
         showMoreInfo(info)
      })

  }
  function showMoreInfo(info) {
    informationList.innerHTML = ""
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    informationList.append(li)
    informationList.append(li2)
    li.innerText = "Participants: " + info.participants
    li2.innerText = "Type: " + info.type

    console.log(info)

    //alert("I've been clicked")

  }
})

