"use strict"
function getResult(a,b,c){
    let a = 2;
    let b = 4;
    let c = 3;
    let D = b**2 - 4*a*c;
    if (D < 0){
      x = [];
    }
    if (D == 0){
      x = [-b/(2*a)];
    }
    if (D > 0){
      x = [(-b+Math.sqrt(D))/(2*a)];
      x = [(-b-Math.sqrt(D))/(2*a)];
  }
  return x

function getAverageMark(marks){
     let marks = '';
      marks.slice(0,5)

      if (marks.lenghts == 0){
        return 0;
    }
    if (marks.lenghts >= 5){
        return marks/marks.lenghts;
    }

    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}