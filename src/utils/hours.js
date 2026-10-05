// Shop hours in Bellingham (Pacific time). Day 0 = Sunday.
export const HOURS = [
  { day: 'Sunday', open: null, close: null },
  { day: 'Monday', open: 9, close: 17 },
  { day: 'Tuesday', open: 9, close: 17 },
  { day: 'Wednesday', open: 9, close: 17 },
  { day: 'Thursday', open: 9, close: 17 },
  { day: 'Friday', open: 9, close: 17 },
  { day: 'Saturday', open: null, close: null },
];

const formatHour = (h) => `${h % 12 || 12}${h < 12 ? 'am' : 'pm'}`;

export const formatHours = ({ open, close }) =>
  open === null ? 'Closed' : `${formatHour(open)} – ${formatHour(close)}`;

// Current day and fractional hour in the shop's time zone, regardless of the visitor's.
const shopNow = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, hour: Number(get('hour')) + Number(get('minute')) / 60 };
};

export const getShopStatus = (date = new Date()) => {
  const { day, hour } = shopNow(date);
  const today = HOURS[day];

  if (today.open !== null && hour >= today.open && hour < today.close) {
    const closingSoon = today.close - hour <= 1;
    return {
      day,
      isOpen: true,
      label: closingSoon ? 'Closing soon' : 'Open now',
      detail: `Walk in until ${formatHour(today.close)}`,
    };
  }

  // Find the next opening, starting later today if we haven't opened yet.
  for (let i = 0; i < 7; i++) {
    const next = HOURS[(day + i) % 7];
    if (next.open === null || (i === 0 && hour >= next.open)) continue;
    const when = i === 0 ? 'today' : i === 1 ? 'tomorrow' : next.day;
    return { day, isOpen: false, label: 'Closed now', detail: `Opens ${when} at ${formatHour(next.open)}` };
  }
  return { day, isOpen: false, label: 'Closed now', detail: '' };
};
