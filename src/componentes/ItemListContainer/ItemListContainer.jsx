import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams();

    const getProductsDB = (category) => {
        let myProducts = collection(db, "products");

        // Si se proporciona una categoría, agregamos un filtro a la consulta
        if (category) {
            myProducts = query(myProducts, where("category", "==", category));
        }

        getDocs(myProducts)
            .then((querySnapshot) => {
                const productList = [];
                querySnapshot.forEach((doc) => {
                    productList.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                setProducts(productList);
                setIsLoading(false); // Ahora que hemos cargado los productos, actualizamos el estado isLoading a false
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setIsLoading(false); // En caso de error, también actualizamos el estado isLoading a false
            });
    };

    useEffect(() => {
        setIsLoading(true);
        getProductsDB(category); // Pasamos la categoría al llamar a la función getProductsDB
    }, [category]);

    return (
        <>
            {isLoading ? <h2>Cargando productos...</h2> : <ItemList products={products} />}
        </>
    );
};

export default ItemListContainer;
