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

let monthlyBudget = 0;
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
  calculateTotalEmployeeSalary();

} // end readyNow

// on click the submit button create an employee and add it to employeeArray
function pushEmployeeOnClick(){
  $( '#submitBtn' ).on( 'click', function(){
    if ($('#firstNameInput').val()=='', $('#lastNameInput').val()=='', $('#idNumberInput').val()=='', $('#jobTitleInput').val()=='', $('#annualSalaryInput').val()==''){
      alert('Fill in all input fields');
    } else {
      // variables that will house the input values for ease of rewriting and using in preceding functions
      let first = $( '#firstNameInput' ).val();
      let last = $( '#lastNameInput' ).val();
      let id = $( '#idNumberInput' ).val();
      let jobTitle = $( '#jobTitleInput' ).val();
      let salary = Number($( '#annualSalaryInput' ).val());
      //this new employee is the same employee object that will be used in appendEmployee()
      let updatedEmployee = new Employee( first, last, id, jobTitle, salary  );
      employeeArray.push( updatedEmployee );
      console.log( employeeArray );
      //activate appendEmployee
      appendEmployee( first, last, id, jobTitle, salary  );
      //activate calculateTotalEmployeeSalary() with employee salary info
      calculateTotalEmployeeSalary( salary );
      return updatedEmployee;
    }
  }); // end on click
  clearInputFields();
} // end pushEmployeeOnClick

// function that will take employee info from pushEmployeeOnClick() and append it to the table DOM
function appendEmployee( first, last, id, jobTitle, salary  ){
  console.log( 'button is working' );
  let removeButton =
  // append the new employee info to the table with a removal button attached 
  $( '#employeeTable' ).append( '<tr><td>' + first + '</td>' +
                                '<td>' + last + '</td>' +
                                '<td>' + id + '</td>' +
                                '<td>' + jobTitle + '</td>' +
                                '<td>$'+ salary + '.00</td>' +
                                '<td><button id="removeButton">Remove Employee</td></tr>' );
  clearInputFields();
} // end appendEmployeeToTable



// this function will clear the input field after a submission has been made
function clearInputFields(){
  // clear the input fields when page loads and when a submission has been made
  return $( '#firstNameInput' ).val( '' ),
           $( '#lastNameInput' ).val( '' ),
           $( '#idNumberInput' ).val( '' ),
           $( '#jobTitleInput' ).val( '' ),
           $( '#annualSalaryInput' ).val( '' );
} // end clearInputFields

// this function will calculate the total of each employees salary
function calculateTotalEmployeeSalary( salary ){
  let totalEmployeeSalary = 0;
  // loop through employees and add salaries to totalEmployeeSalary
  for ( let employee of employeeArray ){
    totalEmployeeSalary += salary;
  } // end for of loop
  console.log( 'Total Employee Salary: $', Number(totalEmployeeSalary) );
  updateMonthlyCost( totalEmployeeSalary );
} // end calculateTotalEmployeeSalary

// this will take the totalEmployeeSalary and subtract it from the monthlyBudget
function updateMonthlyCost( totalEmployeeSalary ){
  let monthlyCost = totalEmployeeSalary / 12;
  console.log( 'Monthly Cost: $', Number(monthlyCost).toFixed(2) );
  $( '#monthlyCost' ).text( 'Monthly Cost: $' + Number(monthlyCost).toFixed(2) + '' );
  if( monthlyCost > 20000 ){
    $( '#monthlyCost' ).text( 'Monthly Cost: $' + Number(monthlyCost).toFixed(2) + '' );
    $( '#monthlyCost' ).css( 'background-color', 'red' );
  }
}
