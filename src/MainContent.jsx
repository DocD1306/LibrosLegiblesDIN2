function MainContent({ children }){
    
    /* 
    El id "main-content" se utiliza para el enlace de accesibilidad en main.jsx
    
    El role "main" es un refuerzo a la etiqueta main que indica que este es el contenido principal de la página
    
    tabIndex="-1" hace que el elemento no se pueda enfocar mediante tabulación, pero permite que los scripts lo enfoquen si es necesario 
    (como al usar el enlace de "Saltar al contenido principal")
    */
    return (
        <main id="main-content" role="main" tabIndex="-1" className="main_content">
            {children}
        </main>
    )
}

export default MainContent