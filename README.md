Domain is on Google Domains

DNS Servers and Website Deployment are both done by Netlify.com

The site is on Google because of Google Search Console 

Index.html - just displays the App.js on the site - don't need to touch

Index.css - contains the font families needed

App.js - contains the Routes which redirects and displays different pages for different links (E.g. the rishikanchi.com/resume goes to the resume and rishikanchi.com/startup-unicorns-analysis goes to the final project at DPI)

App.css - contains the styles that I want as a base for the entire project (like background-color and font color). This file also includes basic styles for classes I want to use in the rest of the project (like .button which contains css for button)

Pages folder - contains the different pages on the site
    
In the pages folder, there is the ManualLinks folder - has pages that automatically redirect to another page and aren't connected to the main site (they are like bitly links for me)

Components folder - contains the components used on the page - mainly organization

The public folder contains the fonts and index.html file that contains the metadata that allows Google to show my website with Google Search Console


How to change logo and title:

1) Put logo in public folder
2) Change all logos AND titles in the index.html file to your image and your desired title
3) Change all images in the manifest.json file to your image

Gitignore file - I just serached up "Gitignore for React website" and copy pasted the top result - this makes sure that the node_modules and huge files don't get into github and cause issues

package.json - contains all node_modules used so that Netlify downloads them before deploying site - you dont need to change this when you download node_modules it automatically adds the node_modules into the json

package-lock.json - idk what doesn't really matter

_redirect and netlify.toml are used to deploy website on Netlify - don't change them - if you have these files, no changes needed on netlify.com, just connect to github and deploy

robots.txt - contains Disallow which chooses which specific url should not be able to show up on google