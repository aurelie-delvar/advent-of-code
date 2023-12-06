const input = 'Time:        55     99     97     93 Distance:   401   1485   2274   1405';
// const input = 'Time:      7  15   30 0 Distance:  9  40  200 0';

// isoler durée en ms et record en mm
const regexTime = /Time:\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+/;
const regexDist = /Distance:\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/;

const timeMatch = input.match(regexTime);
const distMatch = input.match(regexDist);

if(timeMatch && distMatch) {

    // const timeArray = [];
    // const distArray = [];
    // const map = {};

    let multiply = 1;
    for(let i=1; i < timeMatch.length; i++) {

        const time = (timeMatch[i]);
        const dist = (distMatch[i]);
        // map[timeArray[i - 1]] = distArray[i - 1];

        let total = 0;
        for(let j = 0; j <= time; j ++) {
            let moved = j * (time - j);

            if(moved > dist) {
                total ++;
            }
        }

        multiply *= total;
        console.log(multiply);
    }

} else {
    console.log("erreur");
}