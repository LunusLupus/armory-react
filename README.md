# gw2armory.com [![Build Status](https://travis-ci.org/madou/armory-react.svg?branch=master)](https://travis-ci.org/madou/armory-react)

> Guild Wars 2 Armory is an easy way to find, view, and share users, characters, and guilds with your friends on your mobile and PC! Join today and start sharing!

## Quick start

```
git clone https://github.com/madou/armory-react.git
cd armory-react
npm i
cp src/config/local.sample.js src/config/local.js
npm run dev
```

## Notes for local development

- If running locally make sure you add a `local.js` to the `src/env/` folder. Look at `local.sample.js` for help. This isn't checked in deliberately so we can play with local settings without affecting git history.
- If needed you can get the api over at [armory-back](https://github.com/madou/armory-back). You will have to update your `config/local.js` to point to `localhost` if running the api locally.

## Pull Requests

Feel like contributing? Look at the [issues](https://github.com/madou/armory-react/issues) tab, or contact me on [reddit](https://www.reddit.com/r/gw2armory) or [twitter](https://twitter.com/itsmadou) to find something you'd like to work on, then make a pull request against the `master` branch.

### Issues quick find

- [New features](https://github.com/madou/armory-react/issues?q=is%3Aopen+is%3Aissue+label%3Afeature)
- [Feature enhancements](https://github.com/madou/armory-react/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)
- [Bugs](https://github.com/madou/armory-react/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
- [Chores](https://github.com/madou/armory-react/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)

© 2016 ArenaNet, gw2armory.com
