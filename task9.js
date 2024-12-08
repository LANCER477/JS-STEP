function secToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    const addZero = (num) => (num < 10 ? `0${num}` : num);
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

alert(secToTime(5415));