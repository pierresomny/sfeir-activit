interface Date {
  getWeek(): number;

  getYear(): number;
}

Date.prototype.getWeek = function (): number {
  let date: Date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (
    date.getDay() + 6
  ) % 7);
  // January 4 is always in week 1.
  let week1: Date = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round((
                          (
                            date.getTime() - week1.getTime()
                          ) / 86400000
                          - 3 + (
                          week1.getDay() + 6
                          ) % 7
                        ) / 7);
};

Date.prototype.getYear = function (): number {
  let date: Date = new Date(this.getTime());
  date.setDate(date.getDate() + 3 - (
    date.getDay() + 6
  ) % 7);
  return date.getFullYear();
};
