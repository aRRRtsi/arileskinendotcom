import styled from 'styled-components';

export default function About() {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

  return (
    <div className='description'>
      <div className='title'>
        <div className='hide'>
          <h1>arileskinen.com</h1>
        </div>
        <div className='hide'>
          <h2>
            Father, <span>Fullstack Neveloper</span>, Dreamer
          </h2>
        </div>
        <div className='hide'>
          <h2>Photographer, Graphic designer</h2>
        </div>
        <div className='hide'>
          <Button> test </Button>
        </div>
      </div>
    </div>
  );
}
