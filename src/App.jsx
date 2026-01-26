import './App.css'
import './components/Card/StylesCard.css'
import './components/Drawer/StylesDrawer.css'
import './components/Header/StylesHeader.css'
import './components/Background/StylesBackground.css'
import Card from './components/Card/index.jsx'
import Header from './components/Header/index.jsx'
import Drawer from './components/Drawer/index.jsx'
import Background from './components/Background/index.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'


// const Arr = [
//   {id:1, title: 'Имбирные пряники на торжество', price: 2000, imageUrl: '/public/img/celebration.png'},
//   {id:2, title: 'Имбирный пряник "Домовой"', price: 3000, imageUrl: '/public/img/goblin.png'},
//   {id:3, title: 'Имбирный пряник "Снегурочка"', price: 1000, imageUrl: '/public/img/snowmaiden.png'},
//   {id:4, title: 'Имбирный пряник "Мишка с цветами"', price: 2000, imageUrl: '/public/img/teddyflowers.png'},
//   {id:5, title: 'Имбирный пряник "Куколка LOL"', price: 500, imageUrl: '/public/img/doll.png'},
//   {id:6, title: 'Имбирный пряник "1 сентября"', price: 1000, imageUrl: '/public/img/september1st.png'},
//   {id:7, title: 'Имбирный пряник "Мишка с букетом"', price: 1200, imageUrl: '/public/img/teddybouquet.png'},
//   {id:8, title: 'Имбирный пряник "Книга 3D"', price: 5000, imageUrl: '/public/img/book.png'}
// ]

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)


  useEffect(() => {
    fetch('https://696f3d2aa06046ce6185cabf.mockapi.io/Gingerbread/api/v1/items', {method: "get"})
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      setItems(json);
    });
    fetch('https://696f3d2aa06046ce6185cabf.mockapi.io/Gingerbread/api/v1/cart', {method: "get"})
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      setCartItems(json);
    });
});

  const onAddToCart = ({id, imageUrl, title, price}) => {
    axios.post('https://696f3d2aa06046ce6185cabf.mockapi.io/Gingerbread/api/v1/cart', {id, imageUrl, title, price});
    setCartItems((prev) => [...prev, {id, imageUrl, title, price}]);
  };
  
  return (
    <div className='wrapper'> {/* обертка */}
     
      {cartOpened ? <Drawer Items={cartItems} onClose={() => setCartOpened(false)}/> : null}
      <Header onClickCart={() => setCartOpened(true)}/>

      <Background />

      <div className='content'> {/* основное содержание страницы, где весь товар */}
        <div className='content-info'> {/* создаем часть, в которой будет строка Новинки и поисковая строка */}
        <h1 className='new-products'>Новинки</h1>
        <div className='search-block'> {/* создаем блок поиска */}
          {/*<img src='/public/img/magnifier.svg' alt='Поиск'></img>*/} {/* вставляем лупу */}
          <input placeholder='Поиск...'></input> {/* input-опрделяем поле для ввода информации пользователем. создаем поисковый блок */}
        </div>
        </div>
      <div className='product'>

    {items.map(({id, title, price, imageUrl}) => (
      <Card 
      key={id}
      title={title}
      price={price}
      imageUrl={imageUrl}
      onPlus={onAddToCart}
      onFavorite={() => console.log('Товар добавлен в "Избранное"')}
      />
      ))} 

      </div>
      </div>
    </div>
  )
}

export default App

