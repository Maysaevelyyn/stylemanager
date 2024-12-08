import React from 'react';

// import { Container } from './styles';

function CardBasico({ title, body, colorTitle }) {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <h2 class={`text-${colorTitle}`}>{`${body}`}</h2>
        </div>
      </div>
    </>
  );
}

export default CardBasico;
