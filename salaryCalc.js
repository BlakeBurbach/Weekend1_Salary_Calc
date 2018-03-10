console.log( 'js' );

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


let employeeArray = [];

// doc ready
$( document ).ready( readyNow );

// when doc is ready
function readyNow(){
  console.log('jquery');

  // these two functions create ONE employee object from the Employee class
  // pushEmployeeOnClick() will push it to the employeeArray
  // appendEmployeeOnClick() will append to the employee table
  pushEmployeeOnClick();
  appendEmployeeOnClick();

  // clear the input fields once a user has made a submission
  clearInputFields();


} // end readyNow

// on click the submit button create an employee and add it to the employeeArray
function pushEmployeeOnClick(){
  $( '#submitBtn' ).on( 'click', function(){
    console.log( 'button is working' );
    //this updatedEmployee is the same employee object that is created with appendEmployeeOnClick()
    let updatedEmployee = new Employee( $( '#firstNameInput' ).val(),
                                        $( '#lastNameInput' ).val(),
                                        $( '#idNumberInput' ).val(),
                                        $( '#jobTitleInput' ).val(),
                                        $( '#annualSalaryInput' ).val() );
    employeeArray.push( updatedEmployee );
    console.log( employeeArray );
    return updatedEmployee;
  }); // end on click
  clearInputFields();
} // end addEmployeeOnClick

// function that will create a new employee object and append it to the table DOM
function appendEmployeeOnClick(){
  // on click create a new employee object
  $( '#submitBtn' ).on( 'click', function(){
    console.log( 'button is working' );
    // this updatedEmployee is the same employee object that is created in pushEmployeeOnClick()
    let updatedEmployee = new Employee( $( '#firstNameInput' ).val(),
                                        $( '#lastNameInput' ).val(),
                                        $( '#idNumberInput' ).val(),
                                        $( '#jobTitleInput' ).val(),
                                        $( '#annualSalaryInput' ).val() );
    // variables that will house the input values for ease of rewriting
    let first = $( '#firstNameInput' ).val();
    let last = $( '#lastNameInput' ).val();
    let id = $( '#idNumberInput' ).val();
    let jobTitle = $( '#jobTitleInput' ).val();
    let salary = $( '#annualSalaryInput' ).val();
    // append the new employee info to the table
    $( '#employeeTable' ).append( '<tr><td>' + first + '</td>' +
                                  '<td>' + last + '</td>' +
                                  '<td>' + id + '</td>' +
                                  '<td>' + jobTitle + '</td>' +
                                  '<td>' + salary + '</td></tr>' );
    clearInputFields();
  }); // end create employee on click
} // end appendEmployeeToTable



//this function will clear the input field after a submission has been made
function clearInputFields(){
  // once these functions have been run, clear the input fields
  return $( '#firstNameInput' ).val( '' ),
           $( '#lastNameInput' ).val( '' ),
           $( '#idNumberInput' ).val( '' ),
           $( '#jobTitleInput' ).val( '' ),
           $( '#annualSalaryInput' ).val( '' );
} // end clearInputFields
