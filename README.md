# Twitter likes
A demo project of a [webtask.io](http://webtask.io) api, being fed data from [IFTTT](http://ifttt.com) of any tweets you like, and a React app to show them.

## Webtask
The only file relevant is in `webtask/index.js`.

Installing the [Webtask CLI](https://github.com/auth0/wt-cli) is done through npm:

```
npm i -g wt-cli
```

and then:

```
wt init
```

to create a user, or sign in.

You create an endpoint by running `wt create --secret PEEK_MONGO_URL={FULL_URL_TO_YOUR_MONGODB} webtask/index.js`.

## IFTTT
Once you get your Webtask URL you need to set up a recipe on IFTTT. Pick Twitter and `New liked tweet by you` as trigger. Then pick `Maker` as your action channel, and `Make a web request as your action`.

Add a simple GET request to:

```
{YOUR_WEBTASK_URL}&action=addTweet&text={{Text}}&by={{UserName}}&link={{LinkToTweet}}
```

Replace `{YOUR_WEBTASK_URL}` with your url, IFTTT will replace `{Text}}`, `{{UserName}}` and `{{LinkToTweet}}` with the relevant information.

## React App
Replace the `ENDPOINT` constant in `src/actions.js` with your own Webtask endpoint.

Next, run `npm install` and `npm start` and then visit http://localhost:3000
