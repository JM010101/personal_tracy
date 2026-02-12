# Tracy Reed Personal Website

This is the source code for https://tracyreed.org

## Structure

- `index.html` - Main homepage
- `theme/css/main.css` - Custom stylesheet
- `js/main.js` - Custom JavaScript
- `images/` - Image assets

## Recent Updates

### Fixed Issues
1. **Logo Display**: Fixed logo path from `images/Website Header.PNG` to `/images/Website Header.PNG` (absolute path) and added `display: block` and `height: auto` to CSS to ensure proper display.
2. **Background Color**: Lightened the grey background from `#e0e0e0` to `#f5f5f5` for a cleaner, lighter appearance.

### Google Analytics Setup

Google Analytics has been added to the site but requires your tracking ID. To complete the setup:

1. Go to [Google Analytics](https://analytics.google.com/) and create an account or sign in
2. Create a new property for your website (tracyreed.org)
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Open `index.html` and find the Google Analytics section in the `<head>`
5. Replace `G-XXXXXXXXXX` (both occurrences) with your actual Measurement ID

The Google Analytics code is located in the `<head>` section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Deployment

This site is generated using Pelican static site generator and deployed via git.

## Notes

- The site uses Bootstrap 5.3.0 for responsive design
- Custom fonts: Roboto and Roboto Slab from Google Fonts
- Bootstrap Icons for social media icons
- Cloudflare Analytics is also configured
