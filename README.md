![](https://i.loli.net/2019/10/19/GoCsW8DTxgXB2Jr.png)

## 后台系统

安装依赖

```console

cnpm i --save antd-mobile

```

按需打包

```console

cnpm i --save-dev babel-plugin-import react-app-rewired

```

根目录创建 `config-overrides.js`

```js
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = (config, env)=> {
  config = injectBabelPlugin([
    'import', {
      libraryName: 'antd-mobile',
      style: 'css'
    }
  ])
  return config
}

```

引入 `redux`

```console

cnpm i --save redux@3.7.2 react-redux redux-thunk
cnpm i -D redux-devtools-extension

```

路由跳转功能

```jsx

export default class extends React.Component {

  dev = ()=> {
    this.props.history.replace('/login')
  }

  render() {
    return (
      <button onClick={ this.dev } >click</button>
    )
  }
}

```

现在创建一个后端文件夹: `server`, 采用前后端分离的方式来构建