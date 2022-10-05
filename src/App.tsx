import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Logo, Input, BurgerIcon, CloseIcon, CheckMarkIcon, CurrencyIcon, DragIcon, EditIcon, HideIcon, InfoIcon, ListIcon, LockIcon, LogoutIcon, ProfileIcon, ShowIcon, DeleteIcon, ArrowUpIcon, ArrowDownIcon, MenuIcon, ConstructorElement, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { BunComponents, MainComponents, SauceComponents, Modal } from './components/api';

function App() {
  const [current, setCurrent] = React.useState('one')
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="App App-header">

      <header className='header'>
        <div className='logo'>
          <Logo />
        </div>
        <nav className='header-navigation'>
          <div className="two-columns">
            <button className='header-btn w-hug h-hug mt-4 mb-4 ml-5 mr-2'>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default ml-2">
                Конструктор
              </p>
            </button>
            <button className='header-btn w-hug h-hug mt-4 mb-4 mr-5'>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </p>
            </button>
          </div>
          <button className='header-btn w-hug h-hug mt-4 mb-4 mr-2'>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </p>
          </button>
        </nav>
      </header>

      <div className='main two-columns'>

        <div className='burger-ingredients'>

          <h2 style={{ width: '600px', textAlign: 'start' }} className='text text_type_main-large mt-10'>Соберите бургер</h2>
          <div style={{ display: 'flex', alignItems: 'center', height: '56px' }} className='mt-5 tab h-hug'>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
              Начинки
            </Tab>
          </div>
          <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Булки</h3>
          <div className='burger-ingredients-card'>
            <BunComponents />
          </div>
          <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Соусы</h3>
          <div>
            <SauceComponents />
          </div>
          <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Начинки</h3>
          <div>
            <MainComponents />
          </div>

        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }} className='mt-25 ml-4 mr-4'>
          <div style={{ height: '80px' }} className='ml-8'>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center' }} className='mt-4'>
            <DragIcon type="primary" />
            <div className='ml-2'>
              <ConstructorElement
                text="Краторная булка N-200i (центр)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              /></div>
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center' }} className='mt-4'>
            <DragIcon type="primary" />
            <div className='ml-2'>
              <ConstructorElement
                text="Краторная булка N-200i (центр)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              /></div>
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center' }} className='mt-4'>
            <DragIcon type="primary" />
            <div className='ml-2'>
              <ConstructorElement
                text="Краторная булка N-200i (центр)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              /></div>
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center' }} className='mt-4'>
            <DragIcon type="primary" />
            <div className='ml-2'>
              <ConstructorElement
                text="Краторная булка N-200i (центр)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              /></div>
          </div>
          <div style={{ height: '80px', display: 'flex', alignItems: 'center' }} className='mt-4'>
            <DragIcon type="primary" />
            <div className='ml-2'>
              <ConstructorElement
                text="Краторная булка N-200i (центр)"
                price={50}
                thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
              /></div>
          </div>
          <div style={{ height: '80px' }} className='ml-8 mt-4'>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }} className='mt-10'>
            <p className='text text_type_digits-medium mr-2'>610</p>
            <CurrencyIcon type="primary" />
            <div className='ml-10'>
              <Button type="primary" size="large" htmlType='button' onClick={() => setModalActive(true)}>
                Оформить заказ
              </Button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}> </Modal>

          </div>
        </div>

      </div>

    </div>
  );
}


export default App;