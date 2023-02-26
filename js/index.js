// ─── For Triangle Card ───────────────────────────────────────────────────────
document.getElementById('triangle-btn').addEventListener('click', function () {
    // ─── Get Data From Html Using Id ─────────────────────────────────────
    const triangleName = document.getElementById('triangle-name').innerText;
    const triangleValueElement = document.getElementById('triangleValue').innerText;
    const triangleValue = parseFloat(triangleValueElement);
    const triangleBaseElement = document.getElementById('triangle-base').value;
    const triangleBase = parseFloat(triangleBaseElement);
    const triangleHeightElement = document.getElementById('triangle-height').value;
    const triangleHeight = parseFloat(triangleHeightElement);
    const triangleArea = triangleValue * triangleBase * triangleHeight;

    const tableContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="mx-2 pt-2 pb-2">${1} </td>
    <td class="mx-4 pt-2 pb-2">${triangleName} </td>
    <td class="mx-2 pt-2 pb-2">${parseFloat(triangleArea.toFixed(2))}<span> cm<sup>2</sup></span></td>
    <td class="mx-2 pt-2 pb-2"><button onclick="cmToMeter(this)" class=" text-white bg-blueBtn border-0 py-[5px] px-2 mx-2 rounded-lg ">Covert to m<sup>2</sup></button></td>
    `;
    tableContainer.appendChild(tr);
})