"use strict";
// interface datas {
//   id: number;
//   type: number;
//   question: string;
//   setNumber?: number;
// }
// interface persons {
//   name: string;
//   age: number;
//   status?: string;
// }
// const makeinitData = (arrayData: datas[]) => {
//   return arrayData
//     .reduce((result: datas[], current) => {
//       return result.concat(current, current);
//     }, [])
//     .reduce((acc: datas[], cur, index) => {
//       return acc.concat({
//         setNumber: index,
//         id: cur.id,
//         type: cur.type,
//         question: cur.question,
//       });
//     }, []);
// };
// const reduceResult = makeinitData([
//   { id: 0, type: 1, question: '제목입니다' },
//   { id: 1, type: 1, question: '제목입니다2' },
//   { id: 2, type: 2, question: '제모' },
//   { id: 2, type: 1, question: 'ㅇㅇ' },
// ]);
// console.log({ reduceResult });
// const makeSum = (numbers: number[]) => {
//   return numbers.reduce((result, cur) => {
//     return cur + result;
//   }, 0);
// };
// makeSum([1, 2, 3, 4, 5]);
// const makeMap = (peoples: persons[]) => {
//   return peoples.map((item: persons, idx: number) => {
//     item.status = '최상';
//   });
// };
// makeMap([
//   { name: '영준', age: 28 },
//   { name: '채영', age: 27 },
//   { name: '재원', age: 25 },
// ]);
var id = document.getElementById('id');
var password = document.getElementById('password');
var btn = document.getElementById('login-btn');
var idValue = null;
var pwValue = null;
function handleIdOnChange(e) {
    var value = e.target.value;
    idValue = value;
}
function handlePwOnChange(e) {
    var value = e.target.value;
    pwValue = value;
}
function onClickLogin(e) {
    console.log(e);
    console.log(idValue, pwValue);
}
id === null || id === void 0 ? void 0 : id.addEventListener('change', handleIdOnChange);
password === null || password === void 0 ? void 0 : password.addEventListener('change', handlePwOnChange);
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', onClickLogin);
