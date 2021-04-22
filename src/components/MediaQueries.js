const THREE = AFRAME.THREE;

export default {
  schema: {},

  init: function () {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const camera = document.querySelector('#camera');
    const character = document.querySelector('#char');
    const title = document.querySelector('#title-dumy');
    const avatarGroup = document.querySelector('#avatar-group');

    function handleMobileChange(e) {
      if (e.matches) {
        camera.setAttribute("position", "0 5.3 25")
        character.setAttribute("scale", "1.7 1.7 1.7")
        title.setAttribute("position", "0 13 0")
        avatarGroup.setAttribute("position", "0 -31 0")
      }
    }
    
    function handleDesktopChange(e) {
      if (e.matches) {
        camera.setAttribute("position", "0 5.3 15")
        character.setAttribute("scale", "1 1 1")
        title.setAttribute("position", "0 10 0")
        avatarGroup.setAttribute("position", "0 -29 0")
      }
    }

    // Register event listener
    mobileQuery.addEventListener("change", handleMobileChange);
    desktopQuery.addEventListener("change", handleDesktopChange);

    // Initial check
    handleMobileChange(mobileQuery);
    handleDesktopChange(desktopQuery);
  },

  tick: function (time) {},
};
