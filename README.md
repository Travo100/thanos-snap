# thanos-snap
Using Thano's powerful snap he will take any data given to him return back only half.

Example Usage
```
const Thanos = require("thanos-snap");

Thanos.snap(4) // returns 2 

Thanos.snap("Hello") // returns "Hel"

Thanos.snap([1, 2, 3, 4]) // returns [1, 2]

Thanos.snap({
    name: "Spider Man",
    realName: "Peter Parker",
    sidekick: true, 
    mood: "Doesn't feel so good."
});
