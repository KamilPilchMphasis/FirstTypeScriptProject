import React from 'react';
import './MyApp.css';
import { create } from 'domain';
var ball = 'soccer';

//if we initialize variable this way, it will be of type 'any'
var num;
num = 1;

//this way num2 will be of type number:
var num2 = 1;

var anotherNumber: number = 10;

//if we return multiplication, it will be of type number
var volume = function (a:number,b:number,c:number) {
 return a*b*c;
}

function addTogether(a:number, b:number)
{
  var result = a + b;
  return result;  
}

var countArray = function (ourArray: string[])
{
  return ourArray.length;
}

function createStringFromArray(ourArray: string[])
{
  var createdString: string = '';
  ourArray.forEach(element => {
    createdString += element + ' ';
  });
return createdString;
}

var trees: string[] = ['Spruce','Poplar','Palm'];
function MyApp() {
  return (
    <div className="MyApp">
      <header className="MyApp-header">
        <h1>Hello Mphasis</h1>
        <p>the sum of 1 and 2 is: {addTogether(1,2)}.</p>
        <p>also, and volume of 2x2x2 box is: {volume(2,2,2)}.</p>
        <p>oh, did you know that our <b>trees</b> array has {countArray(trees)} items?</p>
        <p>these are {createStringFromArray(trees)}</p>
      </header>
    </div>
  );
}

export default MyApp;
