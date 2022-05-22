document.addEventListener('DOMContentLoaded', () => {


  const activity = document.querySelector('#activity-list')
  const activityBTN = document.querySelector('#activity')
  const favorites = document.querySelector('#favorites')
  const favoriteList = document.querySelector('#favorites-list')
  const information = document.querySelector('#showInformation')
  const informationList = document.querySelector('#information-list')

  //get new activity when clicked again
  activityBTN.addEventListener('click', (e) => {
    getActivity()
  })
  //alert("I've been clicked");




  function getActivity() {
    fetch(`https://www.boredapi.com/api/activity`)
      .then(res => res.json())
      .then(data => { //displayInfo(data))
        Object.values([data]).forEach(act => displayInfo(act))
        //console.log(data)
        //displayInfo(data)
      })
  }

  // Display Activity information
  function displayInfo(act) {
    activity.innerHTML = ""
    const div = document.createElement('div')
    activity.append(div)
    div.innerText = act.activity


    showMoreBtn(act)
    favoritesBtn(act)
    //reset(act)

    //create "Show More Information" button 
    // information.innerHTML = ""
    // const showMore = document.createElement('button')
    // activity.append(showMore)
    // showMore.innerText = "Show More Information"

    // showMore.addEventListener('click', (e) => {
    //   showMoreInfo(act)

    // alert("I was clicked")



  //create "I Love This" Button" 
  // favorites.innerHTML = ""
  // const fav = document.createElement('button')
  // activity.append(fav)
  // fav.innerText = "I Love This"
  // fav.addEventListener('click', (e) => {
  // //   alert("I was clicked")
  //   addFavorites(act)
  //   fav.disabled = true;
  // })
}

  //create "Show More" button 
  function showMoreBtn (info) {
      information.innerHTML = ""
      const showMore = document.createElement('button')
      activity.append(showMore)
      showMore.innerText = "Show More Information"
      showMore.addEventListener('click', (e) => {
         showMoreInfo(info)
      })

  }

  //displays information to show more 
  function showMoreInfo(info) {
    informationList.innerHTML = ""
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    informationList.append(li)
    informationList.append(li2)
    li.innerText = "Participants: " + info.participants
    li2.innerText = "Type: " + info.type
  }

  // function reset() {
  //   document.querySelector("#showInformation").reset();
  // }
  //reset();

  //create favorites button
  function favoritesBtn(favBtn) {
    favorites.innerHTML = ""
    const fav = document.createElement('button')
    activity.append(fav)
    fav.innerText = "I Love This"
    fav.addEventListener('click', (e) => {
      addFavorites(favBtn)
      fav.disabled = !fav.disabled;
      //      alert("I was clicked")
    })

  }

  //save items for later 
  function addFavorites(fav) {
    const li = document.createElement('li')
    favoriteList.append(li)
    li.innerText = fav.activity
  }
})

