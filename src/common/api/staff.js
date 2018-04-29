const STAFF_DATA = require('./staff.json');

export const fetchStaff = cb => {
  setTimeout(() => {
    cb(STAFF_DATA)
  }, 500);
}
