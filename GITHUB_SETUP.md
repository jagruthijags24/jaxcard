# Push JaxCard to GitHub

Your project is already committed locally. Follow these steps to add it to GitHub:

## Step 1: Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Set:
   - **Repository name:** `jaxcard` (or any name you like)
   - **Description:** JaxCard Credit Card Website
   - **Public**
   - **Do NOT** check "Add a README" (you already have one)
4. Click **Create repository**

## Step 2: Push your code

In the project folder, run these commands in your terminal:

```bash
cd c:\Users\hp\Downloads\blkcard-website-main\blkcard-website-main

git remote add origin https://github.com/YOUR_USERNAME/jaxcard.git

git branch -M main

git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `jaxcard` with the repo name you chose.

## If you use SSH instead of HTTPS

```bash
git remote add origin git@github.com:YOUR_USERNAME/jaxcard.git
git branch -M main
git push -u origin main
```

---

**Done.** Your JaxCard project will be on GitHub.
