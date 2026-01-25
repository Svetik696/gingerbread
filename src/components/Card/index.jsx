import { useState } from 'react';

function Card({imageUrl, title, price, onPlus}) { 

    const [isAdded, setIsAdded] = useState(false);

    const onClick = () => {
      onPlus({imageUrl, title, price});
      setIsAdded(!isAdded);
    }

  // const onPlus = () => {
  //   alert('Товар добавлен в корзину!')
  // }

  const onFavorite = () => {
    alert('Товар добавлен в "Избранное"')
  }

    return (
         <div className='card'> {/* работаем над карточками товара */}
        <div className='favourite' onClick={onFavorite}>
        <img src='/public/img/btn-unliked.svg' alt='Избранное'></img>
        </div>
      <img src={imageUrl}></img>
      <p>{title}</p> {/* задаем параграф */}
      <div className='cardBottom'> {/* информация о нижней части карточки товара где цена и кликабельная кнопка */}
        <div className='info-cost-price'>
          <span>ЦЕНА:</span> {/* выделяем отдельную строку Цена */}
          <b>{price} руб.</b> {/* данный тег испл.для выделения текста жирным шрифтом, однако он не несет семантической нагрузки */}
        </div>
          <img className='plus' onClick={onClick} width={40} height={35} 
          src={isAdded ? '/public/img/btn-checked.svg' : '/public/img/btn-plus.svg'}></img>
      
      </div>
      </div>
    )
}
export default Card