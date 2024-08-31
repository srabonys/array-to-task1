/*----------------2. Add or remove elements------------
1.Declare an array of 3 tourist destinations
2.Add a new tourist destination to your tourist array
3.Add two more to your array
4.Remove the last tourist destination you have added
5.display the final array as output
----------------*/

const destination = ['sajek' , 'banderban', 'sylhet'];

destination.push("cox's bazar");
console.log(destination);

//[ 'sajek', 'banderban', 'sylhet', "cox's bazar" ]

destination.push("ramgar" , "rangamati");
console.log(destination);

/*[
    'sajek',
    'banderban',
    'sylhet',
    "cox's bazar",
    'ramgar',
    'rangamati'
  ]*/


    destination.pop();
    console.log(destination);

    //[ 'sajek', 'banderban', 'sylhet', "cox's bazar", 'ramgar' ]