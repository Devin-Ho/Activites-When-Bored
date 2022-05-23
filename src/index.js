document.addEventListener('DOMContentLoaded', () => {


  const activity = document.querySelector('#activity-list')
  const activityBTN = document.querySelector('#activity')
  const favorites = document.querySelector('#favorites')
  const favoriteList = document.querySelector('#favorites-list')
  const information = document.querySelector('#showInformation')
  const informationList = document.querySelector('#information-list')

  //get new activity when clicked again
  activityBTN.addEventListener('click', () => {
    getActivity();
    resetShowMe();
  })


  function getActivity() {
    fetch(`https://www.boredapi.com/api/activity`)
      .then(res => res.json())
      .then(data => {
        Object.values([data]).forEach(act => displayInfo(act))
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

  }

  //create "Show More" button 
  function showMoreBtn(info) {
    information.innerHTML = ""
    const showMore = document.createElement('button')
    activity.append(showMore)
    showMore.innerText = "Show More Information"
    showMore.addEventListener('click', (e) => {
      showMoreInfo(info)
      showMore.disabled = !showMore.disabled;
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

  //create favorites button
  function favoritesBtn(favBtn) {
    favorites.innerHTML = ""
    const fav = document.createElement('button')
    activity.append(fav)
    fav.innerText = "I Love This"
    fav.addEventListener('click', (e) => {
      addFavorites(favBtn)
      fav.disabled = !fav.disabled;
      //alert("I was clicked")
    })
  }

  //save items for later 
  function addFavorites(fav) {
    const li = document.createElement('li')
    favoriteList.append(li)
    li.innerText = fav.activity

    //add delete button
    // const deleteButton = document.createElement('button')
    // deleteButton.textContent = ' x'
    // deleteButton.addEventListener('click', () => {
    //   favoriteList.removeChild(li)
      li.addEventListener('click', () => {
        favoriteList.removeChild(li)
    })
    //li.append(deleteButton)
  }


  //resetting show me more information
  function resetShowMe() {
    const resetID = document.querySelector('#information-list')
    resetID.innerHTML = " "
  }
})


