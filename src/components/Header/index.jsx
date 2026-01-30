function Header(props) {
    return (
        <header> {/* заголовок */}
        <div className='headerLeft'> {/* где логотип, название и текст */}
        <img width={40} height={40} src='/public/img/logo1.png'></img>
        <div className='headerInfo'> {/* инфрмация о div, главной информации левой части хэдера */}
          <h3>ИМБИРНЫЙ ПРЯНЯ</h3> {/* наименование интернет-магазина */}
          <p>Мастерская по созданию пряников</p> {/* текст */}
        </div>
        </div>
        <ul className='headetRight'> {/* правая часть, где избранное, корзина и профиль покупателя */}
          <li onClick={props.onClickCart}><img width={18} height={18} src='/public/img/basket.svg'></img><span>5000 руб.</span></li>
          <li><img width={18} height={18} src='/public/img/favourites.svg'></img><span>Избранное</span></li>
          <li><img width={18} height={18} src='/public/img/profile.svg'></img><span>Профиль</span></li>
        </ul>
      </header>
    )
}
export default Header
