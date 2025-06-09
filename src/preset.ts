import * as components from './components'

import create from './create'

const Comp = create({
  components: Object.keys(components).map(key => components[key as keyof typeof components])
})

export default Comp

export const install = Comp.install
