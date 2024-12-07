import React from 'react';

// import { Container } from './styles';

function Cards({ bgColor, title, text1, text2, text3, text4, text5 }) {
  return (
    <div
      className="d-flex flex-column rounded-5 p-3"
      style={{ background: bgColor, width: '250px', height: '250px' }}
    >
      <h2 className="text-white fw-bold text-center">{title}</h2>
      <div className="d-flex gap-1 align-items-center">
        <svg
          style={{ color: 'white', width: '30px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h5 className="text-white fw-bold">{text1}</h5>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <svg
          style={{ color: 'white', width: '30px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h5 className="text-white fw-bold">{text2}</h5>
      </div>

      <div className="d-flex gap-1 align-items-center">
        <svg
          style={{ color: 'white', width: '30px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h5 className="text-white fw-bold">{text3}</h5>
      </div>

      <div className="d-flex gap-1 align-items-center">
        <svg
          style={{ color: 'white', width: '30px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h5 className="text-white fw-bold">{text4}</h5>
      </div>

      <div className="d-flex gap-1 align-items-center">
        <svg
          style={{ color: 'white', width: '30px' }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h5 className="text-white fw-bold">{text5}</h5>
      </div>
    </div>
  );
}

export default Cards;
