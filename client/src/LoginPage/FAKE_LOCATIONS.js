const FAKE_LOCATIONS = [
    {
        coords: {
            latitude: 28.6139,
            longitude: 77.2090, // Delhi
        }
    },
    {
        coords: {
            latitude: 19.0760,
            longitude: 72.8777, // Mumbai
        }
    },
    {
        coords: {
            latitude: 13.0827,
            longitude: 80.2707, // Chennai
        }
    },
    {
        coords: {
            latitude: 22.5726,
            longitude: 88.3639, // Kolkata
        }
    },
    {
        coords: {
            latitude: 12.9716,
            longitude: 77.5946, // Bengaluru
        }
    },
    {
        coords: {
            latitude: 26.9124,
            longitude: 75.7873, // Jaipur
        }
    },
    {
        coords: {
            latitude: 17.3850,
            longitude: 78.4867, // Hyderabad
        }
    },
    {
        coords: {
            latitude: 23.0225,
            longitude: 72.5714, // Ahmedabad
        }
    },
    {
        coords: {
            latitude: 11.0168,
            longitude: 76.9558, // Coimbatore
        }
    },
    {
        coords: {
            latitude: 15.2993,
            longitude: 74.1240, // Goa
        }
    }
];

export const getFakeLocation=()=>{
    return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)]
}