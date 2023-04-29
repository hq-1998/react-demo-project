import { get } from '@renderer/request'
import { IData } from './data'

const Test = {
  getData: () => {
    return get<IData[]>('http://jsonplaceholder.typicode.com/posts')
  }
}

export default Test
