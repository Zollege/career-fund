# Career Fund

Jekyll static site for Career Fund.

## Setup

1. Install Ruby dependencies:
   ```bash
   bundle install
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Copy Bootstrap files to assets directory:
   ```bash
   cp node_modules/bootstrap/dist/css/bootstrap.min.css assets/css/
   cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.js assets/js/
   ```

## Development

Start the Jekyll server:
```bash
npm start
```

Start the Jekyll server with incremental build and live reload:
```bash
npm run dev
```

The site will be available at `http://localhost:4000`

## Build

Build the site for production:
```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.
