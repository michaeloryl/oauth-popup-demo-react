This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Running the app

    npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Configuring for your environment

You will have to change the following line in `App.js` to point to your OAuth server:

    let authURL = 'https://my.oauthserver.com/dialog/authorize?response_type=code&client_id=porch&redirect_uri=http://localhost:3000/callback'

You will also want to change this line to point to some other callback URL:

    if (popup.location.href.startsWith('http://localhost:3000/callback')) {

Just make sure that it is in the same domain as the application itself.


