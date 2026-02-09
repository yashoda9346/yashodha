document.querySelectorAll(".compare").forEach(button => {
    button.addEventListener("click", () => {
        alert("Compare feature will be implemented using backend/API");
    });
});
function showImages(category) {
    const images = {
        mobiles: [
            "download-2.jpeg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile3.jpg"
        ],
        laptops: [
            "images/laptop1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/laptop2.jpg"
        ],
        headphones: [
            "images/headphone1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/headphone2.jpg"
        ],
        watches: [
            "images/watch1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/watch2.jpg"
        ],
        tv: [
            "images/tv1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/tv2.jpg"
        ],
        cameras: [
            "images/camera1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/camera2.jpg"
        ],
        gaming: [
            "images/gaming1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/gaming2.jpg"
        ],
        appliances: [
            "images/fridge1.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/mobile2.jpg",
            "images/washingmachine1.jpg"
        ]
    };

    const container = document.getElementById("image-container");
    const title = document.getElementById("category-title");

    container.innerHTML = "";
    title.innerText = category.toUpperCase();

    images[category].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "category-image";
        container.appendChild(img);
    });
}

function openCompare() {
    document.getElementById("compareWindow").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeCompare() {
    document.getElementById("compareWindow").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function compareProducts() {
    const product = document.getElementById("productName").value;
    const sites = document.querySelectorAll(".sites input:checked");
    const table = document.getElementById("comparisonTable");
    const tbody = document.getElementById("tableBody");

    if (!product || sites.length === 0) {
        alert("Enter product and select websites");
        return;
    }

    tbody.innerHTML = "";
    table.style.display = "table";

    sites.forEach(site => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${site.value}</td>
            <td>₹ Loading...</td>
            <td>Available</td>
            <td>⭐ 4.3</td>
        `;
        tbody.appendChild(row);
    });
}
