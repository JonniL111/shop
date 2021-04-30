import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addActiveFiter, deleteActiveFilter, setActiveFilters } from '../../../redux/action';
import { cleanLocalStore } from '../../../utils/localStore';
import { arrToObj, objToArr } from '../../../utils/utils';
import './filters.scss';

function Filters({ filters }) {
  const { activeFilter } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  let history = useHistory();

  //преобразуем значения формы в url
  //сохраняем фильтры в localStorage
  useEffect(() => {
    console.log(activeFilter);
    const arr = [];
    for (const item of activeFilter) { 
      const key = Object.keys(item)[0] 
      arr.push(`${key}:${item[key]}`);
      localStorage.setItem(key, item[key]);
    }
    history.push('?' + arr.join('&'));
  }, [activeFilter]);

  const onSubmit = (values) => {
    cleanLocalStore();
    dispatch(setActiveFilters(objToArr(values)));
  };

  //действие при клике по фильтру
  const onFilterChange = (e) => {
    if (e.target.type === 'select-one' || e.target.type === 'radio') {
      if (e.target.value) {
        dispatch(addActiveFiter({ key: [e.target.name], value: e.target.value }));        
      } else {
        dispatch(deleteActiveFilter({ key: [e.target.name] }));       
        localStorage.removeItem(e.target.name) 
      }
    }
  };

  //формируем списки значений для фильтров
  const arrayItems = (zn) => {
    if (!filters.filterList || !filters.filterList.length) return;
    const field = filters.filterList.find((item) => item[zn]);
    return field[zn].map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={arrToObj(activeFilter)}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onChange={onFilterChange} className="filter-form" onSubmit={handleSubmit}>
            <div className="filter-item-wrapper filter-item-select">
              <Field name="subject" component="select" className="filter-field filter__select">
                <option value={''}>Все предметы</option>
                {arrayItems('subject')}
              </Field>
            </div>
            <div className="filter-item-wrapper filter-item-select">
              <Field name="genre" component="select" className="filter-field filter__select">
                <option value={''}>Все жанры</option>
                {arrayItems('genre')}
              </Field>
            </div>
            <div className="filter-item-wrapper filter-item-select">
              <Field name="grade" component="select" className="filter-field filter__select">
                <option value={''}>Все классы</option>
                {Array(11)
                  .fill(0)
                  .map((_, idx) => (
                    <option key={idx} value={idx + 1}>
                      {idx + 1}
                    </option>
                  ))}
              </Field>
            </div>
            <div className="filter-item-wrapper filter-search-wrapper">
              <Field
                name="search"
                component="input"
                type="text"
                placeholder="Поиск по названию"
                className="filter-field filter__search"
              />
              <button className="filter__button" type="submit"></button>
            </div>

            <div className="fiter__radio">
              <div className="form_toggle-item item-1">
                <label>
                  <Field
                    className="fiter__radio-item"
                    name="payment"
                    component="input"
                    type="radio"
                    value="рубли"
                  />{' '}
                  <span>Рубли</span>
                </label>
              </div>
              <div className="form_toggle-item item-2">
                <label>
                  <Field
                    className="fiter__radio-item"
                    name="payment"
                    component="input"
                    type="radio"
                    value="бонусы"
                  />{' '}
                  <span>Бонусы</span>
                </label>
              </div>
            </div>
          </form>
        )}
      />
    </>
  );
}

export default Filters;
