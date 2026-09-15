# Monkey Business Tree Care LLC — Brochure Website

A high-performance, SEO-optimized static brochure website for **Monkey Business Tree Care LLC**, a fully insured tree service based in Houston, TX serving Houston and surrounding communities.

- **Founder & Arborist**: Corey Coupland, ISA Certified Arborist #TX-377420A
- **Direct Phone**: 713-826-7232 ("Ask for Corey")
- **Credentials**: 20+ years of tree industry experience, founded as an LLC in August 2025, fully insured.
- **Tech Stack**: Pure HTML5, CSS3, and Vanilla JavaScript (No frameworks, no build tools, zero dependencies).

---

## File Structure

```text
├── index.html                  # Main single-page semantic brochure
├── css/
│   └── styles.css              # Industrial arborist theme, responsive layout & custom variables
├── js/
│   └── script.js               # Mobile navigation, quote modal, form handling
├── images/
│   ├── mascot-logo.svg         # Cartoon gorilla with STIHL chainsaw emblem
│   ├── isa-certified-badge.svg # ISA Certified Arborist credential badge
│   ├── corey-arborist.svg      # Arborist climbing & rigging illustration
│   ├── texas-service-area.svg  # Houston & surrounding communities service map
│   ├── badge-insured.svg       # Fully Insured shield
│   ├── badge-pricing.svg       # Upfront Pricing seal
│   └── badge-emergency.svg     # 24/7 Emergency Storm response icon
├── robots.txt                  # Search engine crawl directives
├── sitemap.xml                 # XML sitemap for SEO indexing
└── README.md                   # Project documentation & GitHub Pages guide
```

---

## Deploying to GitHub Pages (No Build Tools Required)

Because this website uses 100% pure static web standards (HTML5, CSS3, vanilla JS), it deploys directly onto GitHub Pages straight from the repository root with zero compilation or build steps:

1. **Create a GitHub Repository**:
   - Create a new repository on GitHub (e.g., `monkey-business-tree-care`).
2. **Push the Files**:
   - Initialize git in your project folder (if not already done):
     ```bash
     git init
     git add .
     git commit -m "Initial commit for Monkey Business Tree Care website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/monkey-business-tree-care.git
     git push -u origin main
     ```
3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** &rarr; **Pages** (in the left sidebar).
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/(root)`.
   - Click **Save**.
4. **Live URL**:
   - Your site will be live within 1–2 minutes at `https://<your-username>.github.io/monkey-business-tree-care/`.
5. **Custom Domain (Optional)**:
   - If using a custom domain (such as `monkeybusinesstreecare.com`), enter it under the **Custom domain** field in GitHub Pages settings and configure the DNS `A` records pointing to GitHub's IP addresses.

---

## Local Development & Testing

You can open `index.html` directly in any browser, or run a lightweight local static server:

```bash
# Using Python
python3 -m http.server 8080

# Or using Node.js npx
npx serve .
```
Then navigate to `http://localhost:8080` in your browser.
