// Mock data for OSINT tools and categories
export const mockCategories = [
  {
    id: 1,
    name: "Website",
    icon: "🌐",
    color: "#FF6B35", // Saffron
    description: "Website analysis and subdomain discovery tools",
    tools: [
      {
        name: "Shodan",
        description: "Search engine for Internet-connected devices",
        type: "Search Engine",
        website: "https://shodan.io",
        logo: "https://shodan.io/static/img/favicon.png"
      },
      {
        name: "Sublist3r",
        description: "Fast subdomains enumeration tool",
        type: "Subdomain Scanner",
        github: "https://github.com/aboul3la/Sublist3r"
      },
      {
        name: "Censys",
        description: "Internet-wide scan data for security research",
        type: "Search Engine",
        website: "https://censys.io"
      },
      {
        name: "Amass",
        description: "In-depth attack surface mapping",
        type: "Subdomain Scanner",
        github: "https://github.com/OWASP/Amass"
      },
      {
        name: "Wayback Machine",
        description: "Digital archive of the World Wide Web",
        type: "Archive",
        website: "https://archive.org/web/"
      },
      {
        name: "SecurityTrails",
        description: "DNS and IP intelligence platform",
        type: "DNS Analysis",
        website: "https://securitytrails.com"
      }
    ]
  },
  {
    id: 2,
    name: "Aeroplane",
    icon: "✈️",
    color: "#4A90E2", // Blue
    description: "Flight tracking and aviation intelligence",
    tools: [
      {
        name: "FlightRadar24",
        description: "Real-time flight tracking",
        type: "Flight Tracker",
        website: "https://flightradar24.com"
      },
      {
        name: "ADS-B Exchange",
        description: "Unfiltered flight data",
        type: "ADS-B Data",
        website: "https://adsbexchange.com"
      },
      {
        name: "FlightAware",
        description: "Flight tracking and aviation data",
        type: "Flight Tracker",
        website: "https://flightaware.com"
      },
      {
        name: "RadarBox",
        description: "Live flight tracking and aviation data",
        type: "Flight Tracker",
        website: "https://radarbox.com"
      },
      {
        name: "OpenSky Network",
        description: "Free ADS-B and Mode S data",
        type: "Research Data",
        website: "https://opensky-network.org"
      }
    ]
  },
  {
    id: 3,
    name: "Geospatial",
    icon: "🌍",
    color: "#28A745", // Green
    description: "Geographic intelligence and mapping tools",
    tools: [
      {
        name: "Google Earth",
        description: "Satellite imagery and 3D mapping",
        type: "Satellite Imagery",
        website: "https://earth.google.com"
      },
      {
        name: "Sentinel Hub",
        description: "Satellite imagery API and analysis",
        type: "Satellite Data",
        website: "https://sentinelhub.com"
      },
      {
        name: "QGIS",
        description: "Open source geographic information system",
        type: "GIS Software",
        website: "https://qgis.org"
      },
      {
        name: "MapQuest",
        description: "Mapping and navigation services",
        type: "Mapping",
        website: "https://mapquest.com"
      },
      {
        name: "What3Words",
        description: "3-word address system",
        type: "Location",
        website: "https://what3words.com"
      },
      {
        name: "GeoNames",
        description: "Geographical database",
        type: "Geodata",
        website: "https://geonames.org"
      }
    ]
  },
  {
    id: 4,
    name: "Image",
    icon: "📸",
    color: "#FFFFFF", // White
    description: "Image analysis and reverse search tools",
    tools: [
      {
        name: "TinEye",
        description: "Reverse image search engine",
        type: "Reverse Search",
        website: "https://tineye.com"
      },
      {
        name: "Google Images",
        description: "Google's reverse image search",
        type: "Reverse Search",
        website: "https://images.google.com"
      },
      {
        name: "ExifTool",
        description: "Read and write meta information in files",
        type: "EXIF Analysis",
        website: "https://exiftool.org"
      },
      {
        name: "Yandex Images",
        description: "Yandex reverse image search",
        type: "Reverse Search",
        website: "https://yandex.com/images"
      },
      {
        name: "Bing Visual Search",
        description: "Microsoft's visual search engine",
        type: "Reverse Search",
        website: "https://bing.com/visualsearch"
      },
      {
        name: "FotoForensics",
        description: "Digital image forensics",
        type: "Forensics",
        website: "https://fotoforensics.com"
      }
    ]
  },
  {
    id: 5,
    name: "People",
    icon: "👥",
    color: "#FFFFFF", // White
    description: "People search and social media intelligence",
    tools: [
      {
        name: "Pipl",
        description: "People search engine",
        type: "People Search",
        website: "https://pipl.com"
      },
      {
        name: "LinkedIn",
        description: "Professional networking platform",
        type: "Social Network",
        website: "https://linkedin.com"
      },
      {
        name: "WhitePages",
        description: "People finder and background check",
        type: "People Search",
        website: "https://whitepages.com"
      },
      {
        name: "TruePeopleSearch",
        description: "Free people search engine",
        type: "People Search",
        website: "https://truepeoplesearch.com"
      },
      {
        name: "BeenVerified",
        description: "Background check and people search",
        type: "Background Check",
        website: "https://beenverified.com"
      },
      {
        name: "Spokeo",
        description: "People search and background check",
        type: "People Search",
        website: "https://spokeo.com"
      }
    ]
  },
  {
    id: 6,
    name: "Mails",
    icon: "📧",
    color: "#28A745", // Green
    description: "Email verification and intelligence tools",
    tools: [
      {
        name: "Hunter.io",
        description: "Email finder and verifier",
        type: "Email Finder",
        website: "https://hunter.io"
      },
      {
        name: "Have I Been Pwned",
        description: "Check if email was in data breach",
        type: "Breach Check",
        website: "https://haveibeenpwned.com"
      },
      {
        name: "Email Hippo",
        description: "Email verification service",
        type: "Email Verification",
        website: "https://emailhippo.com"
      },
      {
        name: "Verify-email.org",
        description: "Free email verification",
        type: "Email Verification",
        website: "https://verify-email.org"
      },
      {
        name: "VoilaNorbert",
        description: "Email finder tool",
        type: "Email Finder",
        website: "https://voilanorbert.com"
      },
      {
        name: "Clearbit Connect",
        description: "Email finder for Gmail",
        type: "Email Finder",
        website: "https://clearbit.com/connect"
      }
    ]
  },
  {
    id: 7,
    name: "Social Media",
    icon: "📱",
    color: "#FFFFFF", // White
    description: "Social media intelligence and monitoring",
    tools: [
      {
        name: "Hootsuite",
        description: "Social media management platform",
        type: "Social Management",
        website: "https://hootsuite.com"
      },
      {
        name: "Social Mention",
        description: "Social media search and analytics",
        type: "Social Search",
        website: "https://socialmention.com"
      },
      {
        name: "Twint",
        description: "Twitter intelligence tool",
        type: "Twitter OSINT",
        github: "https://github.com/twintproject/twint"
      },
      {
        name: "Instagram OSINT",
        description: "Instagram intelligence gathering",
        type: "Instagram OSINT",
        github: "https://github.com/sc1341/InstagramOSINT"
      },
      {
        name: "Sherlock",
        description: "Find usernames across social networks",
        type: "Username Search",
        github: "https://github.com/sherlock-project/sherlock"
      },
      {
        name: "Social Searcher",
        description: "Real-time social media search",
        type: "Social Search",
        website: "https://social-searcher.com"
      }
    ]
  },
  {
    id: 8,
    name: "Breached Data",
    icon: "🔓",
    color: "#4A90E2", // Blue
    description: "Data breach monitoring and analysis",
    tools: [
      {
        name: "Have I Been Pwned",
        description: "Check if accounts were breached",
        type: "Breach Check",
        website: "https://haveibeenpwned.com"
      },
      {
        name: "DeHashed",
        description: "Free deep-web engine",
        type: "Breach Search",
        website: "https://dehashed.com"
      },
      {
        name: "LeakCheck",
        description: "Data breach search engine",
        type: "Breach Search",
        website: "https://leakcheck.io"
      },
      {
        name: "Breach Directory",
        description: "Data breach database",
        type: "Breach Database",
        website: "https://breachdirectory.org"
      },
      {
        name: "WeLeakInfo",
        description: "Data breach search service",
        type: "Breach Search",
        website: "https://weleakinfo.com"
      },
      {
        name: "Intelligence X",
        description: "Search engine for security professionals",
        type: "Intelligence Search",
        website: "https://intelx.io"
      }
    ]
  },
  {
    id: 9,
    name: "Dark Web",
    icon: "🕸️",
    color: "#4A90E2", // Blue
    description: "Dark web monitoring and Tor network tools",
    tools: [
      {
        name: "Ahmia",
        description: "Tor search engine",
        type: "Tor Search",
        website: "https://ahmia.fi"
      },
      {
        name: "DuckDuckGo Onion",
        description: "Privacy-focused search on Tor",
        type: "Tor Search",
        website: "https://duckduckgogg42ts.onion"
      },
      {
        name: "Tor Browser",
        description: "Anonymous web browsing",
        type: "Tor Browser",
        website: "https://torproject.org"
      },
      {
        name: "OnionScan",
        description: "Dark web investigation tool",
        type: "Dark Web Scanner",
        github: "https://github.com/s-rah/onionscan"
      },
      {
        name: "Torch",
        description: "Dark web search engine",
        type: "Tor Search",
        website: "http://torch.onion"
      },
      {
        name: "Kilos",
        description: "Dark web marketplace search",
        type: "Dark Web Search",
        website: "http://kilos.onion"
      }
    ]
  }
];

export const quotes = [
  {
    text: "The price of freedom is eternal vigilance.",
    author: "Thomas Jefferson"
  },
  {
    text: "Privacy is not something that I'm merely entitled to, it's an absolute prerequisite.",
    author: "Edward Snowden"
  },
  {
    text: "Free software is a matter of liberty, not price.",
    author: "Richard Stallman"
  },
  {
    text: "Information wants to be free.",
    author: "Stewart Brand"
  },
  {
    text: "The Net treats censorship as damage and routes around it.",
    author: "John Gilmore"
  },
  {
    text: "Security is not a product, but a process.",
    author: "Bruce Schneier"
  },
  {
    text: "Knowledge is power. Information is liberating.",
    author: "Kofi Annan"
  },
  {
    text: "The best way to get a bad law repealed is to enforce it strictly.",
    author: "Abraham Lincoln"
  },
  {
    text: "Transparency is the best disinfectant.",
    author: "Louis Brandeis"
  },
  {
    text: "In the digital age, privacy must be a priority.",
    author: "Al Gore"
  }
];