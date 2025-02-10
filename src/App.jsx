
import './App.css'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <div>
     
      <ProductCard name="JBL mini3" price="3250/-"
      description ="this product is good"
      photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQohjiYZfl8iHWpol0pnwrpqMwLbQzBfDLPw&s"
      />

      <ProductCard name ="JBL" price ="4750/-"
      description = "this is a jbl product"
      photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5zwgheO1XpkeVFTwqTxilMGDpiQ95QBwRw&s"
      />

      <ProductCard name = "JBL speaker" price = "2750/-"
      description = "this is a jbl mini speaker"
      photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSprFv44U0fULz8gXh1UrspLlQpqWrpQlrA&s"
      />
    </div>

  )
}

export default App
