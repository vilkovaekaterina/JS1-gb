var good1 = {
        nameSrc : "img/smallCar.jpg",
        name: 'Small Car',
        price: 5000,
        id: 1
    },
    good2 = {
        nameSrc : "img/shkoda.jpg",
        name: 'SKODA',
        price: 7000,
        id: 2
    },
    good3 = {
        nameSrc : "img/toyota.jpg",
        name: 'TOYOTA',
        price: 9000,
        id: 3
    },
    goods = [good1,good2,good3],
sum = 0;

function loadGoods() {
    var goodsHtml = document.getElementsByClassName('goods')[0];
    goodsHtml.style.display = "flex";
    goodsHtml.style.flexWrap = "wrap";
    for ( var good of goods){
        var card = document.createElement("div");
        card.className = "cardOfGood";
        card.style.margin = '20px';

        var imgElement = document.createElement("img")
        imgElement.src = good.nameSrc;
        imgElement.style.display = "block";
        imgElement.style.height = "120px";
        imgElement.style.width = "160px";
        imgElement.style.margin = "10px";
        card.appendChild(imgElement);

        var goodName = document.createElement("span");
        goodName.textContent = good.name;
        goodName.className = 'goodName';
        goodName.style.display = 'block';
        goodName.style.margin = "10px";
        card.appendChild(goodName);

        var goodPrice = document.createElement("span");
        goodPrice.textContent = good.price + "$";
        goodPrice.className = 'goodPrice';
        goodPrice.style.display = 'block';
        goodPrice.style.margin = "10px";
        card.appendChild(goodPrice);


        var goodBtn = document.createElement("button");
        goodBtn.textContent = "buy";
        goodBtn.setAttribute("id", "btn_" + good.id);
        goodBtn.style.margin = "10px";
        goodBtn.onclick = addToShopList;
        card.appendChild(goodBtn);

        goodsHtml.appendChild(card);

    }
}

function addToShopList(event){
    var allGoods = document.querySelector('.allGoods');
    var yourSum = document.querySelector('.fullPrice');
    var item = goods[event.target.id.split("_")[1] - 1];

    sum += item.price;

    var yourGood = document.createElement("span");
    yourGood.textContent = item.name;
    yourGood.style.display = 'block';
    yourGood.style.margin = "10px";
    allGoods.appendChild(yourGood);

    yourSum.innerHTML = sum + "$";
}
window.onload = loadGoods;
