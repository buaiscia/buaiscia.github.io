---
title: Useful git commands
date: "2019-05-18T16:51:00.000Z"
layout: post
draft: false
path: "/posts/useful-git-commands/"
category: "Git"
tags:
  - "Git"
  - "Web development"
description: "Some personal useful commands to use in git"
---

![Git](./git.jpg)

I'm creating this post for reminding myself about some useful git features... and updating it along the way.

-- *Create new git local repository*

`git init`

-- *Normal way for committing and pushing*

```
git add .

git commit -m "message"

git push origin master
```

-- *Check status*

`git status`

-- *Create new branch*

`git checkout -b  branchname`

-- *Switch between branches*

`git checkout branchname`

-- *Push branch to remote*

`git push origin branchname`

-- *Merge branch into master*
```
git checkout master

git merge branchname
```

-- *How to remove file/dir from git after adding it to .gitignore*

`git rm --cached (file)`

-- *Command to check which files are ignored*

`git status --ignored`

-- *How to force revert to last status of master if pulled by mistake from remote depository*

`git reset --hard master@{time to revert back in minutes}` *possibly losing last commit*

`git reset --hard a0d3fe6` *reverting to last commit*

-- *Push directly from your actual branch without the need to write it*

`git push origin HEAD`
