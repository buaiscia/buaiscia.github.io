---
title: Building a site from scratch. Part 3 - Refactoring, showing/hiding header
date: '2020-03-24T10:00:00.000Z'
draft: true
tags: ['react', 'web development', 'design']
summary: "I'm going to create a website from scratch with React and Firebase. This is part 4, we add eslint and transform the components from class-based to functional ones. Also, adding Typescript."
---

One thing that had to be done while setting up the project (and now I know but I didn't in March), is setting up the environment in a correct way.
That includes setting up Eslint.

Since I've got a little more experience since then, I decided, while retaking the project in my hand, that it would be good not to use class-based components anymore. So I converted everything to functional components instead.

The last change was to convert the project to Typescript. The project is simple enough, however I learnt how Typescript gives more safety in not having unexpected bugs.

\*\* Eslint

I had to setup Eslint for both Javascript and Typescript. Eslint documentation is pretty thorough and easy to understand. Here's the setup I made.
