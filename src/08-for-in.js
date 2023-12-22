const carritoDeCompras = {
    manzana: 5,
    peras: 8,
    naranjas: 3,
    fresas: 20,
    platanos: 6
};

// for in solo se utiliza con objetos key:value

for(fruta in carritoDeCompras) {
    console.log(fruta);
}

for(fruta in carritoDeCompras) {
    console.log(carritoDeCompras[fruta]);
}

for(fruta in carritoDeCompras) {
    console.log(`${fruta}: ${carritoDeCompras[fruta]}`);
}