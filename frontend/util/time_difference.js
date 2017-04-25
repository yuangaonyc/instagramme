function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
         return Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
         return Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
         return Math.round(elapsed/msPerYear ) + ' years ago';
    }
}

const timeParser = (time) => {
  const year = time.slice(0,4);
  const month = time.slice(5,7);
  const day = time.slice(8,10);
  const hour = time.slice(11,13);
  const minute = time.slice(14,16);
  const second = time.slice(17,19);
  console.log(time);
  console.log(year, month, day, hour, minute, second);
  return timeDifference(new Date(), new Date(year, month, day, hour, minute, second));
};

export default timeParser;
