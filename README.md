# vanillaJSinsideReact

[Proof of concept]
Mount other applications inside a React one. It seems dumb but it's not that trivial.
We need to mount the apps when the componentDidMount, this way we have access to the domNode in the component so we can modify the content.


## How to use
Run
```
npm install // install dependencies
npm start  // run a webpack dev serve
```
go to [http://localhost:8080](http://localhost:8080)
