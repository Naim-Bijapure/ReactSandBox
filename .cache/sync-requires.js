const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/pronoob/Desktop/SandBox/ReactSandBox/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/pronoob/Desktop/SandBox/ReactSandBox/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/pronoob/Desktop/SandBox/ReactSandBox/src/pages/index.js"))),
  "component---src-pages-n-page-js": hot(preferDefault(require("/home/pronoob/Desktop/SandBox/ReactSandBox/src/pages/nPage.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/pronoob/Desktop/SandBox/ReactSandBox/src/pages/page-2.js")))
}

