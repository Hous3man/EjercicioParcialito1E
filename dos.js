/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar()
{
	let vNombre;
	let vCategoria;
	let vPrecio=0;
	let vMayorPrecio
	let vResp="si"

	vNombre=prompt("Ingrese el nombre del producto : ");
	vCategoria=prompt("Ingrese la categoría del producto : ");
	vPrecio=parseInt(prompt("Ingrese el precio del producto : "));

	do
	{
		if(vPrecio)
		{

		}

	}while

	alert("Usted ingresó: "+vNombre+" "+vCategoria+" "+"$"vPrecio);

}
//alert("Hola Mundo");