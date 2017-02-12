# linux-temperature

## install
```
npm install --save linux-cpu-temp
```

## usage
```javascript
const temp = require('linux-cpu-temp');
temp.default().then(a => {
  console.log(a.temperature);
});
```
