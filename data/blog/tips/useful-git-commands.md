---
title: Useful GIT commands
date: '2021-01-26'
tags: ['git', 'tips']
draft: false
summary: 'Useful commands to use in git in everyday working life'
---

![Git](https://res.cloudinary.com/buaiscia/image/upload/v1614200427/techblog/git_ayzsas.jpg)

I'm creating this post for reminding myself about some useful git features... and updating it along the way.

-- _Create new git local repository_

`git init`

-- _Normal way for committing and pushing_

```
git add .

git commit -m "message"

git push origin master
```

-- _Check status_

`git status`

-- _Create new branch_

`git checkout -b branchname`

-- _Switch between branches_

`git checkout branchname`

-- _Push branch to remote_

`git push origin branchname`

-- _Push local working branch to its correspondent on Github_

`git push origin HEAD`

-- _Merge branch into master_

```
git checkout master

git merge branchname
```

-- _How to remove file/dir from git after adding it to .gitignore_

`git rm --cached (file)`

-- _Command to check which files are ignored_

`git status --ignored`

-- _How to force revert to last status of master if pulled by mistake from remote depository_

`git reset --hard master@{time to revert back in minutes}` _possibly losing last commit_

`git reset --hard a0d3fe6` _reverting to last commit_

-- _How to force revert after a rebase_

```javacript
  git reflog` ## check the HEAD{number} before the rebase starts
  git reset --hard HEAD{number}

```
-- _Wrong name branch? No problem: delete the one in GH, rename the local one and repush it_

```
git push origin :old-name-of-branch-on-github
git branch -m old-name-of-branch-on-github new-name-for-branch-you-want
git push origin new-name-for-branch-you-want
```

-- _Need to change the branch but have uncommitted, unstaged changes that can conflict with the other branch? Stash comes to help_

`git stash list` _-- list all stashes_

`git stash` _-- stash (saves all unstaged changes in a temporary state under the current commit name)_

`git stash apply` _-- place back all the last stashed changes_

`git stash apply stash@{3}` _-- place back all the changes stashed at the stash n.4 (counting from 0)_

`git stash drop stash@{3}` _-- delete a particular stash_

`git stash clear` _-- delete all stashes_

-- _Make a diff between two branches. In a situation, for example, in which I need to rebase, or check the changes between the two branches_

`git diff branch1..branch2`

-- _Rebase. You have new merged changes on the master branch and need to merge in a clean way those changes in your local branch. It will place in the local log all master commit logs as well. After rebase, push -f origin HEAD_

_Flow:_

- `git checkout master`
- `git pull origin master`
- `git checkout localbranch`
- `git rebase master`
- `git push -f origin localbranch`

-- _Get remote branch locally_

`git fetch`

`git checkout remote-branch`

-- \_...Or the alternative way

`git checkout -b remote-branch`

`git pull origin remote-branch`

-- \_Delete multiple branches in git

`git branch | grep "<pattern>"` to preview the branches

`git branch | grep "<pattern>" | xargs git branch -D` to actually delete them
