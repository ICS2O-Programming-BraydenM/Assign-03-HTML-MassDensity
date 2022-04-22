// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: April 21 2022
// This file contains the JS functions for index2.html

"use strict"

// This function calculates Kilograms to Pounds
 
function onButtonClicked() {
  // get user input
  let weight_in_kilograms = document.getElementById('kilogram').value;

  // calculate the weight in pounds
  let weight_in_pounds = weight_in_kilograms * 2.205
  let weight_in_pounds_rounded = weight_in_pounds.toFixed(2)

  // display the results
  document.getElementById('display-results').innerHTML = "Your weight in pounds is " + weight_in_pounds.toFixed(2) + "lbs";
}
