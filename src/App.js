import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  createWindow(url, name, width, height) {
    let left = 0
    let top = 0

    if (!name) {name = 'Window'}
    if (!width) {width = 500}
    if (!height) {height = 600}

    if (url == null) {
      return null
    }

    var options = `width=${width},height=${height},left=${left},top=${top}`

    return window.open(url, name, options)
  }

  openWindow() {
    let authURL = 'https://my.oauthserver.com/dialog/authorize?response_type=code&client_id=porch&redirect_uri=http://localhost:3000/callback'
    let popup, oauthInterval

    popup = this.createWindow(authURL, 'OAuth')
    console.info('Popup opened:', popup)

    oauthInterval = setInterval(() => {
      try {
        if (popup.location.href.startsWith('http://localhost:3000/callback')) {
          console.info('Callback received:', popup.location.href)
          /*
          * EXTRACT THE AUTH CODE FROM THE URL AND EXCHANGE IT FOR A TOKEN TO VERIFY WHO LOGGED IN
          */
          clearInterval(oauthInterval)
          popup.close()
        }
      } catch (e) { // any time we access popup.location.href and it is not on our domain, we'll catch an error (and ignore it)
        // console.log('Unable to access href')
      }
    }, 500)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="javascript:void(0)" onClick={() => this.openWindow()}>
            <img onClick={() => this.openWindow()} src={logo} className="App-logo" alt="logo"/>
            <br/>
            Start Login
          </a>
        </header>
      </div>
    )
  }
}

export default App
