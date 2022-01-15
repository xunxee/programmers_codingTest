let phone_number = "01033334444" //return은 "*******4444"

function solution(phone_number) {
  console.log(phone_number.replace(/\d(?=\d{4})/g, "*"));
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

solution(phone_number);