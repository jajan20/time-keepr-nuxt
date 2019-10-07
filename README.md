# Time Keepr (NuxtJS)
This repo is the backend connected with the frontend, below you'll find a table with URL's to the correct repo's.
Link to deployed and live version -> [Time Keepr](https://time-keepr-nuxt.jamiejansen1.now.sh/)

| Repository  | URL                                        |
|-------------|--------------------------------------------|
| Frontend v1 | https://github.com/jajan20/time-keeper     |
| Frontend V2 | https://github.com/jajan20/time-keepr      |
| Backend     | https://github.com/jajan20/time-keepr-nuxt |

# Installation
Download the necessary files, extract them on your computer.
After installation you can start the development server by running `yarn dev` .

## Table of Content
- [About](#about)
- [Build](#build)
- [Initial Planning](#initial-planning)
- [Deliverables](#deliverables)
- [Why NuxtJS](#why-nuxtjs)
    - [SEO](#seo)
    - [Structure](#structure)
    - [Dynamic Parameters](#dynamic-parameters)
    - [Links](#links)
    - [Validation](#validation)
    - [Nested Routed](#nested-routes)
    - [Layouts](#layouts)
    - [External CSS](#external-css)
- [Interviews](#interviews)    
- [Roadmap](#roadmap)

# About
This project is a part 2 of my time-keepr project. Which can be found following this link.

Here I tried building a small web-app that registers time for co-workers. Initially this was to be a front-end only project. But I thought it would be cool if the web-app could actually be used and that registrations would be saved to a database. This is where Nuxt comes in. It's build upon NodeJS and will help me create routing and connect to a back-end.

In this document I'll log my progress while getting to know NuxtJS. I'll write down interesting findings and other code snippets. It will also contain the code used for this project.


# Build

So for the front-end I made a design, but while working on the back-end/nuxt I redesigned the app a little. I'm going to try to make something resembling my design below.
![](https://raw.githubusercontent.com/jajan20/time-keepr-nuxt/master/group-render-time-keepr-design.png)

**Edit:**
Since the project took a lot longer than expected I've changed the design quite a bit. I might continue working on this project outside the previous set time limit. But for the backend I found it more important to create a frontend/backend connection, use a database and deploy the app.
live version -> [Time Keepr](https://time-keepr-nuxt.jamiejansen1.now.sh/)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
# Initial Planning
- [x]  Interviews
- [x]  Backend Research
- [x]  Backend connection
- [x]  Testing

While working on this project I'll document the steps, struggles and findings in my GitHub repositories.

# Deliverables
- [x]  User can register start, end and lunch time.
- [ ]  User can give comments.
- [ ]  Team manager will be able to get an overview.
- [ ]  User can select if clocked in or not.

The user can register start, end and lunch time. While testing I've found out that wether the user is clocked in or not. Doesn't really add much value to the product. Later down the road when the management function is added it might by included. But right now this information is pulled from the registration system that works with our check in cards.

# Why NuxtJS

NuxtJS builds upon VueJS and also allows creation of universal Vue apps.

Configuration is via file and folder structure which can simplify the development of vue apps.

Although it will help with server-side rendering, it's not a replacement for other server-side frameworks like EJS or Handlebars. (It's not a template renderer).

[NuxtJS CheatSheet](https://www.vuemastery.com/pdf/Nuxtjs-Cheat-Sheet.pdf)

### SEO

In a basic example the user visits an url, server returns index.html which will contain all your references to scripts and will render the page.

This is an async process and without server-side rendering the google crawler will not correctly index your page. It will not wait for your page to be fetched through your scripts. Also the user would have to wait for the content to load.

This is where NuxtJS really shines, it will pre-render your page on the server. Nuxt creates and optionally renders the Vue app.

Now the google crawler requests every page and gets pre-rendered pages with content from the server.

NuxtJS is not a server-side framework, just runs on your server to serve pre-rendered apps.

### Structure

The pages folder is the heart of the project structure. Files in pages must be .vue files. Nuxt will automatically create routes of the file names.(But you can also add dynamic routes)

As mentioned before, the pages folder is the heart of the project structure. But there are different ways to create the routes. 

**Example**

With this all your pages/routes are in the pages folder. Their file names indicate which page it is.

    pages
    ├── index.vue
    └── users.vue

**Example**

This is a different example on how you can structure your project. For every route/page there is a separate folder and in here you'll find another index.vue. This in my opinion gives a bit more overview and keeps all the files separate. 

    pages
    ├── index.vue
    └── users
        └── index.vue

For the remainder of this project I'll be using the second example.

### Dynamic Parameters

These can also be achieved in two different ways. Both look the same way as the structure above. Let's say you want a dynamic URL for every user. You could name the vue file like **_id.vue,**  but if you want to use the folder structure you can create a folder _id and in here you'll add the index.vue file.

Nuxt looks different, but under the hood it still uses the vue-router.

### Links

When u use a regular `<a href="">` url, when the site is compiled and you click on this link a new request will be made. This is default behaviour. Usually with SPA you want to prevent this from happening. In that case use the `<nuxt-link>` tag. This will create an anchor once compiled but will prevent a request from being made.

`this.$router.push('/users/' + this.userId)` ← Code snippet for dynamic parameter link.

### Validation

Validate is a special method that nuxt executes before rendering the route.

    validate(data) {
    	return data.params.id === 1
    }

This will validate if the id parameter is equal to 1, if it's not It'll throw an error.

    validate(data) {
    	return /^\d+$/.id(data.params.id)
    }

This used regular expressions to validate the id. It will return true when the id is an number and false when the parameter is anything else.

### Nested Routes

Nested routes use the .vue extension and the same name as the folder.
By using `<nuxt-child/>` you mark the place where the different sections of the nested routes should be loaded.

### Layouts

In your project folder you'll find a folder named `layouts` and in this folder there's a file called `default.vue` . This file is the main wrapping element, frame if you will of your project. adding styling here will add it to all your pages.

### External CSS

In the root folder of your project there should be a file named `nuxt.config.js` when you open this it's an object structure where one of the objects is the **head**.

Because vue renders the html, initially you don't have access to the head tag. In this object you can add anything related to head setttings. Meta, name, but also links like external style sheets.

# Interviews
Since the project was really small and the core functionality was more important I've asked my co-workers just three simple questions.

1. How many times did you work past your initial work schedule this week?
2. Did you register the time? If not, why?
3. Did you register the time yourself? if not, why?

### Fleur

1. three times.
2. no, I usually don't register my extra time (unless it's more than an hour). to much of a hassle.

### Jordy

1. two times.
2. Yes
3. No, I was already on my way home.

### Hans

1. four times.
2. Yes
3. No, I already logged out of the computer. Would have taken to long.

# Roadmap
- [ ] Overview for team managers
- [ ] Accounts for users
- [ ] Authentication

