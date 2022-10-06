import React, { useEffect, useState } from "react";
import { CloseIcon, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "./modal";

function Ingredients() {

   const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

   const [ingData, setData] = useState([{
      _id: '',
      name: '',
      type: '',
      proteins: '',
      fat: '',
      carbohydrates: '',
      calories: '',
      price: '',
      image: '',
      image_mobile: '',
      image_large: '',
      itemIndex: ''
   }]);

   const [modalActive, setModalActive] = useState(false)
   const [ingredientImage, setIngredientImage] = useState('')
   const [ingredientName, setIngredientName] = useState('')
   const [ingredientCalories, setIngredientCalories] = useState('')
   const [ingredientProtein, setIngredientProtein] = useState('')
   const [ingredientFat, setIngredientFat] = useState('')
   const [ingredientCarbo, setIngredientCarbo] = useState('')

   useEffect(() => {
      fetch(baseUrl)
         .then(response => response.json())
         .then(json => setData(json.data))
   }, [])

   return (
      <div>
         <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Булки</h3>
         <div className='burger-ingredients-card'>
            {renderIngredientsByType('bun')}
         </div>
         <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Соусы</h3>
         <div>
            {renderIngredientsByType('sauce')}
         </div>
         <h3 style={{ textAlign: 'left', width: '600px', fontSize: '24px' }} className='text text_type_main-default mt-10'>Начинки</h3>
         <div>
            {renderIngredientsByType('main')}
         </div>
      </div>
   )

   function renderIngredientsByType(type = '') {
      return (
         <div style={{ display: 'flex', alignItems: 'space-between', flexWrap: 'wrap' }}>
            {ingData.filter(item => item.type === type).map((item, index) => (
               <div key={item.name} className='ml-4 mt-6 card'>
                  <img style={{ cursor: 'pointer' }} src={item.image} className='ml-4' onClick={(e) => {
                     const currenIngredient = ingData.filter(item => item.image === e.currentTarget.src);
                     setModalActive(true);
                     setIngredientImage(currenIngredient[0].image_large)
                     setIngredientName(currenIngredient[0].name)
                     setIngredientCalories(currenIngredient[0].calories)
                     setIngredientProtein(currenIngredient[0].proteins)
                     setIngredientFat(currenIngredient[0].fat)
                     setIngredientCarbo(currenIngredient[0].carbohydrates)
                  }}></img>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='mt-1'><span className="mr-2 text text_type_digits-default">{item.price}</span>  <CurrencyIcon type="primary" /></div>
                  <h3 style={{}} className="text text_type_main-default mt-1 h-fill w-fill">{item.name}</h3>

               </div>
            ))}
            <IngredientModal />
         </div>
      )
   }

   function IngredientModal() {
      return (
         <Modal active={modalActive} setActive={setModalActive}>
            <div className="close-button" onClick={() => setModalActive(false)}>
               <CloseIcon type="primary" />
            </div>
            <h2 style={{ textAlign: 'start' }} className="text text_type_main-large mr-10 ml-10 mt-10">Детали ингредиента</h2>
            <img src={ingredientImage}></img>
            <h3 className="text text_type_main-medium mt-4 mb-8">{ingredientName}</h3>
            <div className="mb-15 nutrients">
               <div>
                  <p className="text text_type_main-default text_color_inactive nutrients-item">Калории, ккал</p>
                  <p className="text text_type_digits-default text_color_inactive nutrients-item">{ingredientCalories}</p>
               </div>

               <div className="ml-5">
                  <p className="text text_type_main-default text_color_inactive nutrients-item">Белки, г</p>
                  <p className="text text_type_digits-default text_color_inactive nutrients-item">{ingredientProtein}</p>
               </div>

               <div className="ml-5">
                  <p className="text text_type_main-default text_color_inactive nutrients-item">Жиры, г</p>
                  <p className="text text_type_digits-default text_color_inactive nutrients-item">{ingredientFat}</p>
               </div>

               <div className="ml-5">
                  <p className="text text_type_main-default text_color_inactive nutrients-item">Углеводы, г</p>
                  <p className="text text_type_digits-default text_color_inactive nutrients-item">{ingredientCarbo}</p>
               </div>
            </div>
         </Modal>
      )
   }
}

export default Ingredients;