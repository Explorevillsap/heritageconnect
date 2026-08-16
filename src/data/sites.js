export const states = [
  { id: "up", name: "Uttar Pradesh", short: "UP", emoji: "🕌" },
  { id: "mp", name: "Madhya Pradesh", short: "MP", emoji: "🏛️" },
  { id: "rajasthan", name: "Rajasthan", short: "RJ", emoji: "🏰" },
  { id: "bihar", name: "Bihar", short: "BR", emoji: "🛕" }
];

export const sites = [
  {
    id: "site-a",
    stateId: "up",
    name: "Allahabad Fort",
    city: "Prayagraj",
    location: "Prayagraj, Uttar Pradesh",
    year: "16th Century",
    lat: 25.4260, lng: 81.8838,
    description: "A major historic fort at the confluence region of the Ganga and Yamuna.",
    history: "Allahabad Fort is a prominent historic fort in Prayagraj. It stands near the Sangam region and is associated with the Mughal period.",
    facts: ["Historic fort near the Sangam", "Associated with Mughal-era architecture", "Important landmark of Prayagraj"]
  },
  {
    id: "site-a2",
    stateId: "up",
    name: "Khusro Bagh",
    city: "Prayagraj",
    location: "Prayagraj, Uttar Pradesh",
    year: "17th Century",
    lat: 25.4478, lng: 81.8337,
    description: "A historic garden complex with important Mughal-era tombs.",
    history: "Khusro Bagh is a walled garden containing historic tombs and is an important heritage site of Prayagraj.",
    facts: ["Historic walled garden", "Mughal-era tomb architecture", "Located close to Prayagraj Junction"]
  },
  {
    id: "site-a3",
    stateId: "up",
    name: "Anand Bhavan",
    city: "Prayagraj",
    location: "Prayagraj, Uttar Pradesh",
    year: "20th Century",
    lat: 25.4585, lng: 81.8525,
    description: "A well-known historic house and museum in Prayagraj.",
    history: "Anand Bhavan is a historic house associated with India's freedom movement and political history.",
    facts: ["Historic house museum", "Connected with India's freedom movement", "Major cultural attraction in Prayagraj"]
  },
  {
    id: "site-b",
    stateId: "mp",
    name: "Sanchi Stupa",
    city: "Sanchi",
    location: "Sanchi, Madhya Pradesh",
    year: "3rd Century BCE",
    lat: 23.4793, lng: 77.7397,
    description: "One of India's most important Buddhist monuments.",
    history: "The Buddhist monuments at Sanchi represent a long architectural and religious tradition and are among India's best-known heritage sites.",
    facts: ["Ancient Buddhist monument", "Famous stone gateways", "UNESCO World Heritage Site"]
  },
  {
    id: "site-b2",
    stateId: "mp",
    name: "Khajuraho Temples",
    city: "Khajuraho",
    location: "Khajuraho, Madhya Pradesh",
    year: "10th–11th Century",
    lat: 24.8318, lng: 79.9199,
    description: "A renowned group of medieval Hindu and Jain temples.",
    history: "The Khajuraho Group of Monuments is famous for its temple architecture and detailed stone sculpture.",
    facts: ["Medieval temple complex", "Hindu and Jain temples", "UNESCO World Heritage Site"]
  },
  {
    id: "site-b3",
    stateId: "mp",
    name: "Gwalior Fort",
    city: "Gwalior",
    location: "Gwalior, Madhya Pradesh",
    year: "Medieval period",
    lat: 26.2294, lng: 78.1734,
    description: "A massive hilltop fort overlooking Gwalior.",
    history: "Gwalior Fort is one of the major historic forts of central India, known for its imposing walls and historic structures.",
    facts: ["Hilltop fort", "Major landmark of Gwalior", "Contains multiple historic structures"]
  },
  {
    id: "site-c",
    stateId: "rajasthan",
    name: "Amer Fort",
    city: "Jaipur",
    location: "Jaipur, Rajasthan",
    year: "16th Century",
    lat: 26.9855, lng: 75.8513,
    description: "A grand hill fort famous for Rajput and Mughal-influenced architecture.",
    history: "Amer Fort is a major historic fort near Jaipur and is known for its palaces, courtyards and defensive architecture.",
    facts: ["Hill fort near Jaipur", "Rajput architectural heritage", "Part of the Hill Forts of Rajasthan"]
  },
  {
    id: "site-c2",
    stateId: "rajasthan",
    name: "Hawa Mahal",
    city: "Jaipur",
    location: "Jaipur, Rajasthan",
    year: "18th Century",
    lat: 26.9239, lng: 75.8267,
    description: "An iconic Jaipur landmark with a distinctive honeycomb façade.",
    history: "Hawa Mahal is one of Jaipur's most recognizable historic buildings and is known for its many small windows.",
    facts: ["Iconic Jaipur landmark", "Distinctive façade", "Built in the 18th century"]
  },
  {
    id: "site-d",
    stateId: "bihar",
    name: "Mahabodhi Temple",
    city: "Bodh Gaya",
    location: "Bodh Gaya, Bihar",
    year: "Ancient",
    lat: 24.6950, lng: 84.9910,
    description: "A major Buddhist pilgrimage and heritage site at Bodh Gaya.",
    history: "The Mahabodhi Temple Complex is one of the most important Buddhist heritage sites and is associated with the enlightenment of Gautama Buddha.",
    facts: ["Major Buddhist pilgrimage site", "Historic temple complex", "UNESCO World Heritage Site"]
  },
  {
    id: "site-d2",
    stateId: "bihar",
    name: "Nalanda Mahavihara",
    city: "Nalanda",
    location: "Nalanda, Bihar",
    year: "Ancient",
    lat: 25.1367, lng: 85.4436,
    description: "Archaeological remains of the ancient Nalanda centre of learning.",
    history: "Nalanda was a renowned ancient centre of learning. Its archaeological remains show the scale and sophistication of the historic institution.",
    facts: ["Ancient centre of learning", "Large archaeological complex", "UNESCO World Heritage Site"]
  }
];

export const getSite = (id) => sites.find(s => s.id === id);
export const getState = (id) => states.find(s => s.id === id);
export const getSitesByState = (id) => sites.filter(s => s.stateId === id);