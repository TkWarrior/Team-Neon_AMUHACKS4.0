# Githublens

This project is a fully-featured AI-powered GitHub Developer Tool built with **Next.js 15**. It aims to provide developers with enhanced insights, automation, and enhanced functionalities for GitHub repositories. In this guide, we'll walk through the key features and steps to build and deploy the project.

## Table of Contents
1. [Project Initialization](#project-initialization)
2. [Setting Up NeonDB](#setup-neondb)
3. [Setting Up Shadcn](#setup-shadcn)
4. [Setting Up Clerk](#setup-clerk)
5. [Building the Layout and Sidebar](#building-layout-and-sidebar)
6. [Creating the Project Page](#create-project-page)
7. [Building the Dashboard Page](#build-dashboard-page)
8. [Commit Log Component](#build-commit-log-component)
9. [Question Card Component](#build-question-card-component)
10. [GitHub RAG Pipeline](#github-rag-pipeline)
11. [Implementing GitHub Repo RAG](#implement-github-repo-rag)
12. [Q&A Page](#build-qa-page)
13. [Deployment to Vercel](#deployment-to-vercel)

---

## Project Initialization
- Initialize the project with Next.js 15 by running the following commands:
    ```bash
    npx create-next-app@15 your-project-name
    cd your-project-name
    ```

## Setup NeonDB
- NeonDB is used for managing database operations in this project. You can set it up by:
    1. Installing the NeonDB SDK.
    2. Configuring the database connection in your project.
    3. Ensuring proper environment variables for accessing the database.
    4. Creating the necessary database schema for storing GitHub data.

## Setup Shadcn
- Shadcn is a design system for building UI components.
    1. Install Shadcn.
    2. Configure global styles and components like buttons, forms, and modals.
    3. Use Shadcn components to enhance the UI/UX of the project.

## Setup Clerk
- Clerk will handle user authentication and access control for the app.
    1. Create a Clerk account.
    2. Integrate Clerk into your Next.js app for user management.
    3. Set up login, registration, and account management pages using Clerk's UI components.

## Building Layout and Sidebar
- The layout component will serve as the main structure for the pages, and the sidebar will offer easy navigation.
    1. Create a responsive layout component.
    2. Build a sidebar with links to the dashboard, project details, and other key sections.

## Create Project Page
- The project page will showcase the details of the GitHub repository the user is working on.
    1. Fetch GitHub repository data using GitHub's API.
    2. Display repository details like the name, description, and commit history.
    3. Integrate GitHub authentication for fetching user-specific repositories.

## Build Dashboard Page
- The dashboard page will serve as the main hub for users to access analytics and insights related to their repositories.
    1. Display repository metrics such as stars, forks, and open issues.
    2. Visualize data using charts and graphs.
    3. Allow users to interact with their repositories through actions like opening issues or making commits.

## Build Commit Log Component
- This component will display the commit history for a GitHub repository.
    1. Fetch commit data using GitHub’s API.
    2. Display commit details like the commit message, author, and date.
    3. Provide the ability to filter and search commit logs.

## Build Question Card Component
- The question card component will show developer-related questions, solutions, and discussions.
    1. Display questions along with answers and related discussions.
    2. Allow users to submit their own questions or solutions.
    3. Integrate with a knowledge base or external Q&A system.

## GitHub RAG Pipeline
- The RAG (Red, Amber, Green) pipeline provides a status indicator for repositories based on key metrics like:
    - Build status (Green: passing, Red: failing)
    - Issue severity (Amber: moderate, Red: critical)
    - Contribution activity (Green: active, Red: stagnant)

## Implement GitHub Repo RAG
- Implement a system to fetch GitHub repository data and calculate the RAG status based on predefined conditions.
    1. Integrate GitHub’s API to fetch data on commit status, issues, and contributions.
    2. Display a visual representation of the RAG status for each repository.

## Build Q&A Page
- The Q&A page will display a list of developer questions related to repositories and programming challenges.
    1. Allow users to search, filter, and view questions related to their projects.
    2. Provide options for submitting and answering questions.

## Deployment to Vercel
- Finally, deploy the app to Vercel for live access.
    1. Create a Vercel account and link the GitHub repository.
    2. Set up automatic deployment from GitHub to Vercel.
    3. Configure environment variables on Vercel for connecting to NeonDB, Clerk, and GitHub.

---

## Conclusion
By the end of this project, you will have built a powerful AI-driven tool that enhances GitHub repository management and developer productivity. With the use of Next.js 15, NeonDB, Shadcn, Clerk, and GitHub APIs, you will create an interactive and seamless user experience that can be deployed to Vercel.
