# ⚡️Thataway⚡️
Minimal url routing library.

- Written in plain ol JavaScript so **no transpile needed**🔥
- Under 2k minified💥
- Simple api of three methods:
    - addRoute
    - addListener
    - navigate

## Install
`npm i thataway --save`

## Usage
Simplest working example

```
var createRouter = require('thataway')
var router = createRouter()
router.addRoute('/things', {animal:'raccoon'})
router.addListener(update)
function update(data) {
  console.log(data)// Outputs {animal:'racoon',path:'/things',params:{},query:{}}
}
router.navigate('/things')
```

Complex urls
```
var createRouter = require('thataway')
var router = createRouter()
router.addRoute('/things/:comment/:id', {animal:'raccoon'})
router.addListener(update)
function update(data) {
  console.log(data)// Outputs {animal:'racoon',path:'/things', params: {comment:'123',id:'456'}, query:{}}
}
router.navigate('/things/123/456')
```

Use the router to associate a data object with a url. When the url is navigated to either by using the `navigate` method or from using the browser's back button all registered listeners will be called with the stored data object with the url properties of `params` and `query` added in.

