/* leny/enigjewo
 *
 * /src/core/maps.js - Maps utils
 *
 * coded by leny@BeCode
 * started at 04/02/2021
 */

import axios from "axios";

import europeanUnion from "url:maps/european-union.geojson";
import europaWithoutRussia from "url:maps/europe-without-russia.geojson";
import asia from "url:maps/asia.geojson";
import europa from "url:maps/europa.geojson";
import oceania from "url:maps/oceania.geojson";
import africa from "url:maps/africa.geojson";
import northAmerica from "url:maps/north-america.geojson";
import southAmerica from "url:maps/south-america.geojson";
import unesco from "url:maps/unesco.geojson";
import belgium from "url:maps/belgium.geojson";
import france from "url:maps/france.geojson";
import germany from "url:maps/germany.geojson";
import iceland from "url:maps/iceland.geojson";
import russia from "url:maps/russia.geojson";
import uk from "url:maps/united-kingdom.geojson";
import usa from "url:maps/usa.geojson";
import china from "url:maps/china.geojson";
import japan from "url:maps/japan.geojson";
import india from "url:maps/india.geojson";
import brazil from "url:maps/brazil.geojson";
import canada from "url:maps/canada.geojson";
import argentina from "url:maps/argentina.geojson";
import mexico from "url:maps/mexico.geojson";
import biggestCities from "url:maps/biggest-cities.geojson";
import inferno from "url:maps/inferno.geojson";

export const maps = {
    // --- areas
    world: {label: "πΊοΈ World", data: null},
    europeanUnion: {label: "πͺπΊ European Union", data: europeanUnion},
    europaWithoutRussia: {
        label: "π Europa (without Russia)",
        data: europaWithoutRussia,
    },
    // --- continents
    africa: {label: "π Africa", data: africa},
    asia: {label: "π Asia", data: asia},
    europa: {label: "π Europa", data: europa},
    northAmerica: {label: "π North America", data: northAmerica},
    oceania: {label: "π Oceania", data: oceania},
    southAmerica: {label: "π South America", data: southAmerica},
    // --- countries
    argentina: {label: "π¦π· Argentina", data: argentina},
    belgium: {label: "π§πͺ Belgium", data: belgium},
    brazil: {label: "π§π· Brazil", data: brazil},
    canada: {label: "π¨π¦ Canada", data: canada},
    china: {label: "π¨π³ China", data: china},
    france: {label: "π«π· France", data: france},
    germany: {label: "π©πͺ Germany", data: germany},
    iceland: {label: "π?πΈ Iceland", data: iceland},
    india: {label: "π?π³ India", data: india},
    japan: {label: "π―π΅ Japan", data: japan},
    mexico: {label: "π²π½ Mexico", data: mexico},
    russia: {label: "π·πΊ Russia", data: russia},
    uk: {label: "π¬π§ United Kingdom", data: uk},
    usa: {label: "πΊπΈ USA", data: usa},
    // --- misc
    unesco: {label: "πΏ Unesco (World Heritage List)", data: unesco},
    biggestCities: {
        label: "π Biggest Cities (40 biggest cities of the world)",
        data: biggestCities,
    },
    inferno: {
        label:
            "π₯ Inferno - two complex cities - Santa Cruz de la Sierra (Bolivia) & Touba (Senegal)",
        data: inferno,
    },
};

export const groups = {
    areas: {
        label: "Areas",
        maps: ["world", "europeanUnion", "europaWithoutRussia"],
    },
    continents: {
        label: "Continents",
        maps: [
            "africa",
            "asia",
            "europa",
            "northAmerica",
            "oceania",
            "southAmerica",
        ],
    },
    countries: {
        label: "Countries",
        maps: [
            "argentina",
            "belgium",
            "brazil",
            "canada",
            "china",
            "france",
            "germany",
            "iceland",
            "india",
            "japan",
            "mexico",
            "russia",
            "uk",
            "usa",
        ],
    },
    misc: {label: "Misc.", maps: ["unesco", "biggestCities", "inferno"]},
};

const cache = new Map();

export const loadGeoJSON = async map => {
    if (cache.has(map)) {
        return cache.get(map);
    }
    const {data: geoJSON} = await axios.get(maps[map].data, {
        responseType: "json",
    });
    cache.set(map, geoJSON);
    return geoJSON;
};
