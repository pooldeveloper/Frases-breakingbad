import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Phrase from './components/Phrase';


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 3rem auto;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`

function App() {

  const ConsultAPI = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    setQuote(phrase[0])
  }

  const [Quote, setQuote] = useState({});

  useEffect(() => {
    ConsultAPI();
  }, [])

  return (
   <Container>
      <Phrase
        Quote = {Quote}
      />
      <Button
        onClick = {ConsultAPI}
      >
        Obtener Frase
      </Button>
   </Container>
  );
}

export default App;
