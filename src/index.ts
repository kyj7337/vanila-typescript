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

let id = document.getElementById('id');
let password = document.getElementById('password');
let btn = document.getElementById('login-btn');
let idValue: string | null = null;
let pwValue: string | null = null;
function handleIdOnChange(e: Event) {
  const { value } = e.target as HTMLInputElement;
  idValue = value;
}
function handlePwOnChange(e: Event) {
  const { value } = e.target as HTMLInputElement;
  pwValue = value;
}
function onClickLogin(e: Event) {
  console.log(e);
  const params = new FormData();
  const clientSecret = 'fiwejlkfjijiew84ohigljw4k348gjfsjeourwourijfjklweoe3oeruofjklsl';
  params.append('grant_type', 'password');
  params.append('client_id', 'applicant-api');
  params.append('client_secret', clientSecret);
  if (idValue && pwValue) {
    params.append('username', idValue);
    params.append('password', pwValue);
  }
  const url = 'https://api.applicant.viewinter-hr.ai/oauth/token';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-genesislab-device-type-id': '30000',
    },
    body: params,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}
id?.addEventListener('change', handleIdOnChange);
password?.addEventListener('change', handlePwOnChange);
btn?.addEventListener('click', onClickLogin);
