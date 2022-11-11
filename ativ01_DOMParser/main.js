const productsXML = '<produtos><produto>\
                <titulo>Camiseta Esportiva</titulo>\
                <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>\
                <preco>35,50</preco>\
                </produto>\
                <produto>\
                <titulo>Bermuda Jeans</titulo>\
                <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>\
                <preco>54,62</preco>\
                </produto>\
                <produto>\
                <titulo>Calça Moletom</titulo>\
                <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>\
                <preco>79,90</preco>\
                </produto>\
                </produtos>';

function addProductDiv(product){
	const productDiv = document.createElement("div");	
	const productInfo = product.querySelector("titulo").textContent;
	productInfo.toLowerCase().replace(" ", "-");

	productDiv.setAttribute("class", "produtos-lista__produto-item");
	productDiv.setAttribute("data-item", productInfo);
	return productDiv;
}

function addProductTitle(product){
	const productTitle = document.createElement("h1");

	productTitle.textContent = product.querySelector("titulo").textContent;
	return productTitle;
}

function addProductDescription(product){
	const productDescription = document.createElement("p");

	productDescription.textContent = product.querySelector("descricao").textContent;
	return productDescription;
}

function addProductPrice(product){
	const productPrice = document.createElement("span");

	productPrice.textContent = product.querySelector("preco").textContent;
	return productPrice;
}

function newProduct(product){
	const productDiv = addProductDiv(product);
	const productTitle = addProductTitle(product);
	const productDescription = addProductDescription(product);
	const productPrice = addProductPrice(product);

	productDiv.appendChild(productTitle);
	productDiv.appendChild(productDescription);
	productDiv.appendChild(productPrice);

	section.appendChild(productDiv);
}

const parser = new DOMParser();
const productsString = parser.parseFromString(productsXML, "application/xml");

const products = productsString.querySelectorAll("produto");
const section = document.createElement("section");

section.classList.add("produtos-lista");
document.body.appendChild(section);

products.forEach(product => newProduct(product));