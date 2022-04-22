// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: April 21 2022
// This file contains the JS functions for index.html

"use strict"

// This function calculates Density using volume and mass
 
function onButtonClick() {
  // get user input (volume and mass to calculate density)
  let mass = document.getElementById('mass').value;
  let volume = document.getElementById('volume').value;

  // calculate the density from volume and mass
  let density = mass / volume
  let density_rounded = density.toFixed(2)

  // display the results on website
  document.getElementById('display-results').innerHTML = "The density is " + density.toFixed(2) + "kg/m<sup>3</sup>";
}
