import React from 'react'

const Container = ({ children, hero }) => {
    return <header className={hero}>{children}</header>;
  };
  
  export default Container;
  
  Container.defaultProps = {
    hero: "defaultHero"
  };
