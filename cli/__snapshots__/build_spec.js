exports['package.json build outputs expected engines property 1'] = {
  "name": "test",
  "engines": "test engines",
  "version": "2.0.3",
  "description": "Cypress.io end to end testing tool",
  "author": "Brian Mann",
  "homepage": "https://github.com/cypress-io/cypress",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/cypress-io/cypress/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/cypress-io/cypress.git"
  },
  "types": "types",
  "scripts": {
    "postinstall": "node index.js --exec install",
    "size": "t=\"$(npm pack .)\"; wc -c \"${t}\"; tar tvf \"${t}\"; rm \"${t}\";"
  }
}
