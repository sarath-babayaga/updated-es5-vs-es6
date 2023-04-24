// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {

    // Get all the countries from the Asia continent/region using the filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Asia countries:', asiaCountries);

    // Get all the countries with a population of less than 2 lakhs using the filter function
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallPopulationCountries);

    // Print the name, capital, and flag of each country using the forEach function
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital[0]);
      console.log('Flag:', country.flags.png);
    });

    // Print the total population of all countries using the reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population:', totalPopulation);

    // Print the country which uses US Dollars as currency
    const usDollarCountries = data.filter(country => country.currencies.USD);
    console.log('Countries using US Dollars:', usDollarCountries);
  })
  .catch(error => console.log(error));
