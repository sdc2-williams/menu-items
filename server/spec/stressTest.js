import http from "k6/http";
import { check, sleep } from "k6";

const getRandomNum = (min,max) => {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}

export const options = {
  vus: 10,
  duration: '5m',
  rps: 1000,
};

export default function () {
 let res = http.get(`http://localhost:3000/api/menu/${getRandomNum(1, 100)}/`);
 check(res, {
  "status was 200": (r) => r.status == 200
});
}