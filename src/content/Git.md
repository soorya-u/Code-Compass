# Git Reference

## Introduction

Git is a Version Control System used for tracking changes in computer files.

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Contents

1. [Git Local Repository Commands](#git-local-repository-commands)

   - [Status](#stash)

   - [Add](#add)

   - [Restore](#restore)

   - [Commit](#commit)

   - [Reset](#reset)

   - [Stash](#stash)

   - [Rebase](#rebase)

   - [Checkout](#checkout)

   - [Difference](#difference)

   - [Log](#log)

   - [Remove](#remove)

   - [Branch](#branch)

2. [Git Ignore File](#gitignore-file)

3. [Git Remote Repository Commands](#git-remote-repository-commands)

   - [Remote](#remote)

   - [Push](#push)

   - [Fetch](#fetch)

   - [Reset](#reset---remote)

   - [Pull](#pull)

---

## Git Local Repository Commands

### Status

Gives Status of Files in that directory.

```bash
git status
```

Shows the Files that are Modified in Staging Area and files that are Modified in Working Directory.

```bash
git status -s
```

### Add

Adds the file (filename) to the Staged State i.e Tracks the File.

```bash
git add filename.fileextension
```

Add all the Files in Directory to the Staged State i.e Tracks all the File

```bash
git add -A || git add .
```

### Restore

Removes the file from Staging State.

```bash
git restore --staged filename.fileextension
```

### Commit

Saves the File which are in Staged State only

```bash
git commit -m "Message"
```

Commits both Staged and Unstaged Files

```bash
git commit -a -m "(Message)"
```

### Reset

Goes back to the Given Commit ID State.

Commit ID can be found in git log.

It also Deletes all the Previous commits.

```bash
git reset commit-id
```

### Stash

The Changes made are saved but is not committed.

Also the Changes made does not Appear and looks like previous commit.

`git add` command should be used before stash similar to git commit.

```bash
git stash
```

All the Stashed Changes are brought back.

```bash
git stash pop
```

Clears the Stashed Changes.

```bash
git stash clear
```

### Rebase

You can Pick the main commit and squash or merge the other commits into the Picked commit.

The Selected squash merges with the previous picked commit.

```bash
git rebase -i commit-id
```

### Checkout

Replaces the Modified file with the Saved File

```bash
git checkout filename.fileextension
```

Replaces all the Modified file with the Saved File

```bash
git checkout -f
```

### Difference

States the Changes made compared to the Saved File

```bash
git diff (filename.fileextension)//
```

States the Changes made in Saved File compared to Previous Saved File

```bash
git diff --staged (filename.fileextension)
```

### Log

Shows the Log in History or Commit History

```bash
git log
```

Shows n Log in Histories Commit Histories

```bash
git log -p -(no. of logs required)
```

### Remove

Deletes the File (filename) from both working Directory as well as from Git Staging Area

```bash
git rm filename.fileextension
```

Removes file only from Staging Area

```bash
git rm --cached filename.fileextension
```

### Branch

Displays all the Branches

```bash
git branch
```

Creates a Branch of name branchname

```bash
git branch branchname
```

Switches to the Branch branchname

```bash
git checkout branchname
```

Merges the branchname Branch to the Current Branch

```bash
git merge branchname
```

Switches to Newly Created Branch branchname

```bash
git checkout -b branchname
```

---

## .gitignore File

File that carries names of Files that are present in the Working Directory but are Ignored by Git.

```json
"filename.fileextension" : "Ignores the File(filename) with the extension of fileextension",

"*.fileextension" : "Ignores all the File with the extension of fileextension",

"/filename.fileextension" : "Ignores the File(filename) with the extension of file extension in that particular Directory(Same Directory as that of .gitignore file)"
```

---

## Git Remote Repository Commands

### Remote

Adds a new url to the system and gives it a name origin.

Origin is usually given the url of our GitHub Repository.

```bash
git remote add origin url
```

Adds a new url to the system and gives it a name upstream.

Upstream is usually given the url of Original GitHub Project.

```bash
git remote add upstream url
```

Shows all the urls that are attached to the Working Directory.

```bash
git remote -v
```

### Push

Pushes all the Commits to the main branch of our Personal GitHub Account.

```bash
git push origin main
```

Pushes all the Commits to the branchname branch of our Personal GitHub Account.

```bash
git push origin branchname
```

Pushes all the Commits and Deletes the Previous Extra Commits present in the main branch of our Personal GitHub Account.

```bash
git push origin main -f
```

### Fetch

Fetches all the branches and deleted files from both origin and upstream.

```bash
git fetch -all --prune
```

### Reset - Remote

Resets our current System branch to the upstream's main branch.

```bash
git reset --hard upstream/main
```

### Pull

Pulls the upstream's main branch to our System's Current Branch.

```bash
git pull upstream main
```

---
