const axios = require('axios');
const SWAPI_BASE_URL = 'https://swapi.dev/api';

// IDs for people, planet, and starships
const PLANET_ID = 2;  // Alderaan
const VADER_ID = 4;   // Darth Vader
const LEIA_ID = 5;    // Leia Organa
const DEATH_STAR_ID = 9;  // Death Star

// Service to fetch data from SWAPI
const getStarshipInfo = async () => {
    try {
        const starshipResponse = await axios.get(`${SWAPI_BASE_URL} / starships / ${DEATH_STAR_ID} /`);
        return starshipResponse.data;
    } catch (error) {
        console.error("Error fetching starship info:", error);
        return null;
    }
};

const getLeiaInfo = async () => {
    try {
        const leiaResponse = await axios.get(`${SWAPI_BASE_URL},` / people / `${LEIA_ID}/`)
        return leiaResponse.data;
    } catch (error) {
        ;
        console.error("Error fetching Leia info:", error);
        return null;
    }
};

module.exports = {
    getStarshipInfo,
    getLeiaInfo
};
