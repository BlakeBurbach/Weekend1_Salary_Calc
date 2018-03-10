// class to create employee objects
class Employee {
  constructor( firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn ){
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumberIn = idNumberIn;
    this.jobTitleIn = jobTitleIn;
    this.annualSalaryIn = annualSalaryIn;
  }
}

let monthlyBudget = 20000;
let employeeArray = [];

// doc ready
$( document ).ready( readyNow );

// when doc is ready
function readyNow(){

  // this function creates ONE employee object from the Employee class
  // and push it to the employeeArray
  pushEmployeeOnClick();

  // clear the input fields once a user has made a submission
  clearInputFields();

  // a function that will calculate the monthly cost based on each employees salary
  calculateMonthlyCost();

} // end readyNow

// on click the submit button create an employee and add it to the employeeArray
function pushEmployeeOnClick(){
  $( '#submitBtn' ).on( 'click', function(){
// variables that will house the input values for ease of rewriting and using in preceding functions
    let first = $( '#firstNameInput' ).val();
    let last = $( '#lastNameInput' ).val();
    let id = $( '#idNumberInput' ).val();
    let jobTitle = $( '#jobTitleInput' ).val();
    let salary = Number( $( '#annualSalaryInput' ).val() );
    //this updatedEmployee is the same employee object that is created with appendEmployeeOnClick()
    let updatedEmployee = new Employee( first, last, id, jobTitle, salary  );
    employeeArray.push( updatedEmployee );
    console.log( employeeArray );
    appendEmployeeOnClick( first, last, id, jobTitle, salary  );
    calculateMonthlyCost( salary );
    return updatedEmployee;
  }); // end on click
  clearInputFields();
} // end addEmployeeOnClick

// function that will take employee info from pushEmployeeOnClick() and append it to the table DOM
function appendEmployeeOnClick( first, last, id, jobTitle, salary  ){
  console.log( 'button is working' );
  // append the new employee info to the table
  $( '#employeeTable' ).append( '<tr><td>' + first + '</td>' +
                                '<td>' + last + '</td>' +
                                '<td>' + id + '</td>' +
                                '<td>' + jobTitle + '</td>' +
                                '<td>$' + salary + '</td></tr>' );
} // end appendEmployeeToTable



// this function will clear the input field after a submission has been made
function clearInputFields(){
  // once these functions have been run, clear the input fields
  return $( '#firstNameInput' ).val( '' ),
           $( '#lastNameInput' ).val( '' ),
           $( '#idNumberInput' ).val( '' ),
           $( '#jobTitleInput' ).val( '' ),
           $( '#annualSalaryInput' ).val( '' );
} // end clearInputFields

// this function will calculate the monthly cost of each employees salary
function calculateMonthlyCost( salary ){
  console.log( 'in calculateMonthlyCost' );
  let monthlyCost = 0;
  // loop through employees and add salaries to monthly costs
  for ( let employee of employeeArray ){
    monthlyCost += salary;
  } // end for of
  console.log( 'Monthly Cost: $', monthlyCost );
}
