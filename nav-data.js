/**
 * B&B Yacht Designs — Navigation Structure
 * Edit this file to add/remove boats or change menu organization.
 * The mega-menu reads from this object automatically.
 *
 * hasKit: true = show "Build Kit" button on boat page
 * hasPlan: true = show "Buy Plans" button on boat page
 * shopifyHandle: the product handle in Shopify for the main plans product
 */

const NAV = {
  "Plans & Kits": {
    "Sailboats": [
      { name: "Core Sound 15",      slug: "cs15",           shopifyHandle: "core-sound-15-plans",        hasPlan: true,  hasKit: false },
      { name: "Core Sound 17",      slug: "core-sound-17",  shopifyHandle: "core-sound-17-plans",        hasPlan: true,  hasKit: true  },
      { name: "Core Sound 17 Mk3",  slug: "cs17mk3",        shopifyHandle: "core-sound-17-mark-3-plans", hasPlan: true,  hasKit: false },
      { name: "Core Sound 20",      slug: "core-sound-20",  shopifyHandle: "core-sound-20-plans",        hasPlan: true,  hasKit: false },
      { name: "Core Sound 20 Mk3",  slug: "cs20mk3",        shopifyHandle: "core-sound-20-mark-3-plans", hasPlan: true,  hasKit: false },
      { name: "Lapwing 16",         slug: "lapwing",        shopifyHandle: "lapwing-16-plans",           hasPlan: true,  hasKit: false },
      { name: "Bay River Skiff",    slug: "bay-river-skiff",shopifyHandle: "bay-river-skiff-plans",      hasPlan: true,  hasKit: false },
      { name: "Belhaven 19",        slug: "belhaven",       shopifyHandle: "belhaven-19-plans",          hasPlan: true,  hasKit: false },
      { name: "EC-22",              slug: "ec-22",          shopifyHandle: "ec-22-plans",                hasPlan: true,  hasKit: false },
      { name: "Mini Trimaran",      slug: "mini-trimaran",  shopifyHandle: "mini-trimaran-plans",        hasPlan: true,  hasKit: false },
      { name: "Class Globe 5.80",   slug: "classglobe580",  shopifyHandle: "class-globe-5-80-plans",     hasPlan: true,  hasKit: true  },
      { name: "Princess Sharpie 22",slug: "princess",       shopifyHandle: "princess-sharpie-22-plans", hasPlan: true,  hasKit: false },
      { name: "Princess Sharpie 26",slug: "princess26",     shopifyHandle: "princess-sharpie-26-plans", hasPlan: true,  hasKit: false },
      { name: "MF-246",             slug: "mf-246",         shopifyHandle: "mf-246-plans",               hasPlan: true,  hasKit: false },
    ],
    "Powerboats": [
      { name: "Marissa 18",         slug: "marissa",        shopifyHandle: "marissa-18-plans",           hasPlan: true,  hasKit: true  },
      { name: "Outer Banks 20",     slug: "ob-20",          shopifyHandle: "outer-banks-20-plans",       hasPlan: true,  hasKit: true  },
      { name: "Outer Banks 24",     slug: "ob-24",          shopifyHandle: "outer-banks-24-plans",       hasPlan: true,  hasKit: true  },
      { name: "Outer Banks 26",     slug: "ob26",           shopifyHandle: "outer-banks-26-plans",       hasPlan: true,  hasKit: false },
      { name: "Ocracoke 20",        slug: "ocracoke-20",    shopifyHandle: "ocracoke-20-plans",          hasPlan: true,  hasKit: true  },
      { name: "Ocracoke 20-B",      slug: "ocracoke20b",    shopifyHandle: "ocracoke-20-b-plans",        hasPlan: true,  hasKit: false },
      { name: "Ocracoke 24",        slug: "ocracoke-24",    shopifyHandle: "ocracoke-24-plans",          hasPlan: true,  hasKit: false },
      { name: "Ocracoke 256",       slug: "ocracoke-256",   shopifyHandle: "ocracoke-256-plans",         hasPlan: true,  hasKit: false },
      { name: "Cape Lookout 28",    slug: "cl28",           shopifyHandle: "cape-lookout-28-plans",      hasPlan: true,  hasKit: false },
      { name: "Jessy 12′",          slug: "jessy12",        shopifyHandle: "jessy-12-plans",             hasPlan: true,  hasKit: false },
      { name: "Jessy 15′",          slug: "jessy15",        shopifyHandle: "jessy-15-plans",             hasPlan: true,  hasKit: false },
      { name: "Jessy 17′",          slug: "jessy17",        shopifyHandle: "jessy-17-plans",             hasPlan: true,  hasKit: false },
    ],
    "Dinghies & Tenders": [
      { name: "Spindrift Dinghy",   slug: "spindrift",      shopifyHandle: "spindrift-plans",            hasPlan: true,  hasKit: true  },
      { name: "Spindrift 9",        slug: "s9",             shopifyHandle: "spindrift-9-plans",          hasPlan: true,  hasKit: false },
      { name: "Spindrift 10",       slug: "s10",            shopifyHandle: "spindrift-10-plans",         hasPlan: true,  hasKit: false },
      { name: "Spindrift 11",       slug: "s11",            shopifyHandle: "spindrift-11-plans",         hasPlan: true,  hasKit: false },
      { name: "Spindrift 12",       slug: "s12",            shopifyHandle: "spindrift-12-plans",         hasPlan: true,  hasKit: false },
      { name: "Catspaw Pram",       slug: "catspaw",        shopifyHandle: "catspaw-pram-plans",         hasPlan: true,  hasKit: true  },
      { name: "Amanda",             slug: "amanda",         shopifyHandle: "amanda-plans",               hasPlan: true,  hasKit: false },
    ],
    "Kayaks & Canoes": [
      { name: "Diva 15′8″ Kayak",   slug: "diva",           shopifyHandle: "diva-kayak-plans",           hasPlan: true,  hasKit: true  },
      { name: "Grand Diva Kayak",   slug: "grand-diva",     shopifyHandle: "grand-diva-kayak-plans",     hasPlan: true,  hasKit: false },
      { name: "Moccasin 12′",       slug: "moc12",          shopifyHandle: "moccasin-12-plans",          hasPlan: true,  hasKit: false },
      { name: "Moccasin 14′",       slug: "moccasin14",     shopifyHandle: "moccasin-14-plans",          hasPlan: true,  hasKit: false },
      { name: "Moccasin Double",    slug: "moc2",           shopifyHandle: "moccasin-double-plans",      hasPlan: true,  hasKit: false },
      { name: "Flyfisher 13′",      slug: "flyfisher",      shopifyHandle: "flyfisher-canoe-plans",      hasPlan: true,  hasKit: false },
      { name: "Birder Canoe",       slug: "birder",         shopifyHandle: "birder-canoe-plans",         hasPlan: true,  hasKit: true  },
      { name: "Expedition Sailing Canoe", slug: "expeditioncanoe", shopifyHandle: "expedition-sailing-canoe-plans", hasPlan: true, hasKit: false },
    ],
    "Specialty": [
      { name: "Wing Foil Board Kits",slug: "wingfoil",      shopifyHandle: "wing-foil-board-kit",        hasPlan: false, hasKit: true  },
      { name: "Scale Model Kits",   slug: "models",         shopifyHandle: "scale-model-kits",           hasPlan: false, hasKit: true  },
      { name: "Summer Daze",        slug: "summerdaze",     shopifyHandle: "summer-daze-plans",          hasPlan: true,  hasKit: true  },
      { name: "Boat Accessory Plans",slug:"accessories",    shopifyHandle: "boat-accessory-plans",       hasPlan: true,  hasKit: false },
    ],
    "_links": [
      { name: "Free Plans",         url: "/collections/free-plans" },
      { name: "All Plans & Kits",   url: "/collections/plans-and-kits" },
      { name: "Individual Kit Parts",url:"/collections/boat-plans-and-kits-individual-boat-kit-parts" },
    ]
  },
  "Building Supplies": {
    "Materials": [
      { name: "Epoxy & Thickeners", url: "/collections/building-supplies-epoxy" },
      { name: "Plywood",            url: "/collections/building-supplies-plywood" },
      { name: "Fiberglass",         url: "/collections/building-supplies-fiberglass" },
      { name: "Finishing & Paint",  url: "/collections/building-supplies-finishing" },
      { name: "Tools",              url: "/collections/building-supplies-tools" },
    ],
    "Hardware & Rigging": [
      { name: "Blocks & Tackles",   url: "/collections/building-supplies-hardware-blocks" },
      { name: "Cleats",             url: "/collections/building-supplies-hardware-cleats" },
      { name: "Rudder Hardware",    url: "/collections/building-supplies-hardware-and-rigging-rudder" },
      { name: "Rowing Hardware",    url: "/collections/building-supplies-hardware-rowing-hardware" },
      { name: "Hatches",            url: "/collections/hardware-and-accessories-hatches" },
      { name: "Fasteners",          url: "/collections/hardware-and-accessories-hardware-and-rigging-fasteners" },
      { name: "Shackles & Hooks",   url: "/collections/building-supplies-hardware-general-shackles" },
      { name: "Eyestraps & Fairleads",url:"/collections/building-supplies-hardware-general-eyestraps-and-fairleads" },
      { name: "Hardware Kits",      url: "/collections/building-supplies-hardware-hardware-kits" },
      { name: "Piano Hinge",        url: "/collections/building-supplies-hardware-and-rigging-rigging-piano-hinge" },
    ],
    "Spars & Sails": [
      { name: "Aluminum Tubing",    url: "/collections/aluminum" },
      { name: "Sailtrack",          url: "/collections/hardware-and-accessories-aluminum-masts-sailtrack-sailtrack-and-accessories" },
      { name: "Mast Plugs",         url: "/collections/mastplugs" },
      { name: "Sails",              url: "/collections/new-store-building-supplies-sails" },
      { name: "Lines & Cordage",    url: "/collections/new-store-building-supplies-lines" },
      { name: "Electrical",         url: "/collections/boat-accessories-electrical" },
    ]
  },
  "Design Services": { url: "/services" },
  "B&B Picks":       { url: "/collections/our-pics" },
  "Community": {
    "Builder Resources": [
      { name: "Builders Forum",     url: "https://messing-about.com" },
      { name: "Builders Logs",      url: "#" },
      { name: "YouTube Channel",    url: "#" },
      { name: "Substack Newsletter",url: "#" },
    ],
    "Events": [
      { name: "Annual Messabout",   url: "/collections/messabout" },
      { name: "Mystic Boatbuilding",url: "/collections/mystic-family-boatbuilding-placeholder" },
    ]
  }
};

// Shopify store config — used by all pages
const SHOPIFY_CONFIG = {
  domain: '2mpps1-jk.myshopify.com',
  token:  'd65531aaafd8feb343a474c9b7436061',
  api:    'https://2mpps1-jk.myshopify.com/api/2024-01/graphql.json'
};

// Make available globally
if (typeof module !== 'undefined') module.exports = { NAV, SHOPIFY_CONFIG };
