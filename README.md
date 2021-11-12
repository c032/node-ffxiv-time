# node-ffxiv-time

Get current Eorzea time.

## Example

```node
const { getTime } = require('ffxiv-time');

const time = getTime(); //==> '01:23'
console.log(time.hours); //==> 1
console.log(time.minutes); //==> 23
```

## License

Apache 2.0
