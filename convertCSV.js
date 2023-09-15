export function convertCSVtoObject() {
    return new Promise((resolve, reject) => {
      const fileInput = document.getElementById("csvFile");
      const files = fileInput.files;
  
      if (!files.length) {
        reject(new Error("Please select one or more CSV files."));
        return;
      }
  
      let resultPromises = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
  
        const promise = new Promise((resolveFile, rejectFile) => {
          reader.onload = function (e) {
            const csvData = e.target.result;
            const lines = csvData.split("\n");
            const headers = lines[0].split(",");
            const csvObjects = [];
  
            for (let j = 1; j < lines.length; j++) {
              const data = lines[j].split(",");
              const entry = {};
  
              for (let k = 0; k < headers.length; k++) {
                if (headers[k] !== 'Void?\r\r') {
                  entry[headers[k]] = data[k];
                }
              }
  
              csvObjects.push(entry);
            }
  
            resolveFile(csvObjects);
          };
  
          reader.onerror = function (error) {
            rejectFile(error);
          };
  
          reader.readAsText(file);
        });
  
        resultPromises.push(promise);
      }
  
      // Wait for all promises to resolve and then resolve with an array of results
      Promise.all(resultPromises)
        .then((results) => {
        //   console.log(results);
          resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  