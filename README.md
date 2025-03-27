## Vitrine Website

This is the repository for the **Vitrine Website**, which showcases mobile apps. The project is built using **Tailwind CSS** and **Vite** for fast development and optimized production builds. The site is intended to be hosted on **GitHub Pages**.

---

## Table of Contents

- [Vitrine Website](#vitrine-website)
- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [GitHub Pages Deployment](#github-pages-deployment)

---

## Prerequisites

Make sure you have the following installed before setting up the environment:

- **[Node.js](https://nodejs.org/en/)** (version 14 or higher)
- **[npm](https://www.npmjs.com/)** (Node Package Manager, comes with Node.js)

If you don't have Node.js installed, download and install it from the official website.

---

## Installation

1. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/vitrine-website.git
   cd vitrine-website
   ```

2. Navigate into the my-website directory and install the project dependencies using npm:
   ```sh
   cd my-website
   npm install
   ```

## Running the Development Server

Make sure you're in the my-website directory. Start the development server:
   ```sh
   npm run dev
   ```
   
## Building for Production

To build the project for production (optimized and ready for deployment), run:
   ```sh
   npm run build
   ```
This will create a dist/ folder with the production-ready files.

## GitHub Pages Deployment

To deploy the site on GitHub Pages:

Make sure you've committed and pushed all changes to the repository.

Build the project for production. The dist/ folder is now ready for deployment. 

   ```sh
   npm run build
   ```

Push this folder to the gh-pages branch of your GitHub repository using a tool like gh-pages:
Deploy the site:

   ```sh
   npm run deploy
   ```