import ReactDOM from 'react-dom';
import { setConfig } from 'react-hot-loader'

setConfig({
  // if our patch is present - ignore all SFC
  ignoreSFC: !!ReactDOM.setHotElementComparator,
  // set this flag to support SFC if patch is not landed
  pureSFC: true,
  // remove side effect on classes, to make react-dev-tools experience better(go-to-source)
  pureRender: true,
})