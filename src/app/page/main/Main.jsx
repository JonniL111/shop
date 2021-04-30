import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { CardList } from '../../components/cardList';
import { Filters } from '../../components/filters';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { fetchGoods, clearActiveFilter, setActiveFilters, getSortGoods } from '../../redux/action';
import { filter } from '../../utils/filter';
import { cleanLocalStore } from '../../utils/localStore';
import './main.scss';

function Main() {
  const location = useLocation();
  const dispatch = useDispatch();

  const { goods, filters } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);
  //Достаем ключи для url из localStorage
  useEffect(() => {
    let arr = [];
    let keys = Object.keys(localStorage);
    console.log(keys);
    for (let key of keys) {
      if (key === 'payment' || key === 'subject' || key === 'genre' || key === 'grade') {
        arr.push({ [key]: localStorage.getItem(key) });
      }
    }
    dispatch(setActiveFilters(arr));
  }, [goods.items]);

  //фильтруем данные согласно фильтрам из store
  useEffect(() => {
    const { activeFilter } = filters;
    if (!goods.items.length || !activeFilter.length) return;
    dispatch(getSortGoods(filter({ goods, activeFilter })));
  }, [filters.activeFilter]);

  useEffect(() => {
    //получаем фильтра из url
    if (!location.search) {
      cleanLocalStore();
      dispatch(clearActiveFilter);
      return;
    }
  }, [location.search]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <h2 className="page-title">Витрина</h2>
          <section className="filter">
            <Filters {...{ filters }} />
          </section>
          <CardList {...{ goods, filters }} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
