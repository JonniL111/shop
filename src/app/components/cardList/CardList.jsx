import React, { useEffect, useState } from 'react';
import { Card } from './card';
import './cardList.scss';

function CardList({ goods, filters: { activeFilter } }) {
  const [payment, setPayment] = useState({ payment: 'рубли' });
  //берем выбранную валюту
  useEffect(() => {
    if (!activeFilter.length) return;
    const pay = activeFilter.find((item) => item.payment);
    if (pay) setPayment(pay);
  }, [activeFilter]);

  const listProducts = goods.sortGoods.length ? (
    goods.sortGoods.map((item) => <Card key={item.courseId} data={item} pay={payment} />)
  ) : (
    <div className="empty">Курсы не найдены</div>
  );

  return <div className="cards-list">{listProducts}</div>;
}

export default CardList;
