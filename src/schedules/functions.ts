const g_m_d = (y, sm, sh) => {
  const sdm = new Date(y, sm, 1, sh, 0, 0);
  const fdm = new Date(y, sm + 1, 0, sh, 0, 0);

  const fDm = fdm.getDate();
  const t_s = [];

  for (let j = 0; j < fDm; j++) {
    if (j == 0) {
      let x = new Date(sdm.setDate(sdm.getDate()));
      t_s.push(x);
    } else {
      let x = new Date(sdm.setDate(sdm.getDate() + 1));
      if (x.getDay() != 0 && x.getDay() != 6) {
        t_s.push(x);
      }
    }
  }
  return t_s;
};

const g_m_a = (at, t_s, hw) => {
  const range = Math.floor((hw * 60) / at);
  let t_a = [];

  t_s.forEach((date) => {
    for (let i = 0; i < range; i++) {
      if (i == 0) {
        const a = new Date(date.setMinutes(date.getMinutes()));
        t_a.push(a);
      } else {
        const a = new Date(date.setMinutes(date.getMinutes() + at));
        t_a.push(a);
      }
    }
  });
  return t_a;
};

const y = new Date().getFullYear();
const sm = 2;
const at = 10;
const sh = 6;
const hw = 8;

module.exports = {g_m_d, g_m_a};
