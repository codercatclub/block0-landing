const THREE = AFRAME.THREE;

export default {
  schema: {
    cellWidth: { type: "number", default: 2.5 },
    cellHeight: { type: "number", default: 2.5 },
    rows: { type: "number", default: 2 },
    cols: { type: "number", default: 4 },
  },

  init: function () {
    let mql = window.matchMedia('(max-width: 768px)');

    if (mql.matches) {
      this.data.rows = 4;
      this.data.cols = 2;
      this.data.cellWidth = 3;
      this.data.cellHeight = 3;
    }
  },

  update: function () {
    const children = Array.from(this.el.children);
    const { rows, cols, cellWidth, cellHeight } = this.data;

    const width = cellWidth * cols;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (children.length > 0) {
          const el = children.shift();
          el.setAttribute(
            "position",
            `${cellWidth * j - (width - cellWidth) / 2} ${cellHeight * -i} 0`
          );
        }
      }
    }
  }
};
