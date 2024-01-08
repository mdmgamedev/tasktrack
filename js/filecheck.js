// JavaScript Protocol Checker

if (window.location.protocol === 'file:') {
    alert('For this file to work you need to host it on a server, because it uses the Notification API. Please put it on localhost')
  } else {
    console.log('Page is on server so it\'s ready to work with.');
  }
  