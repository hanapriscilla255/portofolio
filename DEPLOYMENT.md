# GitHub Pages Deployment Guide

## 🚀 Quick Setup

Your portfolio is now configured for automatic deployment to GitHub Pages! Here's what you need to do:

## Step 1: Push Code to GitHub

```bash
# If you haven't set up the repository yet
git remote add origin https://github.com/hanapriscilla255/portofolio.git

# Push your code
git push origin main
```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/hanapriscilla255/portofolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **GitHub Actions**
5. Save the settings

## Step 3: Deploy! 🎉

That's it! Your website will be automatically deployed every time you push to the main branch.

**Your website URL will be:**
`https://hanapriscilla255.github.io/portofolio/`

## ⚙️ What's Already Configured

✅ **Vite Configuration** (`vite.config.js`)
- Correct base path for GitHub Pages
- Production optimizations
- Asset handling

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatic builds on push
- Modern deployment using `actions/deploy-pages@v4`
- Node.js 18 environment

✅ **Package.json Scripts**
- `npm run build` - Build for production
- `npm run deploy` - Manual deployment option

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── src/                        # Source files
├── dist/                       # Built files (auto-generated)
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🌐 Features Included

- **Modern Vue.js Portfolio**
- **Project Detail Modals**
- **Activity Photo Galleries**  
- **Responsive Design**
- **Auto Deployment**
- **SEO Optimized**

## 🔍 Troubleshooting

**Build Fails?**
- Check Node.js version (should be 18+)
- Run `npm ci` to clean install dependencies

**Deployment Not Working?**
- Check GitHub Actions tab for error logs
- Ensure GitHub Pages is enabled in repository settings
- Verify repository name matches base path in `vite.config.js`

**Wrong URL Path?**
- Update `base: '/portofolio/'` in `vite.config.js` to match your repository name exactly

## 📞 Support

If you encounter any issues, check the GitHub Actions logs or create an issue in the repository.

---

**Ready to go live? Just push your code! 🚀**
