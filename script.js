
let orderPresenting = document.getElementById("orderPresenting");

function get_Menu() {
    fetch("https://free-food-menus-api-production.up.railway.app/burgers")
        .then((data) => {
            return data.json();
        })
        .then((Data) => {
            data = Data;
            console.log(data);

            data.map((goods) => {
                let itemDiv = document.createElement("div");
                itemDiv.className = "forCSS";
                itemDiv.innerHTML = `
        <img src="${goods.img}">
<div class="content">
            <h2>${goods.name}</h2>
            <h4>${goods.id}</h4>
            <p>Price: ${goods.price}</p>
            <p>Rating: ${goods.rate}</p>
            <p>Country: ${goods.country}</p>
</div>         
            `;
                orderPresenting.append(itemDiv);
            });
        });
}

function take_Order() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let Order_1 = data[Math.floor(Math.random() * 60) + 1];
            let Order_2 = data[Math.floor(Math.random() * 60) + 1];
            let Order_3 = data[Math.floor(Math.random() * 60) + 1];

            resolve({
                Order_1,
                Order_2,
                Order_3,
            });
        }, 2500);
    });
}

let order_Prep = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            order_status: true,
            paid: false,
        });
    }, 1500);
});



get_Menu(
    take_Order(
        order_Prep.then(function (data) {
            console.log(data);
        })
    ).then(function (data) {
        console.log(data);
    })
);

function pay_Order() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                order_status: true,
                paid: true,
            });
        }, 1000);
    });
}

pay_Order().then(function thankyouFnc(data) {
    console.log(data);

    if (data.paid === true) {
        alert("Thanks for Order, Visit Again")
    }
});