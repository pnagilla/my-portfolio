# Personal Portfolio & Blog

A modern, responsive portfolio website with an integrated blog. Built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern, clean UI with smooth animations
- Built-in blog with sample posts
- Contact form
- Mobile-friendly navigation
- Fast loading and SEO-friendly

## Getting Started

### Local Development

1. Open `index.html` in your web browser to view the site locally
2. Edit the HTML files to customize your content
3. Modify `css/style.css` to change the styling
4. Update `js/main.js` for additional functionality

### Customization

1. **Personal Information**: Update your name, title, and bio in `index.html`
2. **Projects**: Add your own projects in the Projects section
3. **Skills**: Modify the skills tags to match your expertise
4. **Blog Posts**: Create new blog posts in the `blog/posts/` directory
5. **Social Links**: Add your social media URLs in the Contact section
6. **Images**: Add your project images to the `images/` folder

## Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a new GitHub repository
2. Push your code to the repository:
   ```bash
   cd my-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Navigate to "Pages" section
5. Select "main" branch as source
6. Your site will be live at `https://yourusername.github.io/yourrepo/`
7. Connect your custom domain in the GitHub Pages settings

### Option 2: Netlify (Free with Continuous Deployment)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your `my-portfolio` folder to Netlify
3. Your site will be live instantly
4. Go to Site Settings → Domain Management to add your custom domain
5. Netlify will automatically provide free HTTPS

### Option 3: Vercel (Free & Fast)

1. Sign up at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Navigate to your project folder: `cd my-portfolio`
4. Run: `vercel`
5. Follow the prompts to deploy
6. Add your custom domain in the Vercel dashboard

### Option 4: Traditional Web Hosting

1. Choose a hosting provider (Bluehost, HostGator, SiteGround, etc.)
2. Upload all files via FTP or cPanel File Manager
3. Point your domain to the hosting server's nameservers
4. Your site will be live once DNS propagates (usually 24-48 hours)

## Connecting Your Custom Domain

### For GitHub Pages:
1. Add a `CNAME` file to your repository with your domain name
2. In your domain registrar's DNS settings, add a CNAME record pointing to `yourusername.github.io`

### For Netlify/Vercel:
1. Go to your site's domain settings
2. Follow the instructions to add DNS records provided by the platform
3. Update your domain registrar's nameservers or add the specified records

### General DNS Setup:
- **A Record**: Point to the hosting provider's IP address
- **CNAME Record**: Point to the hosting provider's domain (e.g., `yoursite.netlify.app`)
- **Wait for DNS propagation**: Usually takes 1-24 hours

## File Structure

```
my-portfolio/
├── index.html          # Main homepage
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # JavaScript functionality
├── blog/
│   ├── index.html     # Blog listing page
│   └── posts/         # Individual blog posts
│       ├── getting-started-with-web-development.html
│       ├── building-responsive-websites.html
│       └── javascript-tips-and-tricks.html
├── images/            # Your images (add your own)
└── README.md          # This file
```

## Tips for Success

1. **Replace Placeholder Content**: Update all "Your Name" placeholders with your actual information
2. **Add Real Projects**: Replace the sample projects with your actual work
3. **Update Social Links**: Add your real social media profiles
4. **Add Images**: Include screenshots and photos in the `images/` folder
5. **Write Your Story**: Personalize the About section with your unique journey
6. **Keep It Updated**: Regularly add new blog posts and projects
7. **SEO Optimization**: Update meta descriptions in each HTML file
8. **Test Everywhere**: Check your site on different devices and browsers

## Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. **Use a form service**:
   - [Formspree](https://formspree.io) (free tier available)
   - [Netlify Forms](https://www.netlify.com/products/forms/) (free on Netlify)
   - [EmailJS](https://www.emailjs.com) (free tier available)

2. **Or set up your own backend**:
   - Use Node.js with Nodemailer
   - PHP mail function
   - Contact form API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Feel free to use this template for your own portfolio. No attribution required.

## Need Help?

If you need assistance customizing or deploying your site, refer to the documentation of your chosen hosting platform or reach out to their support teams.

---

Good luck with your new website! 🚀
