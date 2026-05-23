# B&B Yacht Designs — Custom Frontend

Custom HTML/CSS/JS frontend for bandbyachtdesigns.com.  
Shopify handles checkout, payments, customer accounts, and digital file delivery (Sky Pilot).  
This repo is the customer-facing site.

## Architecture

```
bandb-frontend/
├── index.html          ← Homepage (this file)
├── nav-data.js         ← Full navigation structure + all boat models
├── boats/              ← Individual boat page data files (JSON)
│   ├── core-sound-17.json
│   ├── marissa.json
│   └── ...
├── images/             ← Any locally hosted images (logos, icons)
└── README.md
```

## How it works

- **This site** (on Cloudflare Pages) serves the HTML/CSS/JS
- **Shopify** (2mpps1-jk.myshopify.com) stores products, prices, handles checkout
- **nav-data.js** controls the mega-menu and all boat page routing
- **boats/*.json** files contain boat specs, kit SKUs, hero images, description content
- When a customer clicks "Checkout" they go to Shopify's hosted checkout — fully PCI compliant

## Updating navigation

Edit `nav-data.js` to add a new boat model, change a link, or reorganize the menu.  
Changes go live automatically when pushed to GitHub (Cloudflare Pages auto-deploys).

## Adding a new boat model

1. Add entry to `nav-data.js` under the correct category
2. Create `boats/new-boat-slug.json` with the boat's data
3. Push to GitHub — done

## Shopify store

- Admin: https://admin.shopify.com/store/2mpps1-jk
- Storefront API endpoint: https://2mpps1-jk.myshopify.com/api/2024-01/graphql.json
- Public token: stored in nav-data.js (safe to expose — read-only)

## Deployment

Hosted on Cloudflare Pages, auto-deploys on every push to main branch.  
Custom domain: bandbyachtdesigns.com (DNS managed in Cloudflare)
