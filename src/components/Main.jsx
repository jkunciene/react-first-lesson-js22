import ProductsList from "./productslist/ProductsList";
//1-ka importuoju -> react KOMPONENTA 
//2-from -> is kur importuoju katalogas failas
// <-  nerasyti ranka, o parinkti is to meta 
// ./ ieskau tame paciame kataloge
// ../ pakylu vienu leveliu auksciau - vienu katalogu aukstyn
// ../../ pakylu dviem katalogais aukstyn



const Main = () => {
  return (
    <div>
        <ProductsList/>
    </div>
  )
}

export default Main