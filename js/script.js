/*
Author: Kerry O'Neill
Email: kerry_oneill@student.uml.edu
Class: 91.61 GUI Programming I
*/

$(function(){

  $.validator.addMethod("greaterThan", function(value, element, params) {
    return this.optional(element) || parseInt(value) >= parseInt($(params).val());
  }, "The second number must <em> not </em> be less than the first number you inputted. Please enter it in again.");

  //creates the rules for each input
  $("#form").validate({
    rules: {
      min_col: {
        required: true,
        number: true,
        range: [-50,50],
      },
      max_col:{
        required: true,
        number: true,
        range: [-50,50],
        greaterThan: "#min_col"
      },
      min_row: {
        required: true,
        number: true,
        range: [-50,50],
      },
      max_row: {
        required: true,
        number: true,
        range: [-50,50],
        greaterThan: "#min_row"
      }
    },
    submitHandler: function(form) {
      create_tab();
      input_and_table();
    }
  });
});

//function in which has checks AND the table. i originally had the make_table function separate but i had too many issues.
function input_and_table() {

  // defines variables for input values, i used https://www.w3schools.com/jsref/jsref_parseint.asp to help me with input of variables
  var min_col = parseInt(document.getElementById("min_col").value);
  var max_col = parseInt(document.getElementById("max_col").value);
  var min_row = parseInt(document.getElementById("min_row").value);
  var max_row = parseInt(document.getElementById("max_row").value);

  //defines warnings and warning warning_message
  var warning=document.getElementById("warning");
  var warning_message = "";

  var temp1, temp2;
  var mult_table = "";

  // first for loop which goes through the rows
  for (temp1 = min_row - 1; temp1 <= max_row; temp1++) {
    mult_table = mult_table + "<tr>"; //for each temp1++, add a space

    //this is to make sure there is a blank space and so the row/col axises show up
    if (temp1 == min_row - 1) {
      mult_table = mult_table + "<td>☺️</td>";// <td></td> creates empty space

      //second for loop which goes through columns if the condiiton above is true
      for (temp2 = min_col; temp2 <= max_col; temp2++) {
        mult_table = mult_table + "<td>" + temp2 + "</td>";//adds a space, temp2 value, then goes onto next
      }
    }

    //  if you dont need to check the min_row-1
    else {
      mult_table = mult_table + "<td>" + temp1 + "</td>";
      //secpmd for loop for min col
      for (temp2 = min_col; temp2 <= max_col; temp2++) {
        mult_table = mult_table + "<td>" + temp1 * temp2 + "</td>";//this does the multiplying of the table. this is after the row/col axis has been created
      }
    }

    mult_table = mult_table + "</tr>";//ends the table
  }

  // sends the table to HTML file to be outputted
  document.getElementById("mult_table").innerHTML = mult_table;
}
