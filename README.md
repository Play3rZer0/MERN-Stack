This is an application created using the MERN stack.
To install follow these instructions:

1. Create your project folder
2. Clone this repo
3. From your main project folder run "npm run build"

This will install the dependencies for the backend and frontend of the
application.

You need to create a .env file.

You need to set the environment variables for:

Mongo_URI=
PORT=

Once cloned and installed, run the following from the main
project folder:

"npm run start"

When running from Windows, using PowerShell, there are issues
encountered when using the script.

Make modifications in the package.json "scripts" section.

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "powershell.exe -Command \"$env:NODE_ENV='production'; node backend/server.js\"",
    "dev": "powershell.exe -Command \"$env:NODE_ENV='development'; nodemon backend/server.js\"",
"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}
