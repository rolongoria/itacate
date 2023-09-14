export function exportToExcel(totalSales, date1, date2) {
    // Function to trigger the download
    const dataArray = objectToArray(totalSales);
            const csv = convertToCSV(dataArray);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');

            if (navigator.msSaveBlob) {
                navigator.msSaveBlob(blob, `${date1}-${date2}.csv`);
            } else {
                const csvURL = URL.createObjectURL(blob);

                link.href = csvURL;
                link.setAttribute('download', `${date1}-${date2}.csv`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
}

// Function to convert an object to an array of objects
function objectToArray(obj) {
    return Object.keys(obj).map(key => ({ key, value: obj[key] }));
}

// Function to convert an array of objects to a CSV string
function convertToCSV(objArray) {
    const csv = objArray.map(item => `${item.key},${item.value}`).join('\n');
    // return `Producto,Cantidad\n${csv}`;
    return csv;
}
    


