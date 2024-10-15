const swapiService = require('../services/swapiService');

// Model to process and structure the information
const getInformation = async () => {
    const starship = await swapiService.getStarshipInfo();
    const leia = await swapiService.getLeiaInfo();

    // Handle the case where starship data is unavailable
    let starshipData = {};
    let crew = 0;
    if (starship) {
        starshipData = {
            name: starship.name,
            model: starship.model
        };
        crew = parseInt(starship.crew, 10) || 0;
    }

    // Check if Leia is on Alderaan
    const isLeiaOnPlanet = leia && leia.homeworld.includes('2');  // Alderaan's id is 2

    return {
        starship: starshipData,
        crew: crew,
        isLeiaOnPlanet: isLeiaOnPlanet
    };
};

module.exports = {
    getInformation
};