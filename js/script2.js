// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: April 21 2022
// This file contains the JS functions for index2.html

"use strict"

// This function calculates Mass from density and volume
 
function onButtonClick() {
  // get user input (density and volume to calculate mass)
  let density = document.getElementById('density').value;
  let volume = document.getElementById('volume').value;

  // calculate the mass from density and volume
  let mass = density * volume 
  let mass_rounded = mass.toFixed(2)

  // display the results on webpage
  document.getElementById('display-results').innerHTML = "The mass is " + mass.toFixed(2) + "kg";
}
