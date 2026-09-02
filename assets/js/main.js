/**
 * Aplicación de un patrón de diseño: Module Pattern (Patrón Módulo)
 * 
 * Se solicitó aplicar un patrón de diseño. El Module Pattern nos permite encapsular 
 * variables y funciones privadas, exponiendo únicamente una API pública.
 * Es ideal para manejar el estado de componentes como un carrito de compras.
 */

const ShoppingCartModule = (function () {
    // Estado privado
    let cartItemCount = 0;
    
    // Selectores DOM
    const cartBadge = document.getElementById('cart-badge');
    const btnProducts = document.querySelector('.btn-primary');
    
    // Métodos privados
    const updateCartUI = () => {
        if (cartItemCount > 0) {
            cartBadge.classList.remove('d-none');
            // Como no tenemos contador numérico en el badge según el diseño, 
            // solo mostramos el punto rojo.
        } else {
            cartBadge.classList.add('d-none');
        }
    };

    const handleSimulationClick = (e) => {
        e.preventDefault();
        addItem();
        
        // Efecto visual simple de feedback
        const originalText = btnProducts.textContent;
        btnProducts.textContent = "¡Agregado!";
        setTimeout(() => {
            btnProducts.textContent = originalText;
        }, 1000);
    };

    // Métodos públicos (API)
    const addItem = () => {
        cartItemCount++;
        updateCartUI();
        console.log(`[ShoppingCartModule] Ítem agregado. Total: ${cartItemCount}`);
    };

    const resetCart = () => {
        cartItemCount = 0;
        updateCartUI();
        console.log('[ShoppingCartModule] Carrito reiniciado.');
    };

    const init = () => {
        console.log('[ShoppingCartModule] Inicializado.');
        
        // Simulación: agregar al carrito al hacer clic en 'Ver productos'
        if(btnProducts) {
            btnProducts.addEventListener('click', handleSimulationClick);
        }
    };

    return {
        init,
        addItem,
        resetCart
    };
})();

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    ShoppingCartModule.init();
});
