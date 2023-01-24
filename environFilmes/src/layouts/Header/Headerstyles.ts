import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display:flex;
  position:fixed;
  justify-content: space-between;
  top:0;
  left:0;
  width:100%;
  background:white;
  text-align:center;
  padding: 20px -1;
  background: ${(props) => props.theme['purple-dark']};
  z-index: 1;

  a > img{
    margin-left: 1rem;
    margin-top: 10px;
    height: 2rem;
  }

  span > img{
    height: 2.5rem;
    background: red;
    border: 2px solid white;
    border-radius: 50%;
  }
`


export const LocationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: px;
margin-right: 5rem;
a{
  text-decoration: none;
  padding: 4px;
  border-radius: 5px;
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Courier New', Courier, monospace;
}

nav {
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['white']};
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: -15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.600rem;
}

/* a::before{
  content:'';
  height: 15px;
  width: 15px;
  background: red;
  position: absolute;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: -10px;
} */


span{
  font-family:  'Roboto', sans-serif;
  font-weight: 400;
}




`

export const Location = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
width: 9rem;
height: 2rem;
border-radius: 5px;;
background: ${(props) => props.theme["gray-20"]};
color: ${(props) => props.theme['purple']};

a {
}

`