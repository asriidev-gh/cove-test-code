import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import callApi from '../utils/api';
const Page = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    callApi().then((result) => {
      let newData = [];
      console.log('result: ', result);
      if (result) {
        console.log('result2: ', result);
        result.forEach((item) => {
          console.log('result0: ', item.id);
          newData = [
            ...newData,
            {
              id: item.id,
              title: item.title,
              link_title: item.link_title,
              text: item.body?.en.substr(0, 50) + '...',
            },
          ];
        });
        setCards(newData);
      }
    });
  }, []);

  const onAnalyticsTrackClick = (url) => {
    // sending clicked link url to analytics
    console.log(url);
  };

  return (
    <div>
      {cards &&
        cards.map(function (item) {
          return (
            <Card
              title={item.title.en}
              linkTitle={item.link_title}
              href={item.link}
              text={item.text}
              linkClassName={item.id == 1 ? 'card__link--red' : ''}
              target={item.id == 1 ? '_blank' : ''}
              onClick={onAnalyticsTrackClick(item.link)}
            />
          );
        })}
    </div>
  );
};

export default Page;
