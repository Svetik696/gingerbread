function Drawer({onClose, Items = []}) {
  
    return (
        <div className='overLay'>
        <div className='drawer'> {/* ящик, корзина */}
      <h2 className='basket'>Корзина
        <img onClick={onClose} width={40} height={35} src='/public/img/remove.svg' alt='Крестик'></img>
      </h2>
      <p>Внимание! Товары в корзине это еще не заказ. 
        Чтобы их не раскупили, завершите оформление заказа.</p>


      {Items.map(({title, imageUrl, price}) => (
      <div className='cartItem'> 
          <img width={115} height={119} src={imageUrl}></img>
          <div className='cartItem-info'>
            <p>{title}</p>
            <b>{price} руб.</b>
          </div>
          <button>
            <img width={13} height={12} src='/public/img/cross.svg' alt='Крестик'></img>
          </button>
        </div> 
        ))}


        <div className='items'> {/* создаем блок, ИТОГО, сумма и кнопку оформить заказ */}
        <div className='cardTotalBlock'>
        <ul>
          <li><span>ИТОГО:</span></li>
          <div className='stipple'></div> {/* пунктирное подчеркивание */}
          <b>5 000 руб.</b>
        </ul>
        <div className='button-order'>{/* отдельный блок кнопки оформить заказ. по другому hover не работал */}
        <button>ОФОРМИТЬ ЗАКАЗ</button>
        </div>
      </div>
        </div>
      </div> 
    </div> 
    )
}
export default Drawer