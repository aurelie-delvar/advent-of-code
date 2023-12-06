const input = 'Time:        55999793 Distance:   401148522741405';
// const input = 'Time:      7  15   30 0 Distance:  9  40  200 0';

// isoler durée en ms et record en mm
const regexTime = /Time:\s+(\d+)/;
const regexDist = /Distance:\s+(\d+)/;

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