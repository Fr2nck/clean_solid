(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }   
    }

    class notificationService {

        sendEmail() {
            // Realiza una petición para enviar un correo a los clientes
            console.log('Enviando correo a los clientes');
        }
    }

    class CartBloc {

        AddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc    = new CartBloc();
    const notify      = new notificationService();


    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    // productBloc.notifyClients();
    // productBloc.onAddToCart(10);
    cartBloc.AddToCart(10);
    notify.sendEmail();

})();