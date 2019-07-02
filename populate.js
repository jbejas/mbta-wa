const firebase = require("./node_modules/firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDyT32pyuDZHwr19xuH50XY_fYKy8e5980",
    authDomain: "mbta-wa.firebaseapp.com",
    databaseURL: "https://mbta-wa.firebaseio.com",
    projectId: "mbta-wa",
    storageBucket: "mbta-wa.appspot.com",
    messagingSenderId: "413961211708",
    appId: "1:413961211708:web:896c13b034ce4cf2"
});

var db = firebase.firestore();

var menu = [
    {
        "route": "South Station",
        "line": ["CR-Fairmount", "CR-Worcester", "CR-Franklin", "CR-Greenbush", "CR-Kingston", "CR-Middleborough", "CR-Needham", "CR-Providence", "CR-Foxboro"]
    },
    {
        "route": "Newmarket",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Uphams Corner",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Four Corners/Geneva",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Talbot Avenue",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Morton Street",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Fairmount",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "Readville",
        "line": ["CR-Fairmount"]
    },
    {
        "route": "North Station",
        "line": ["CR-Fitchburg", "CR-Haverhill", "CR-Lowell", "CR-Newburyport"]
    },
    {
        "route": "Porter Square",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Belmont",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Waverly",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Waltham",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Brandeis/Roberts",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Kendal Green",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Hastings",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Silver Hill",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Lincoln",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Concord",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "West Concord",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "South Acton",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Littleton/Rte 495",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Ayer",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Shirley",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "North Leominster",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Fitchburg",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Wachusett",
        "line": ["CR-Fitchburg"]
    },
    {
        "route": "Back Bay",
        "line": ["CR-Worcester", "CR-Franklin", "CR-Needham", "CR-Providence", "CR-Foxboro"]
    },
    {
        "route": "Yawkey",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Boston Landing",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Newtonville",
        "line": ["CR-Worcester"]
    },
    {
        "route": "West Newton",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Auburndale",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Wellesley Farms",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Wellesley Hills",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Wellesley Square",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Natick Center",
        "line": ["CR-Worcester"]
    },
    {
        "route": "West Natick",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Framingham",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Ashland",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Southborough",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Westborough",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Grafton",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Worcester",
        "line": ["CR-Worcester"]
    },
    {
        "route": "Ruggles",
        "line": ["CR-Franklin", "CR-Needham", "CR-Providence"]
    },
    {
        "route": "Hyde Park",
        "line": ["CR-Franklin", "CR-Providence"]
    },
    {
        "route": "Readville",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Endicott",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Dedham Corp Center",
        "line": ["CR-Franklin", "CR-Foxboro"]
    },
    {
        "route": "Islington",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Norwood Depot",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Norwood Central",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Plimptonville",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Windsor Gardens",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Walpole",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Norfolk",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Franklin",
        "line": ["CR-Franklin"]
    },
    {
        "route": "Forge Park/495",
        "line": ["CR-Franklin"]
    },
    {
        "route": "JFK/UMASS",
        "line": ["CR-Greenbush", "CR-Kingston", "CR-Middleborough"]
    },
    {
        "route": "Quincy Center",
        "line": ["CR-Greenbush", "CR-Kingston", "CR-Kingston", "CR-Middleborough"]
    },
    {
        "route": "Weymouth Landing/East Braintree",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "East Weymouth",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "West Hingham",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "Nantasket Junction",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "Cohasset",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "North Scituate",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "Greenbush",
        "line": ["CR-Greenbush"]
    },
    {
        "route": "West Medford",
        "line": ["CR-Haverhill", "CR-Lowell"]
    },
    {
        "route": "Malden Center",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Wedgemere",
        "line": ["CR-Haverhill", "CR-Lowell"]
    },
    {
        "route": "Wyoming Hill",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Winchester Center",
        "line": ["CR-Haverhill", "CR-Lowell"]
    },
    {
        "route": "Melrose Cedar Park",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Melrose Highlands",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Anderson/Woburn",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Greenwood",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Wilmington",
        "line": ["CR-Haverhill", "CR-Lowell"]
    },
    {
        "route": "Wakefield",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Reading",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "North Wilmington",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Ballardvale",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Andover",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Lawrence",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Bradford",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Haverhill",
        "line": ["CR-Haverhill"]
    },
    {
        "route": "Braintree",
        "line": ["CR-Kingston", "CR-Middleborough"]
    },
    {
        "route": "South Weymouth",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Abington",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Whitman",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Hanson",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Halifax",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Kingston",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Plymouth",
        "line": ["CR-Kingston"]
    },
    {
        "route": "Mishawum",
        "line": ["CR-Lowell"]
    },
    {
        "route": "Anderson/Woburn",
        "line": ["CR-Lowell"]
    },
    {
        "route": "North Billerica",
        "line": ["CR-Lowell"]
    },
    {
        "route": "Lowell",
        "line": ["CR-Lowell"]
    },
    {
        "route": "Holbrook/Randolph",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Montello",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Brockton",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Campello",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Bridgewater",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Middleborough/Lakeville",
        "line": ["CR-Middleborough"]
    },
    {
        "route": "Forest Hills",
        "line": ["CR-Needham"]
    },
    {
        "route": "Roslindale Village",
        "line": ["CR-Needham"]
    },
    {
        "route": "Bellevue",
        "line": ["CR-Needham"]
    },
    {
        "route": "Highland",
        "line": ["CR-Needham"]
    },
    {
        "route": "West Roxbury",
        "line": ["CR-Needham"]
    },
    {
        "route": "Hersey",
        "line": ["CR-Needham"]
    },
    {
        "route": "Needham Junction",
        "line": ["CR-Needham"]
    },
    {
        "route": "Needham Center",
        "line": ["CR-Needham"]
    },
    {
        "route": "Needham Heights",
        "line": ["CR-Needham"]
    },
    {
        "route": "Chelsea",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "River Works",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Lynn",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Swampscott",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Salem",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Beverly",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "North Beverly",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Montserrat",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Prides Crossing",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Hamilton/Wenham",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Ipswich",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Beverly Farms",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Manchester",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Rowley",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Newburyport",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "West Gloucester",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Gloucester",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Rockport",
        "line": ["CR-Newburyport"]
    },
    {
        "route": "Route 128",
        "line": ["CR-Providence"]
    },
    {
        "route": "Canton Junction",
        "line": ["CR-Providence"]
    },
    {
        "route": "Canton Center",
        "line": ["CR-Providence"]
    },
    {
        "route": "Sharon",
        "line": ["CR-Providence"]
    },
    {
        "route": "Mansfield",
        "line": ["CR-Providence"]
    },
    {
        "route": "Stoughton",
        "line": ["CR-Providence"]
    },
    {
        "route": "Attleboro",
        "line": ["CR-Providence"]
    },
    {
        "route": "South Attleboro",
        "line": ["CR-Providence"]
    },
    {
        "route": "Providence",
        "line": ["CR-Providence"]
    },
    {
        "route": "TF Green Airport",
        "line": ["CR-Providence"]
    },
    {
        "route": "Wickford Junction",
        "line": ["CR-Providence"]
    },
    {
        "route": "Foxboro",
        "line": ["CR-Foxboro"]
    }

]

menu.forEach((obj) => {
    db.collection("stations").add({
        route: obj.route,
        line: obj.line
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
});