import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer';


function App() {
  return (
    <div className='container'>
      <Header title='Galeria de imagenes con React'/>
      <div className='row'>
        <Card title='Pato' imagen='https://cdn.pixabay.com/photo/2023/01/12/05/32/duck-7713310_960_720.jpg' description='Pato es el nombre común para ciertas aves de la familia Anatidae, principalmente de la subfamilia Anatinae y dentro de ella del género Anas. No son un grupo monofilético, ya que no se incluyen los cisnes ni los gansos. La mayoría de las razas descienden del ánade real (Anas platyrhynchos), que fue domesticado en el sur de China. Son una fuente de alimentación particularmente importante en las zonas rurales de Asia, en especial en el Asia sudoriental.' />
        <Card title='Martin Pescador' imagen='https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg' description='El martín pescador común2​ o alción (Alcedo atthis) es una especie de ave coraciiforme de la familia Alcedinidae, que habita en lagos y ríos de Europa, África y Asia.' />
        <Card title='Colibri' imagen='https://cdn.pixabay.com/photo/2016/11/14/15/29/hummingbird-1823829_960_720.jpg' description='Colibri es un género de aves apodiformes pertenecientes a la subfamilia de los troquilinos (Trochilinae). El género agrupa a cinco especies con una distribución principalmente neotropical.' />
      </div>
      <button type="button" class="btn btn-info d-grid gap-2 col mx-auto">Ver más imagenes</button>
      <Footer/>
    </div>
  );
}

export default App;
