# shopping-client
> A Vue.js project

## Quick Start
Clone this repo into one folder, e.g. `shoping-client`
Clone the API server project [shopping](https://github.com/sabrinaluo/shopping) in another folder, e.g. `shopping`
```
# install dependencies
npm install

# build html js css file
npm run build

# copy files into server public folder
cp -r dist/* ../shopping/public
```

## Dev
```
npm run dev
```

This project will be hosted on a server configured by webpack.

So you need to change the `Vue.http.options.root` to your full API url, at `./src/main.js` line 12.

If you don't have an API server, you can use https://shopping-sab.herokuapp.com/api

## Misc
- This project uses [vue-cli](https://github.com/vuejs/vue-cli) to generate the scaffold.
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
- Lint only applies on these files `./src/*`, `index.html`
