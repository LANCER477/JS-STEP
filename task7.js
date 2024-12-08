function formatTime(hours, minutes = 0, seconds = 0) {
    const addZero = (num) => (num < 10 ? `0${num}` : num);
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
}

alert(formatTime(10, 25, ));