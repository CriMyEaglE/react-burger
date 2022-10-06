import React, { useState, setActive } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";

export const Modal = ({ active, setActive, children }) => {
   return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
         <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}