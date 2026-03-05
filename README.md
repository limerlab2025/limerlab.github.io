# LIMeR Lab — Static Homepage

**Learning, Intelligence, Mechatronics, and Robotics Lab**  
Seattle Pacific University

A static, single-page website for the LIMeR Lab at SPU. No build tools, no dependencies — just HTML, CSS, and JavaScript.

---

## 🗂 Project Structure

```
limer-lab/
├── index.html      # Main HTML — all page sections
├── style.css       # All styles (CSS variables, layout, responsive)
├── script.js       # Navigation, animations, interactivity
└── README.md       # This file
```

---

## 🌐 Pages / Sections

The site is a single HTML file with JavaScript-powered section switching:

| Section      | Description                              |
|--------------|------------------------------------------|
| Home         | Hero banner, Available Positions, News   |
| Members      | PI profile and student researchers       |
| Research     | Research focus areas                     |
| Courses      | Courses taught by lab faculty            |
| Publications | Peer-reviewed papers and conference work |
| Facility     | Lab equipment and location               |

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** (top-right `+` button)
3. Name it `limer-lab` (or `<your-username>.github.io` for a user site)
4. Set visibility to **Public**
5. Click **Create repository**

### Step 2 — Upload the files

**Option A — via GitHub web interface (no Git required)**

1. Open your new repository
2. Click **Add file → Upload files**
3. Drag and drop all three files: `index.html`, `style.css`, `script.js`
4. Scroll down and click **Commit changes**

**Option B — via Git command line**

```bash
# Initialize and push from the project folder
git init
git add .
git commit -m "Initial commit: LIMeR Lab homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/limer-lab.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings**
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **Branch: main** and folder **/ (root)**
5. Click **Save**

Your site will be live at:  
`https://YOUR_USERNAME.github.io/limer-lab/`

*(It may take 1–2 minutes to build on first deploy.)*

---

## ✏️ Customizing Content

All content lives in `index.html`. Look for these sections to update:

### Update Lab Information
Search for placeholder text like `limer@spu.edu` and replace with real contact details.

### Add a Team Member
Copy a `<div class="member-card">` block inside the `#members` section and update the name, initials, and field.

### Add a Publication
Copy a `<div class="pub-item">` block inside the `#publications` section and update year, title, authors, and venue.

### Add a News Item
Copy an `<article class="news-item">` block inside the Home section and update the date and text.

### Change Colors
Open `style.css` and edit the CSS variables at the top of the file:

```css
:root {
  --navy:  #0d1b2a;   /* background */
  --red:   #cc0000;   /* accent color */
  /* ... */
}
```

---

## 🖥 Running Locally

No server required. Just open `index.html` in any modern web browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a simple local server for development:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## 📱 Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.  
Fully responsive — mobile, tablet, and desktop.

---

## 📄 License

© 2025 LIMeR Lab, Seattle Pacific University. All rights reserved.
