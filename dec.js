async function searchCountry() {
    const countryInput = document.getElementById('countryInput').value;
    
    // Fetch country data from restcountries.com
    const countryData = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
    const countryJson = await countryData.json();

    // Display results in a grid
    const resultGrid = document.getElementById('resultGrid');
    resultGrid.innerHTML = '';
    
    countryJson.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('card');
        countryCard.innerHTML = `
            <h3>${country.name.common}</h3>
            <button onclick="showMoreDetails('${country.name.common}')">More Details</button>
        `;
        resultGrid.appendChild(countryCard);
    });
}

function showMoreDetails(countryName) {
    // Fetch additional data like weather using a weather API
    // Display the data in a modal or expandable section
    // Add logic based on your chosen weather API
}
