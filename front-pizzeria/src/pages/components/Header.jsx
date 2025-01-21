import HeaderImg from '../../img/HeaderImg.jpg';

function Header() {

    return (
      <> 
      <div
          className="bg-cover bg-center h-96 flex items-center justify-center"
          style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeaderImg})`}}
        >     
        <div className='text-white border-b-2 border-white text-center'>
          <h1 className='text-3xl font-normal'>¡Pizzería Mamma Mía!</h1>
          <p className='font-thin'>¡Tenemos las mejores pizzas que puedes encontrar!</p>
        </div>
        </div>
      </>
    )
  }
  
  export default Header
  