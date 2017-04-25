const timeSelector = (time_ago_in_words) => {
  const num = time_ago_in_words.match(/[0-9]+/g);
  if (time_ago_in_words.includes('hour')) {
    return num + 'h';
  }
  if (time_ago_in_words.includes('day')) {
    return num + 'd';
  }
  if (time_ago_in_words.includes('week')) {
    return num + 'w';
  }
  if (time_ago_in_words.includes('a minute')) {
    return '1min';
  }
  if (time_ago_in_words.includes('minute')) {
    return num + 'min';
  }
  if (time_ago_in_words.includes('month')) {
    return num + 'm';
  }
  if (time_ago_in_words.includes('year')) {
    return num + 'y';
  }
  return time_ago_in_words;
};

export default timeSelector;
