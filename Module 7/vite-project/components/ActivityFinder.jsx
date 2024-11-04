import { useState, useEffect } from "react";

export function ActivityFinder() { // Fetches a random activity
const [participants, setParticipants] = useState(1);
const [activity, setActivity] = useState('');

useEffect(() => {
console.log('running effect');
let ignore = false; // flag to allow ignoring of the fetch result

fetch('https://www.boredapi.com/api/activity?' +

'participants=' + participants)
.then(response => response.json())
.then(json => {
// only update state if the effect is still valid
// ie. the dependency hasn't changed since the request
if (!ignore) setActivity(json.activity);
});

// cleanup function - runs when unmounted or dependencies change
return () => {
ignore = true; // ignore now invalid fetch results
console.log('cleanup effect');
};
}, [participants]); // effect dependencies

return (
<div className="ActivityFinder componentBox">
<h3>Activity Finder</h3>
<label>Choose number of participants:
<select value={participants}

onChange={e => setParticipants(e.target.value)}>
<option>1</option><option>2</option><option>3</option>
</select>
</label>
<div><strong>Suggested Activity: </strong>{activity}</div>
</div>
)
}