/**
 * react-waypoint handleOnEnter event handler
 **/
export function handleOnEnter(id) {
  const hiddenContent = document.getElementById(id);
  hiddenContent.classList.add("content-appear");
}
