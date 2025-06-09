export const layoutProps = {
  layout: {
    type: Array,
    required: true
  },
  responsiveLayouts: {
    type: Object,
    default() {
      return {}
    }
  },
  colNum: {
    type: Number,
    default: 12
  },
  rowHeight: {
    type: Number,
    default: 150
  },
  maxRows: {
    type: Number,
    default: Infinity
  },
  margin: {
    type: Array,
    default() {
      return [10, 10]
    }
  },
  isDraggable: {
    type: Boolean,
    default: true
  },
  isResizable: {
    type: Boolean,
    default: true
  },
  isMirrored: {
    type: Boolean,
    default: false
  },
  isBounded: {
    type: Boolean,
    default: false
  },
  // If true, the container height swells and contracts to fit contents
  autoSize: {
    type: Boolean,
    default: true
  },
  verticalCompact: {
    type: Boolean,
    default: true
  },
  restoreOnDrag: {
    type: Boolean,
    default: false
  },
  preventCollision: {
    type: Boolean,
    default: false
  },
  useCssTransforms: {
    type: Boolean,
    default: true
  },
  responsive: {
    type: Boolean,
    default: false
  },
  breakpoints: {
    type: Object,
    default() {
      return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }
    }
  },
  cols: {
    type: Object,
    default() {
      return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
    }
  },
  useStyleCursor: {
    type: Boolean,
    default: true
  },
  transformScale: {
    type: Number,
    default: 1
  }
}
