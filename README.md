# Injury Tracking System

- Index 
  - [Overview](#overview)
    - [System Design](#system-design)
    - [Database Design](#database-design)
  - [Tech Stack](#tech-stack)
  - [Steps to run locally](#steps-to-run-locally)

## Overview
- Next.js as the framework.
- TailwindCSS and Ant for UI design.
- Prisma as the ORM, GraphQL for data query and manipulation.
- Apollo for GraphQL interactivity.
- Auth0 for user authentication.

### System Design
![image](https://github.com/rahulsm20/injury-tracking-system/assets/77540672/aaa7af2a-043d-4fee-8662-f1b917c3b7b5)

### Database Design 
![database-design](https://github.com/rahulsm20/injury-tracking-system/assets/77540672/b48eb8f8-bc9e-43ba-b258-5aab966a15fc)

### Tech stack 
- Next.js
- TailwindCSS
- Ant design
- Auth0
- Prisma
- GraphQL + Apollo Client
- PostgreSQL

### Steps to run locally 
1. Clone this repo 
    ```
    git clone https://github.com/rahulsm20/injury-tracking-system
    ```
2. Enter folder
    ```
    cd injury-tracking-system
    ```
3. Install packages
    ```
    npm install 
    ```
4. Add the following environment variables
    ```
    DATABASE_URL 
    AUTH0_SECRET 
    AUTH0_BASE_URL
    AUTH0_ISSUER_BASE_URL
    AUTH0_CLIENT_ID
    AUTH0_CLIENT_SECRET
    ```
5. Run project
   ```
   npm run dev
   ```



