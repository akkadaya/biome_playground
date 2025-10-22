import Reactotron, { networking } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({ name: 'biome_playground' })
  .use(reactotronRedux())
  .use(networking())
  .useReactNative({ overlay: true })
  .connect()

export default reactotron
