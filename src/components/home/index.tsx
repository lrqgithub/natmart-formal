import React, { Component } from 'react';
import './home.scss';   //引入当前文件scss
import i18n from '../../i18n';
import Language from '../switchLanguage/index';

interface Props {

}
interface State {
  list: string,
}

const Home = () => {
  

    return (
　　　　　　<div className="content">
              <Language/>
　　　　　　　　<div className="btn">{i18n.t("text")}</div>
　　　　　　</div>

    );
  
};

export default Home;
