function changeColor() {
  awsAccountName = awsAccount()
  awsNavBar = awsNavBar()
  awsNavBarChildrens = getChildrensFrom(awsNavBar);
  awsNavBarRightChildrens = getChildrensFrom(awsNavBarRight())


  chrome.storage.sync.get(awsAccountName, function(awsAccount) {
    if (awsAccount) {
      color = awsAccount[awsAccountName].color

      awsNavBar.style.backgroundColor=color
      Array.from(awsNavBarChildrens).forEach(children => children.style.backgroundColor=color)
      Array.from(awsNavBarRightChildrens).forEach(children => children.style.backgroundColor=color)
    }
  })
}

function awsNavBar() {
  return document.querySelector('#nav-menubar')
}

function awsNavBarRight() {
  return document.querySelector('#nav-menu-right')
}

function getChildrensFrom(parent) {
  return parent.children
}

function awsAccount() {
  return document.querySelector('#awsc-login-display-name-account').title
}

window.onload = changeColor