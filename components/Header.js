// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//

const entryPoint = document.querySelector('.header-container')

function Header(){
    const headerDiv = document.createElement('div')
        headerDiv.classList.add('header');
        entryPoint.appendChild(headerDiv);

    const spanDate = document.createElement('span')
        spanDate.classList.add('date');
        spanDate.textContent = `March 28, 2020`;
        headerDiv.appendChild(spanDate);

    const hOne = document.createElement('h1')
        hOne.textContent = `Lambda Times`;
        headerDiv.appendChild(hOne);

    const spanTemp = document.createElement('span')
        spanTemp.classList.add('temp');
        spanTemp.textContent = `98`;
        headerDiv.appendChild(spanTemp)

    return headerDiv;
}
Header();

//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// function Header() {}
