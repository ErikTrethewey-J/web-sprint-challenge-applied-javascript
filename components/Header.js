// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//

const entryPoint = document.querySelector('.header-container')

function Header(){
    const headerDiv = document.createElement('div')
    const spanHeader = document.createElement('span')
    const spanTemp = document.createElement('span')
    const hOne = document.createElement('h1')
    
    headerDiv.classList.add('header');
    spanHeader.classList.add('date');
    spanTemp.classList.add('temp');
    
    spanHeader.textContent = `March 28, 2020`;
    spanTemp.textContent = `98`;
    hOne.textContent = `Lambda Times`;

        headerDiv.append(entryPoint);
        headerDiv.appendChild(spanHeader);
        headerDiv.appendChild(hOne);
        headerDiv.appendChild(spanTemp)

    return headerDiv;
}


//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// function Header() {}
