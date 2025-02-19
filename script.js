document.addEventListener("DOMContentLoaded", function () {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        const prices = document.querySelectorAll(".price");
        let total = 0;
        
        prices.forEach(price => {
            total += parseFloat(price.textContent) || 0;
        });
        
        const table = document.querySelector("table");
        const totalRow = document.createElement("tr");
        const totalCell = document.createElement("td");
        
        totalCell.colSpan = 2;
        totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);
        
        table.appendChild(totalRow);
    };

    getSumBtn.addEventListener("click", getSum);
});
