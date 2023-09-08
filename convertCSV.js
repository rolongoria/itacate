export function convertCSVtoObject() {
    return new Promise((resolve, reject) => {
      const fileInput = document.getElementById("csvFile");
      const file = fileInput.files[0];
  
      if (!file) {
        reject(new Error("Please select a CSV file."));
        return;
      }
  
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const csvData = e.target.result;
        const lines = csvData.split("\n");
        const headers = lines[0].split(",");
        const csvDictionary = {};
  
        for (let i = 1; i < lines.length; i++) {
          const data = lines[i].split(",");
          const entry = {};
  
          for (let j = 0; j < headers.length; j++) {
            if (headers[j] !== 'Void?\r\r') {
              entry[headers[j]] = data[j];
            }
          }
  
          csvDictionary["Entry " + i] = entry;
        }
  
        // Resolve the Promise with the resulting dictionary
        resolve(csvDictionary);
      };
  
      reader.onerror = function (error) {
        reject(error);
      };
  
      reader.readAsText(file);
    });
  }
  