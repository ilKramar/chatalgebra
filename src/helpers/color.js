import {Component} from "react";
import React from "react";

function randomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  }

export default randomColor;
