// doc ready
$( document ).ready( readyNow );

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

// when doc is ready
function readyNow(){

  // on click the submit button create an employee and add it to the employeeArray
  function addEmployeeOnClick(){
    $( '#submitBtn' ).on( 'click', function(){
      console.log( 'button is working' );
      let updatedEmployee = new Employee( $( '#firstNameInput' ).val(),
                                          $( '#lastNameInput' ).val(),
                                          $( '#idNumberInput' ).val(),
                                          $( '#jobTitleInput' ).val(),
                                          $( '#annualSalaryInput' ).val() );
      employeeArray.push( updatedEmployee );
      console.log( employeeArray );
      return updatedEmployee;
    }); // end on click
  } // end addEmployeeOnClick

  function 
} // end readyNow
