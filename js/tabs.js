/*
Author: Kerry O'Neill
Email: kerry_oneill@student.uml.edu
Class: 91.61 GUI Programming I
*/

$( function() {
  $( "#tabs" ).tabs();
} );

/*
For this function, i could not find a good way to call input_and_table(), so i copied
my code from the function and put it in here. For the adding tabs portion of the code
This website: http://jsfiddle.net/axrwkr/ujUu2/ helped me a lot.
*/
function create_tab(){
  //everytime a new tab is created, i do the input_and_table() over and over again.
  var min_col = parseInt(document.getElementById("min_col").value);
  var max_col = parseInt(document.getElementById("max_col").value);
  var min_row = parseInt(document.getElementById("min_row").value);
  var max_row = parseInt(document.getElementById("max_row").value);

  var temp1, temp2;
  var mult_table = "";

  //this gets outline of a table for data
  mult_table += "<table class='table_2'>";

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

  //index for the sliders, keeps track of index
  var index = $("div#tabs ul li").length + 1;

  //this adds the tabs together, >Tab will do Tab +1 so Tab 2, etc also adds checkboxes to new created tabs
  $("div#tabs ul").append(
    "<li><a href='#tab" + index + "'>Tab " + index + "</a><input type='checkbox' class='tabCheckBox'></li>"
  );

  //this puts info into tab, i call mult table for data from function
  $("div#tabs").append(
    "<div id='tab" + index + "'>" + mult_table + "</div>"
  );

  //resets tab
  $("div#tabs").tabs("refresh");
}

/*
I used this link: https://www.tutorialrepublic.com/faq/how-to-check-a-checkbox-is-checked-or-not-using-jquery.php
The link above helped me understand how to delete the tabs selected from the tab checkbox
*/
function delete_tab(){
  $("#tabs ul li").each(function() {
    if ($(this).find('input').prop("checked")) {
      $(this).remove();
      $("#tabs").tabs("refresh");
    }
  });
}
