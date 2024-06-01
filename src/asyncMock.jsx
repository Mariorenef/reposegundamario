const productos = [
    {
      id: "1",
      name: "Remera XL Blanca",
      price: 3000,
      category: "remeras",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      stock: "30",
      description: "remera xl masculino",
    },
    {
      id: "2",
      name: "Remera XL Placeholder",
      price: 4000,
      category: "remeras",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      stock: "20",
      description: "remera xl placeholder",
    },
    {
      id: "3",
      name: "Remera XL Placeholder 2",
      price: 1000,
      category: "remeras",
      img: "https://sublitextil.com.ar/wp-content/uploads/2019/01/Remera-sublimar-hombre-.jpg",
      stock: "10",
      description: "remera xl placeholder 2",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((prod) => prod.id === productId));
      }, 500);
    });
  };