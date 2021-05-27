import React, { Component } from 'react';
import './App.scss';   //引入当前文件scss
import Home from './pages/home';
interface Props {

}
interface State {
  list: string,
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      list: 'hello world!!!'
    }
  }
  render() {
    return (
　　　　　<Home/>
    );
  }
}
export default App;