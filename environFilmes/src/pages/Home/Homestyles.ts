import styled from 'styled-components'

export const HomeContainer = styled.div `
  display: flex;
  width: 100vw;
  height: 10vh;
  margin-top: 2rem;
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div { 
    display: flex;
    gap: 10px;

   select, input {
      background: ${(props) => props.theme['gray-600']};
      opacity: 0.8;
      color: white;
      font-size: 14px;

   }

   .form-control::placeholder { /* Internet Explorer 10-11 */
     color: white;
   }
  }
`
export const Content = styled.div `
  /* background-color: ${(props) => props.theme['gray-900']}; */
  position: absolute;
  width: 100%;

 div > video{
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    z-index: -1;
    opacity: 0.7;
    border: none;
  }
`
export const InfoContainer = styled.main `
  display: flex;
  width: 100%;
  margin-left: 2.5rem;
  gap: 1rem;
  justify-content: center;
  position: relative;
  margin-top: 5rem;
`


export const MenuMovies = styled.div`
margin-top: -60px;
margin-left: 2rem;
margin-right: 2rem;
margin-top: 3rem;
width: 100vw;
height: 100vh;
padding: 1rem;

h1{
  color: ${(props) => props.theme['gray-600']};
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
}

strong {
  color: ${(props) => props.theme['white']};
  margin-left: 40px;
}

.movies-carousel {
  padding: 1rem;
  display: flex;
  width: 100%;
  gap: 2rem;
  position: relative;
}
`
export const ListMoviesContainer = styled.div`
padding: 1rem;
display: flex;
width: 100%;
gap: 2rem;
position: relative;
/* overflow-x: scroll;
overflow-y:hidden;
scroll-behavior: smooth; */

`



