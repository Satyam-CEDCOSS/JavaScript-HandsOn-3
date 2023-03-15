// 61 Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);

// 62 Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");

// 63 Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10);

// 64 Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val!==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10);

// 65 Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
    if (val>10) {  // Change this line
      return "Over 10";
    }
    return "10 or Under";
  }
  testGreaterThan(10);

// 66 Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
    return "Less than 10";
  }
  testGreaterOrEqual(10)

// 67 Comparison with the Less Than Operator
function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
    if (val<55) {  // Change this line
      return "Under 55";
    }
    return "55 or Over";
  }
  testLessThan(10);

// 68 Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val<=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
  }
  testLessOrEqual(10);

// 69 Comparisons with the Logical And Operator
function testLogicalAnd(val) {
    // Only change code below this line
    if (val>=25 && val<=50) {
        return "Yes";
      }
    // Only change code above this line
    return "No";
  }
  testLogicalAnd(10);

// 70 Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  testLogicalOr(15);

// 71 Introducing Else Statements
function testElse(val) {
    let result = "";
    // Only change code below this line
    if (val > 5) {
      result = "Bigger than 5";
    }
    else{
      result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
  }
  testElse(4);

// 72 Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else{
      return "Between 5 and 10";
    }
  }
  testElseIf(7);

// 73 Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  orderMyLogic(7);

// 74 Changing IF Else Statements
function testSize(num) {
    // Only change code below this line
    if (num<5){
      return "Tiny"
    }
    else if (num<10){
      return "Small"
    }
    else if (num<15){
      return "Medium"
    }
    else if (num<20){
      return "Large"
    }
    else{
      return "Huge";
    }
    // Only change code above this line
  }
  testSize(7);

// 75 Golf Code
function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1){
      return "Hole-in-one!"
    }
    else if (strokes == 2){
      return "Eagle"
    }
    else if (strokes == 3){
      return "Birdie"
    }
    else if (strokes-par==0){
      return "Par"
    }
    else if (strokes-par==1){
      return "Bogey"
    }
    else if (strokes-par==2){
      return "Double Bogey"
    }
    else{
      return "Go Home!"
    }
    return "Change Me";
    // Only change code above this line
  }
  golfScore(5, 4);

// 76 Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
  caseInSwitch(1);

// 77 Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
    // Only change code above this line
    return answer;
  }
  switchOfStuff(1);

// 78 Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low"
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid"
        break;
      case 7:
      case 8:
      case 9:
        answer = "High"
    }
    // Only change code above this line
    return answer;
  }
  sequentialSizes(1);

// 79 Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case "bob":
        answer = "Marley"
        break;
      case 42:
        answer = "The Answer"
        break;
      case 1:
        answer = "There is no #1"
        break;
      case 99:
        answer = "Missed me by this much!"
        break;
      case 7:
        answer = "Ate Nine"
    }
    return answer;
  }
  chainToSwitch(7);

// 80 Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    return(b-a>0)
    // Only change code above this line
  }
  isLess(10, 15);