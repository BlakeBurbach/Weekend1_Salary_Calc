// class to create employee objects
class Employee {
  constructor( firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn ){
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumberIn = idNumberIn;
    this.jobTitleIn = jobTitleIn;
    this.annualSalaryIn = annualSalaryIn;
  } // end constructor
} // end employee class

// a global variable for the monthlyBudget that will be used in

let employeeArray = [];



// doc ready
$( document ).ready( readyNow );
// when doc is ready
function readyNow(){

  // this function creates ONE employee object from the Employee class
  // and push it to the employeeArray
  pushEmployeeOnClick();
  // a function that will calculate the monthly cost based on each employees salary
  // calculateTotalEmployeeSalary();
  // clear the input fields once a user has made a submission
  clearInputFields();
  //a button that will remove employee from table
  removeEmployee();

} // end readyNow

// ---------------------- creating employee functions ---------------------

// on click the submit button create an employee and add it to employeeArray
function pushEmployeeOnClick(){
  $( '#submitBtn' ).on( 'click', function(){
    // if any input field is left blank when trying to submit, alert the user
    // to fill in all input fields
    if ($('#firstNameInput').val()=='', $('#lastNameInput').val()=='', $('#idNumberInput').val()=='', $('#jobTitleInput').val()=='', $('#annualSalaryInput').val()==''){
      alert('Fill in all input fields');
    } else {
      // variables that will house the input values for ease of rewriting and
      // using in preceding functions
      let first = $( '#firstNameInput' ).val();
      let last = $( '#lastNameInput' ).val();
      let id = $( '#idNumberInput' ).val();
      let jobTitle = $( '#jobTitleInput' ).val();
      let salary = Number($( '#annualSalaryInput' ).val());
      //this new employee is the same employee object that will be
      // used in appendEmployee()
      let updatedEmployee = new Employee( first, last, id, jobTitle, salary  );
      employeeArray.push( updatedEmployee );
      console.log( employeeArray );
      //activate appendEmployee with the newly create class object info
      appendEmployee( first, last, id, jobTitle, salary  );
      //activate calculateTotalEmployeeSalary() with employee salary info
      calculateTotalEmployeeSalary( salary );
      return updatedEmployee;
    } // end create and push employee
  }); // end on click
  clearInputFields();
} // end pushEmployeeOnClick

// function that will take employee info from pushEmployeeOnClick()
// and append it to the table DOM
function appendEmployee( first, last, id, jobTitle, salary  ){
  console.log( 'button is working' );
  // append the new employee info to the table with a removal button attached
  $( '#employeeTable' ).append( '<tr id="employeeObject"><td>' + first + '</td>' +
                                '<td>' + last + '</td>' +
                                '<td>' + id + '</td>' +
                                '<td>' + jobTitle + '</td>' +
                                '<td>$'+ salary + '.00</td>' +
                                '<td><button id="removeButton">Remove Employee</td></tr>' );
  clearInputFields();
} // end appendEmployeeToTable



//  --------------------- calculation functions ---------

// this function will calculate the total of each employees salary
function calculateTotalEmployeeSalary( salary ){
  let totalEmployeeSalary = 0;
  // loop through employees and add salaries to totalEmployeeSalary
  for (let employee of employeeArray){
    totalEmployeeSalary += salary;
  } // end for of loop
  console.log( 'Total Employee Salary: $', Number(totalEmployeeSalary) );
  updateMonthlyCost( totalEmployeeSalary );
  // return totalEmployeeSalary;
} // end calculateTotalEmployeeSalary

// function to calculate monthly budget from the employee salary total
function updateMonthlyCost( totalEmployeeSalary ){
  // new variable with a value of total annual salaries divided by 12
  let monthlyBudget = totalEmployeeSalary / 12;
  console.log( 'Monthly Budget: $', Number(monthlyBudget).toFixed(2) );
  // since the company's monthly budget is $20,000 - an if statement to indicate
  // what happens when the monthly budget is exceeded
  // in this case change the background color of monthlyBudget to red
  $('#monthlyBudget').empty();
  if( monthlyBudget > 20000 ){
    $( '#monthlyBudget' ).text( 'Monthly Budget: $' + Number(monthlyBudget).toFixed(2) + '' );
    $( '#monthlyBudget' ).css( 'background-color', 'red' );
  } else {
    // if everything is normal - just display the monthly budget of all
    // employees on table at this point
    $( '#monthlyBudget' ).text( 'Monthly Budget: $' + Number(monthlyBudget).toFixed(2) + '' );
  } // end if statement
} // end updateMonthlyCost



//      --------------- removal functions -------------------------

// this function will clear the input field after a submission has been made
function clearInputFields(){
  // clear the input fields when page loads and also when a submission has been made
  return $( '#firstNameInput' ).val( '' ),
         $( '#lastNameInput' ).val( '' ),
         $( '#idNumberInput' ).val( '' ),
         $( '#jobTitleInput' ).val( '' ),
         $( '#annualSalaryInput' ).val( '' );
} // end clearInputFields

// a remove button that will remove an employee from the table on click
function removeEmployee(){
  $('#employeeInfo').on( 'click', '#removeButton', function(){
    $( this ).closest( '#employeeObject' ).remove();
  }); // end on click
} // end removeEmployee
