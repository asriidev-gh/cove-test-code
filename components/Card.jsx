import React from 'react';

const Card = ({ title, text, ...props }) => {
  const { target, linkTitle, href, rel, onClick, linkClassName } = props;
  console.log('title: ', linkTitle);
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__text">{text}</div>
      <a
        className={`default-link card__link ${linkClassName}`}
        target={target}
        rel={rel}
        href={href}
        onClick={onClick}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
