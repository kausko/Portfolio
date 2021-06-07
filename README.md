# Portfolio

![views](https://githits.vercel.app/api/views?user=kausko&repo=Portfolio&mode=dark&disable=Total)

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![UnDraw](https://img.shields.io/badge/UnDraw-6C63FF?style=for-the-badge&logo=svg&logoColor=white)
![SimpleIcons](https://img.shields.io/badge/Simple%20Icons-111111?style=for-the-badge&logo=simple-icons&logoColor=white)
![NextJS](https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## How to personalize
- Press [![image](https://img.shields.io/badge/Use%20this%20template-2EA043?style=for-the-badge)](https://github.com/kausko/Portfolio/generate) to clone this template to your Github account
- Clone the newly created repository in your account to your local machine
- Customize the following files with your own information
    - `data.json` with your
        - Name (appears in Navbar)
        - Landing content
            ```
            {
                "title": String, // Main heading on landing
                "subtitles: String[], // Animated Subheaders
                "professionalDetails": {
                    "alt": String, // Tooltip text that appears on hover,
                    "icon": String, // Icon name from simpleicons.org,
                    "link": String // To your account/repo/email
                }[]
            }
            ```
        - Skills
            - Keys appear as headings on your porfolio (Ex: languages known)
            - Values appear as icons from simpleicons.org
            - Value can be a `String` or `Object` with properties: `alt`, `icon` and `backgroundColor` (optional)
            ```
            {
                [key1]: [values1],
                ...
                [keyn]: [valuesn],
            }
            ```
        - Projects
            ```
            {
                "baseURI": "https://api.github.com/repos/<your-Github-username>/",
                "repositories": String[] // <Names of your Github repositories>
            }
            ```
        - Experience
            - Uses the same key-value pair pattern as the `Skills` section
            - Refer `data.json` for valid properties of `values`
        - About
            ```
            {
                "description": String,
                "picture": String, // URL
                "social": Object[] // Same as professionalDetails from Landing
            }
            ```
        - Theme
            - The theme object has two properties - light, and dark, for light mode and dark mode respectively.
            - Despite the classification, theming is not limited to colors only. Breakpoints, typography, animations, etc. can also be modified. See [link](https://material-ui.com/customization/default-theme/) for more details.
            - The theme object contains the default colors applied by MUI as an example. This can be modified or removed entirely.
        - **NOTE:**
            - Valid icon names can be obtained from simpleicons.org by hovering on the icons. The name appears at the bottom of the page as: `https://simpleicons.org/icons/<icon-name>.svg`
            - Original names of the brand may also be provided. Examples on how icon names are automatically corrected (not tested for all cases): 
                - Node.js -> node-dot-js
                - C++ -> cplusplus
            - I used images from [LinkedIn's CDN](media-exp1.licdn.com) for the Experience and About sections. To use other sources, see additional configurations below.
    - `pages/_document.js` with your Google Analytics code.
    - All `.png` icons and `manifest.webmanifest` in the public folder. There are many ways of generating these. I used:
        - [Favicon](https://favicon.io/) for generating favicons
        - [Simicart](https://www.simicart.com/manifest-generator.html/) for generating manifest information and files
        - [Maskable](https://maskable.app/) for masking my icons for a higher PWA score [OPTIONAL]
- For additonal customizations, modify:
    - `domains` in `next.config.js` for using images from additional sources
    - `.svg` files in `public/` directory for using your own images in the Landing, Skills, Experience, Projects and About sections. I used SVGs from [UnDraw](undraw.co).
- Commit your changes and push to your repository

## Deployment (with Vercel)
- Create a *Personal Access Token `(PAT)` on Github, with access to all your repositories. 
- Copy the `PAT` and save it for later use
- Create an account on Vercel and connect your Github account
- Create a [![image](https://img.shields.io/badge/New%20Project-000000?style=for-the-badge)](https://vercel.com/new)
- Choose `Import Git Repository` and choose the cloned repository
- The `Project Name` may be changed but keep the `Framework Preset (Next.js)`, `Root Directory (./)` and `Build Settings` intact
- Add the following environment variable with key: `PAT` and value: `<40-character-PAT>` (replace with actual PAT without the angular <> brackets)
- Press the ![image](https://img.shields.io/badge/Deploy-0171F3?style=for-the-badge) button

**PATs must follow GitHub's new authentication token format : `ghp_<37-character-Base62-String>`*

## How to update content
Deployment with Vercel automatically sets up your repository for continuous deployment. Changes committed and pushed to master should reflect in a few minutes on your site. If your deployment fails, check ![image](https://img.shields.io/badge/Build%20Logs-ffffff) on Vercel.

## Running locally
- Requirements: Node, NPM and Yarn (LTS)*
- Navigate to your cloned project, and run `yarn` on a terminal
- Create a file named `.env.local` and add the PAT environment variable here (`PAT=<40-character-pat>`)
- Run `yarn dev` to test the Next.js app on `localhost:3000`
- Production builds can also be tested using `yarn build` and `yarn start`

*`npm` commands also work

## Lighthouse stats
![image](https://raw.githubusercontent.com/kausko/Portfolio/master/public/Lighthouse.PNG?token=AMW772UHUMQCJSOBYSVYAQ3AHCTAY)

*These stats were recorded on Google Chrome's incognito mode for Desktop. These stats are subject to change and may increase or decrease depending on the tester's environment and/or changes to source code.*
