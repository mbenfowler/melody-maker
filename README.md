# melody-maker
Melody Maker™®© is an open source music education/creative tool that will generate and play you a unique melody!

[Check out the latest app version here!](https://quizzical-varahamihira-d6e47e.netlify.app/) 

Clicking the "Get me a new melody!" button hits our API, returning an encoded set of melody/scale data as URL query parameters. These params are then processed when clicking play melody/play scale buttons. Just hit the new melody button again to get another tune, guaranteed to be unique and never before heard in the history of music or your money back!

### Project details:
- The app is made with React + Node(Express) and hosted on Netlify
- Playing of the tones uses the standard [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) audio context that can be played in any modern browser. (sorry IE)
- A lot of the theory logic was inspired by and borrowed from [tonaljs](https://github.com/tonaljs/tonal)

### Applications:
- Makes for a fun slackbot ![Melody Maker Slackbot](/images/slackbot-response.png)
