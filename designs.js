// Select color input --done
// Select size input --done
// When size is submitted by the user, call makeGrid() -- done
//callGrid will use for loop to create the elements -- done
//get the value of the color -- done
//select all the td elements and add eventListener to them -- done
//if td is not created, it will give you an error, -- done
//loop through all td for the click event and set the background to the color value

var width, height, table, cells, tr, td;
var coloured = document.getElementById('colorPicker');

document.getElementById("sizePicker").addEventListener("submit", function(event){
event.preventDefault(); makeGrid()});

function makeGrid() {

   width = document.getElementById('inputWeight').value; //set width value
   height = document.getElementById('inputHeight').value; //set height value
   table = document.getElementById('pixelCanvas');

   table.innerHTML = ''; //set table to empty

   for(i = 0; i < height; i++){ //no of rows to equal height value
      tr = document.createElement('tr'); //create rows
      
      for(j = 0; j < width; j++){ //no of columns to equal width value

         td = document.createElement('td'); //create columns
         // td.setAttribute('id', 'td');
         tr.appendChild(td);
      }
      table.appendChild(tr);
   }

   cells = document.querySelectorAll('td'); //create an array of cells
   //console.log(cells);
   for (var i = 0; i < cells.length; i++) { //loop over each cell
      cells[i].onclick = function(){ //attach onclick eventListener
         //this.style.backgroundColor = coloured.value; //set cell background to coloured value
         	if(this.style.backgroundColor !== coloured.value){
		this.style.backgroundColor = coloured.value;
	}
	else {
		this.removeAttribute("style");
	}
};
      };
   }

   
}




