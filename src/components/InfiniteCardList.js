import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useObserver } from '../hook/useObserver';
import { fetchCardData } from '../utils/fetches';
import Card from './Card';
import { API } from '../config';

const InfiniteCardList = () => {
  const [targetState, setTargetState] = useState(null);
  const target = useRef(targetState);
  const isIntersecting = useObserver(target);
  const [page, setPage] = useState(1);
  const [cardData, setCardData] = useState([]);
  const [stopFetch, setStopFetch] = useState(false);

  useEffect(() => {
    if (stopFetch) return;
    if (isIntersecting) setPage((page) => page + 1);
  }, [isIntersecting, stopFetch]);

  useEffect(async () => {
    const newCardData = await fetchCardData(
      `${API}/comments?_page=${page}&_limit=10`,
    );
    if (newCardData.length === 0) setStopFetch(true);
    setCardData((card) => [...card, ...newCardData]);
  }, [page]);

  const cardItems = cardData?.map((card) => (
    <Card key={card.id} content={card} />
  ));

  useEffect(() => {
    setTargetState(true);
  }, [cardItems]);

  return (
    <CardListWrapper>
      {cardItems ? cardItems : 'Loading...'}
      <Observer className="test" ref={target} />
    </CardListWrapper>
  );
};

export default InfiniteCardList;
const Observer = styled.div`
  height: 5px;
`;
const CardListWrapper = styled.div`
  margin: 30px auto;
  width: 500px;
`;
