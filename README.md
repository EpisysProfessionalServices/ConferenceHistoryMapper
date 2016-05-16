# Instructions for running the app

1. Install node.js
2. Import the wsdl from your own symXchange instance
  1. Right-click on the account service in SOAP UI
  2. Select "Export Definition"
  3. Copy the 5 generated files to the "symXwsdl" folder in the History Mapper project
3. In the base project folder run the command 'npm install', this will install the node modules
4. Update the server.js file with your symXchange settings
   - Please note that if you are using v2 of SymXchange the field properties are capitalized
5. Open a command window and navigate to the History Mapper folder
6. Type 'node server.js'
7. In a web browser navigate to http://localhost:3000