class CountdownTimer {
    constructor(selector, targetDate) {
      this.targetDate = targetDate;
      this.daysRef = document.querySelector(
        `${selector} span[data-value="days"]`,
      );
      this.hoursRef = document.querySelector(
        `${selector} span[data-value="hours"]`,
      );
      this.minsRef = document.querySelector(
        `${selector} span[data-value="mins"]`,
      );
      this.secsRef = document.querySelector(
        `${selector} span[data-value="secs"]`,
      );
    }
  
    textContent = (days, hours, mins, secs) => {
      timer.daysRef.textContent = days;
      timer.hoursRef.textContent = hours;
      timer.minsRef.textContent = mins;
      timer.secsRef.textContent = secs;
    };
  
    countingTime() {
      const time = this.targetDate - Date.now();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      this.textContent(days, hours, mins, secs);
    }
  
    pad(value) {
      return String(value).padStart(2, '0');
    }
  
    init() {
      setInterval(() => {
        this.countingTime();
      }, 1000);
    }
}
  
const timer = new CountdownTimer('#timer-1', new Date('Jan 01, 2021'));
timer.init();