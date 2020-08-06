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
	// Declarar e inicializar variables
	let vNombre;
	let vCategoria;
	let vPrecio=0;
	let vMayorPrecio=0;
	let vMayorNombre;
	let vMayPreLac=0;
	let vNomMayPreLac;
	let vCantBebidas=0;
	let vResp="si";

	// Configurar condiciones
	do
	{
		vNombre=prompt("Ingrese el nombre del producto : ");

		do
		{
			vCategoria=prompt("Ingrese la categoría del producto : ");
		}while(vCategoria!=="Almacén" && vCategoria!=="Lácteos" && vCategoria!=="Limpieza" && vCategoria!=="Bebidas");
		
		do
		{
			vPrecio=parseInt(prompt("Ingrese el precio del producto : "));

		}while(vPrecio<=0 || vPrecio>1000);

		if(vPrecio>vMayorPrecio)
		{
			vMayorPrecio=vPrecio;
			vMayorNombre=vNombre;
		}
		if(vPrecio>vMayPreLac && vCategoria==="Lácteos")
		{
			vMayorPrecio=vPrecio;
			vNomMayPreLac=vNombre;
		}
		if(vCategoria==="Bebidas")
		{
			vCantBebidas=vCantBebidas+1;
		}
		
		vResp=prompt("Desea ingresar otro producto? si/no ");
	}while(vResp==="si");

	// Mostrar por pantalla lo solicitado
	document.write("Nombre de artículo con mayor precio :"+vMayorNombre+"<br>");
	document.write("Nombre de artículo con mayor precio, de la categoría lácteos :"+vNomMayPreLac+"<br>");
	document.write("Cantidad de artículos ingresados de categoría bebidas :"+vCantBebidas+"<br>");

}
//alert("Hola Mundo");