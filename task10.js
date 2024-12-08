function timeToSec(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

function secToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    function addZero(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

    return addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
}


function dateDiff(h1, m1, s1, h2, m2, s2) {

    const time1InSec = timeToSec(h1, m1, s1);
    const time2InSec = timeToSec(h2, m2, s2);
    const diffInSec = Math.abs(time1InSec - time2InSec);
    return secToTime(diffInSec);
}
alert(dateDiff(12, 30, 0, 14, 0, 30)); 
alert(dateDiff(23, 45, 15, 0, 15, 45)); 
