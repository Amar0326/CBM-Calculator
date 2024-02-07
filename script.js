document.getElementById("cbmForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const quantity = parseInt(document.getElementById("quantity").value);
  
    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(quantity)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const cbm = (length * width * height) / 1000000; // Conversion from cm^3 to m^3
    const totalCBM = cbm * quantity;
  
    document.getElementById("result").innerHTML = `<p>Total CBM: ${totalCBM.toFixed(2)} m<sup>3</sup></p>`;
  });
  