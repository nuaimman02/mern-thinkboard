🧠 MERN ThinkBoard
==================

A full-stack, split-architecture note-taking and brainstorming web application built using the MERN stack (MongoDB, Express.js, React, Node.js). **ThinkBoard** features clean CRUD functionality, a modern mobile-first interface, and real-world enhancements like rate limiting to prevent API abuse.

✨ Features
----------

*   **📌 Notes & Board Management:** Seamlessly Create, Read, Update, and Delete (CRUD) your thoughts, ideas, or tasks.
    
*   **⚡ Frontend–Backend Separation:** Architected with a split layout allowing the Vite/React frontend and the Express API to be hosted and scaled completely independently.
    
*   **🎨 Responsive & Modern UI:** Styled using **Tailwind CSS** and **DaisyUI** components for an accessible, beautiful, fluid user experience across mobile, tablet, and desktop screens.
    
*   **🔒 Production-Grade Rate Limiting:** Implemented API request throttling using **Upstash Redis** (express-rate-limit) to protect backend endpoints from automated abuse.
    
*   **☁️ Persistent Cloud Storage:** Fully integrated with **MongoDB Atlas** using Mongoose ODM for reliable, structured schema management.
    
*   **🔔 Interactive Feedback:** Includes smooth visual notifications powered by **React Hot Toast**.
    

🛠️ Tech Stack
--------------

### Frontend

*   **React.js** (Vite-powered for rapid development builds)
    
*   **Tailwind CSS + DaisyUI** (Utility-first styling & UI components)
    
*   **Axios** (Promise-based HTTP client for API requests)
    
*   **React Router** (Declarative routing)
    
*   **React Hot Toast** (Toast notifications)
    

### Backend

*   **Node.js** (Runtime environment)
    
*   **Express.js** (Minimalist web framework)
    
*   **MongoDB + Mongoose** (NoSQL Database & Object Data Modeling)
    
*   **Upstash Redis** (Serverless Redis for high-performance rate limiting)
    
*   **CORS & Dotenv** (Cross-origin configuration and environment isolation)
    

📂 Project Structure
--------------------

Plaintext

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   mern-thinkboard/  ├── backend/                  # Express API Service  │   ├── src/  │   │   ├── config/           # DB & Redis connection setups  │   │   ├── middleware/       # Rate-limiter & request handlers  │   │   ├── routes/           # API Endpoint routes (notes/boards)  │   │   └── server.js         # Backend application entrypoint  │   └── package.json  │  ├── frontend/                 # React UI Application  │   ├── src/  │   │   ├── components/       # Reusable interactive UI components  │   │   ├── pages/            # View layouts (Home, Note Editor, etc.)  │   │   └── App.jsx           # Main React routing framework  │   └── package.json  └── README.md   `

⚙️ Local Development Setup
--------------------------

### 1\. Prerequisites

Ensure you have the following installed on your local environment:

*   **Node.js** (v18.x or higher recommended)
    
*   **npm** (v9.x or higher)
    
*   A **MongoDB Atlas** cluster account
    
*   An **Upstash Redis** console account
    

### 2\. Clone the Repository

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/nuaimman02/mern-thinkboard.git  cd mern-thinkboard   `

### 3\. Backend Environment Configuration

Navigate to the backend/ directory, create a .env file, and populate the following secrets:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd backend  touch .env   `

Add these lines to backend/.env:

Code snippet

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   PORT=5001  MONGO_URI=your_mongodb_atlas_connection_string  UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url  UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token  NODE_ENV=development   `

Install dependencies and kickstart the development server:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install  npm run dev   `

_The backend server will run natively at http://localhost:5001._

### 4\. Frontend Environment Configuration

Open a secondary terminal window, head to the frontend/ directory, and tie the environment to your local API:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   cd ../frontend  touch .env   `

Add this line to frontend/.env:

Code snippet

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   VITE_API_BASE=http://localhost:5001/api   `

Install dependencies and run the Vite bundler:

Bash

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install  npm run dev   `

_Open your browser to http://localhost:5173 to interact with your local sandbox instance._

🚀 Deployment
-------------

### Backend (Node.js Host)

*   Ensure all critical production environmental values (MONGO\_URI, UPSTASH\_REDIS\_REST\_URL, UPSTASH\_REDIS\_REST\_TOKEN) are configured on your host dashboard (e.g., Render, Railway, DigitalOcean).
    
*   Set NODE\_ENV=production.
    
*   Clean install dependencies and run using npm ci and your chosen process manager (like PM2 or node src/server.js).
    

### Frontend (Static/CDN Host)

    
*   Bashnpm run build
    
*   Deploy the resulting highly optimized static output inside the frontend/dist directory to a frontend hosting partner (e.g., Vercel, Netlify, Render Static).