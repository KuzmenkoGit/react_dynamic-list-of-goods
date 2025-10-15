import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handlerAllGoods = () => {
    goodsAPI.getAll().then(g => setGoods(g));
  };

  const handlerFiveFirst = () => {
    goodsAPI.get5First().then(g => setGoods(g));
  };

  const handlerRedColorGoods = () => {
    goodsAPI.getRedGoods().then(g => setGoods(g));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handlerAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFiveFirst}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handlerRedColorGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
