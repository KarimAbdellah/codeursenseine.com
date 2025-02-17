export const formatHour = (hour: string | undefined) => {
  if (!hour) {
    return;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
  }).format(Date.parse(hour));
};

/**
 * Takes two dates and return a string of the duration in hour and minutes.
 * This has been develop thinking about little differences, like hours, not days
 * @param date1
 * @param date2
 * @returns
 */
export const getDiff = (
  date1: string | undefined,
  date2: string | undefined
) => {
  if (!date1 || !date2) {
    return;
  }

  const diff = Math.abs(new Date(date1).getTime() - new Date(date2).getTime());

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours === 0) {
    return `${minutes < 10 ? '0' : ''}${minutes} min`;
  }

  return `${hours < 10 ? '0' : ''}${hours} h ${
    minutes < 10 ? '0' : ''
  }${minutes} min`;
};
