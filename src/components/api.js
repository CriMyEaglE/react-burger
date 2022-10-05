import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import ShowAboutIngredient from "./ShowAboutIngredient";

export const Modal = ({ active, setActive, children }) => {
   return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
         <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

class MyComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         items: [],
         showAboutIngredient: false
      };
      
      this.showAboutIngredient = this.showAboutIngredient.bind(this)
   }

   componentDidMount() {
      fetch("https://norma.nomoreparties.space/api/ingredients")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  error: null,
                  isLoaded: true,
                  items: result.data
               });
            },
            (error) => {
               this.setState({
                  isLoaded: true,
                  error
               });
            }
         )
   }

   showAboutIngredient() {
      this.setState({showAboutIngredient: !this.state.showAboutIngredient})
   }

}

export class BunComponents extends MyComponent {
   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
         return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Загрузка...</div>;
      } else {
         return (
            <div style={{ display: 'flex', alignItems: 'space-between', flexWrap: 'wrap' }}>
               {items.filter(item => item.type === 'bun').map(item => (
                  <div key={item.name} className='ml-4 mt-6'>
                     <img src={item.image} className='ml-4' ></img>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mt-1'><span className="mr-2 text text_type_digits-default">{item.price}</span>  <CurrencyIcon type="primary" /></div>
                     <h3 style={{}} className="text text_type_main-default mt-1 h-fill w-fill">{item.name}</h3>
                  </div>
               ))}
               {this.state.showAboutIngredient && <ShowAboutIngredient/>}
            </div>
         );
      }
   }
}

export class MainComponents extends MyComponent {
   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
         return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Загрузка...</div>;
      } else {
         return (
            <div style={{ display: 'flex', alignItems: 'space-between', flexWrap: 'wrap' }}>
               {items.filter(item => item.type === 'main').map(item => (
                  <div key={item.name} className='ml-4 mt-6'>
                     <img src={item.image} className='ml-4'></img>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mt-1'><span className="mr-2 text text_type_digits-default">{item.price}</span>  <CurrencyIcon type="primary" /></div>
                     <h3 style={{}} className="text text_type_main-default mt-1 h-fill w-fill">{item.name}</h3>
                  </div>
               ))}
            </div>
         );
      }
   }
}

export class SauceComponents extends MyComponent {
   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
         return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Загрузка...</div>;
      } else {
         return (
            <div style={{ display: 'flex', alignItems: 'space-between', flexWrap: 'wrap' }}>
               {items.filter(item => item.type === 'sauce').map(item => (
                  <div key={item.name} className='ml-4 mt-6'>
                     <img src={item.image} className='ml-4'></img>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mt-1'><span className="mr-2 text text_type_digits-default">{item.price}</span>  <CurrencyIcon type="primary" /></div>
                     <h3 style={{}} className="text text_type_main-default mt-1 h-fill w-fill">{item.name}</h3>
                  </div>
               ))}
            </div>
         );
      }
   }
}