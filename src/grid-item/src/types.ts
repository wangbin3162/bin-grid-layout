export const ItemProps = {
  i: {
    type: [String, Number],
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  w: {
    type: Number,
    required: true
  },
  h: {
    type: Number,
    required: true
  },
  minW: {
    type: Number,
    required: false,
    default: 1
  },
  minH: {
    type: Number,
    required: false,
    default: 1
  },
  maxW: {
    type: Number,
    required: false,
    default: Infinity
  },
  maxH: {
    type: Number,
    required: false,
    default: Infinity
  },
  isDraggable: {
    type: Boolean,
    required: false,
    default: null
  },
  isResizable: {
    type: Boolean,
    required: false,
    default: null
  },
  isBounded: {
    type: Boolean,
    required: false,
    default: null
  },
  static: {
    type: Boolean,
    required: false,
    default: false
  },
  dragIgnoreFrom: {
    type: String,
    required: false,
    default: 'a, button'
  },
  dragAllowFrom: {
    type: String,
    required: false,
    default: null
  },
  resizeIgnoreFrom: {
    type: String,
    required: false,
    default: 'a, button'
  },
  preserveAspectRatio: {
    type: Boolean,
    required: false,
    default: false
  },
  dragOption: {
    type: Object,
    required: false,
    default: () => ({})
  },
  resizeOption: {
    type: Object,
    required: false,
    default: () => ({})
  }
}
