# node-ffxiv-time

Get current Eorzea time.

## Example

```node
import { getTime } from "ffxiv-time";

const time = getTime();

console.log(time.toString()); //==> '01:23'
console.log(time.hours); //==> 1
console.log(time.minutes); //==> 23
```

## License

MPL 2.0.
