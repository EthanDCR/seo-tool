



let data;
document.getElementById("analyzeButton").addEventListener("click", function() {
  const keywordsInput = document.getElementById("keyword-input").value;


    
  const keywords = keywordsInput.split(",");

  keywords.forEach(keyword => {
    const apiKey = '349dbeacc0mshf0e792106990ea3p1a894fjsn0fd1ad356298'; 

      fetch(`https://seo-keyword-research.p.rapidapi.com/keynew.php?keyword=${encodeURIComponent(keyword)}&country=in`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'seo-keyword-research.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
   
    });
  });
});
