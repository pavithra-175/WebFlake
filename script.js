document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const productBoxes = document.querySelectorAll(".third-box");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        productBoxes.forEach(function (box) {
            const productName = box.querySelector("h3").textContent.toLowerCase();
            const productDescription = box.querySelector("p").textContent.toLowerCase();

            if (
                productName.includes(searchTerm) ||
                productDescription.includes(searchTerm)
            ) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    });
});
