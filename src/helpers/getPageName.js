/**
 * set page name based on current path
 **/
export function getPageName(path) {
  let pageName;
  switch (path) {
    case "/":
      pageName = "home";
      break;
    case "/about":
      pageName = "about";
      break;
    case "/services":
      pageName = "services";
      break;
    case "/contact":
      pageName = "contact";
      break;
  }
  return pageName;
}
