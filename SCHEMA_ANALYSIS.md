# Schema.org Structured Data Analysis

## Current Metadata Structure

### Site-Wide Metadata (_config.yml)
- **Title**: Career Fund
- **Description**: Career Fund - Supporting career development
- **URL**: https://career.fund
- **Base URL**: ""

### Page-Level Metadata (Front Matter)

1. **Homepage** (`pages/index.html`)
   - Title: Home
   - Description: Welcome to Career Fund
   - Permalink: /

2. **About Page** (`pages/about.html`)
   - Title: About
   - Description: Learn about Career Fund and our mission to make education accessible
   - Permalink: /about/

3. **Partners Page** (`pages/partners.html`)
   - Title: Partners
   - Description: Partner with Career Fund to scale your impact
   - Permalink: /partners/

4. **Students Page** (`pages/students.html`)
   - Title: Students
   - Description: Customizable payment plans for students to make their career education accessible
   - Permalink: /students/

### HTML Metadata (default.html layout)
- Meta charset: UTF-8
- Meta viewport: Responsive
- Title: `{% if page.title %}{{ page.title }} | {% endif %}{{ site.title }}`
- Meta description: Uses page.description or site.description

## Content Analysis

### Homepage Content
- Hero section: "Empowering Students and Trade Schools"
- Feature cards: Partners & Students
- Payment calculator widget
- Statistics: 180+ Program Partners, 35+ States, 97% Collection Rate, 4.8/5 Student Satisfaction
- "How To Partner" section (4-step process)
- "Our Mission" section
- "Partner with Us" form section

### About Page Content
- Hero: "Our Passion Is Education"
- Mission statement
- "What We Believe" section with core values (Empowerment, Transparency, Protection)
- Testimonial from Carly Cavagnoli (VP Operations, Zollege Healthcare Career School)
- Statistics section
- "Who We Are" section (team description)
- "Partner with Us" form

### Partners Page Content
- Hero: "Student-Centered Solutions that Scale Your Impact"
- Growth Services section (tabs: Student Financing, Collections, Student Support)
- Statistics section
- Core Values section
- Dashboard mockup/features
- Student Loan Accounts table with charts
- Testimonial section
- "Partner with Us" form

### Students Page Content
- Hero: "Your Career, Now Within Reach"
- Payment calculator
- "Fulfilling Careers for Everyone" section
- Core Values section
- "Partner with Us" form

## Recommended Schema.org Types

### 1. Organization Schema (All Pages)
**Priority: HIGH**
- Type: `Organization` / `FinancialService`
- Properties needed:
  - `name`: Career Fund
  - `url`: https://career.fund
  - `logo`: Logo URL
  - `description`: Business description
  - `contactPoint`: Contact information
  - `sameAs`: Social media profiles (if applicable)
  - `aggregateRating`: Based on 5/5 rating
  - `address`: Business address (if applicable)

### 2. WebSite Schema (Homepage)
**Priority: HIGH**
- Type: `WebSite`
- Properties:
  - `name`: Career Fund
  - `url`: https://career.fund
  - `potentialAction`: SearchAction (if site search exists)
  - `description`: Site description

### 3. Service Schema (All Service Pages)
**Priority: HIGH**
- Type: `Service`
- Properties:
  - `name`: Service name (e.g., "Student Financing", "Payment Plans")
  - `provider`: Organization (Career Fund)
  - `description`: Service description
  - `serviceType`: Financial services
  - `areaServed`: Geographic areas
  - `offers`: Pricing/plans

### 4. Product Schema (Payment Calculator)
**Priority: MEDIUM**
- Type: `Product` / `FinancialProduct`
- Properties:
  - `name`: Payment Plan
  - `description`: Payment plan details
  - `offers`: Pricing tiers
  - `provider`: Career Fund

### 5. Review/AggregateRating Schema
**Priority: HIGH**
- Type: `AggregateRating`
- Properties:
  - `ratingValue`: 5
  - `bestRating`: 5
  - `ratingCount`: Number of ratings (if available)
- Should be nested in Organization schema

### 6. Review Schema (Testimonials)
**Priority: MEDIUM**
- Type: `Review`
- Properties for testimonials:
  - `author`: Person (Carly Cavagnoli)
  - `reviewBody`: Testimonial text
  - `reviewRating`: If applicable
  - `itemReviewed`: Organization or Service

### 7. Person Schema (Testimonials)
**Priority: MEDIUM**
- Type: `Person`
- Properties:
  - `name`: Carly Cavagnoli
  - `jobTitle`: VP Operations
  - `worksFor`: Zollege Healthcare Career School

### 8. BreadcrumbList Schema (Navigation)
**Priority: MEDIUM**
- Type: `BreadcrumbList`
- Properties: Navigation hierarchy for each page

### 9. AboutPage Schema (About Page)
**Priority: LOW**
- Type: `AboutPage`
- Inherits from `WebPage`
- Additional properties: Main entity (Organization)

### 10. ContactPage Schema (Contact/Forms)
**Priority: MEDIUM**
- Type: `ContactPage`
- For pages with contact forms

### 11. ItemList Schema (Statistics)
**Priority: LOW**
- Type: `ItemList`
- For "By The Numbers" sections
- Properties: Statistics as list items

### 12. HowTo Schema (How To Partner Section)
**Priority: MEDIUM**
- Type: `HowTo`
- Properties:
  - `name`: How To Partner with Career Fund
  - `step`: 4 steps (Discovery, Agreement, Implement, Scale)

### 13. FAQPage Schema (If FAQs exist)
**Priority: LOW**
- Type: `FAQPage`
- Currently no FAQ section found

### 14. Organization (Educational Partner)
**Priority: LOW**
- Type: `EducationalOrganization`
- For partner schools (e.g., Zollege Healthcare Career School)

## Implementation Recommendations

### High Priority (Implement First)
1. **Organization Schema** - Add to all pages via default layout
2. **WebSite Schema** - Add to homepage
3. **Service Schema** - Add to Partners and Students pages
4. **AggregateRating** - Add to Organization schema

### Medium Priority
1. **Review Schema** - Add to testimonials
2. **HowTo Schema** - Add to "How To Partner" section
3. **BreadcrumbList** - Add navigation breadcrumbs
4. **ContactPage** - Add to form pages

### Low Priority
1. **AboutPage Schema** - Specific schema for about page
2. **ItemList Schema** - For statistics sections
3. **FAQPage Schema** - If FAQs are added

## Missing Metadata to Consider Adding

1. **Open Graph Tags** (for social sharing)
   - og:title, og:description, og:image, og:url, og:type

2. **Twitter Card Tags**
   - twitter:card, twitter:title, twitter:description, twitter:image

3. **Additional Meta Tags**
   - Keywords meta tag
   - Author meta tag
   - Language tags
   - Canonical URLs

4. **Structured Data for**
   - Business hours
   - Phone number
   - Email address
   - Physical address (if applicable)
   - Social media profiles

## Next Steps

1. Create schema JSON-LD snippets for each recommended type
2. Add schema markup to appropriate pages
3. Test with Google Rich Results Test
4. Validate with Schema.org validator
5. Add Open Graph and Twitter Card meta tags
6. Consider adding missing business information (address, phone, etc.)
