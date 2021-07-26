import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchCardData } from '../utils/fetches';
import Card from './Card';

const CardList = () => {
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState('');

  useEffect(async () => {
    const cards = await fetchCardData(
      `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`,
    );
    setCardData(cards);
  }, [page]);

  const cardItems =
    cardData && cardData.map((card) => <Card key={card.id} content={card} />);

  return <CardListWrapper>{cardData ? cardItems : 'Loading'}</CardListWrapper>;
};

export default CardList;

const CardListWrapper = styled.div`
  margin: 30px auto;
  width: 500px;
`;
