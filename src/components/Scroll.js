const THREE = AFRAME.THREE;

export default {
  schema: {

  },

  init: function () {
    const obj = this.el.object3D;
    const initPosY = obj.position.y;
    this.totalTravel = -40;
    this.totalScroll = 5000;
    window.scrollTo(0, 0);

    this.pageY = 0;

this.curve = new THREE.SplineCurve( [new THREE.Vector2(0,0),new THREE.Vector2(0.1488095238095238,0.052332195676905724),new THREE.Vector2(0.2540922619047619,0.30432309442548355),new THREE.Vector2(0.5,0.5),new THREE.Vector2(0.6666666666666667,0.6666666666666667),new THREE.Vector2(0.8333333333333333,0.8333333333333333),new THREE.Vector2(1,1)] )
    document.addEventListener("wheel", (e) => {

      this.pageY += parseInt(e.deltaY);
      this.pageY = Math.max(this.pageY, 0);

      // our animation runs from 500 - 2000? scaled by screen? 
      let t = Math.max(this.pageY, 0)/this.totalScroll;
      let finalY = 0
      if(t <= 1) {
        finalY = this.totalTravel*this.curve.getPointAt(t).y;
      } else {
        //we have passed animation apply constant curve
        finalY = this.totalTravel + -33*(t - 1);
      }
      obj.position.set(obj.position.x, finalY + initPosY, obj.position.z);
      return false;
    });
  },
  
  tick: function (time) {
    
  },
};
