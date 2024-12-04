

console.log(data)
console.log("test1")


document.getElementById("analyzeButton").addEventListener("click", function() {
  const keywordsInput = document.getElementById("keyword-input").value;
  const keywords = keywordsInput.split(",");
    console.log("makes it here ")



  keywords.forEach(keyword => {
    const keywordData = data.find(item => item.text === keyword);

      console.log("test2")

    if (keywordData) {
      const resultsDiv = document.getElementById('results');
      const keywordDiv = document.createElement('div');
      keywordDiv.textContent = `Keyword: ${keyword}`;
      resultsDiv.appendChild(keywordDiv);
console.log("test3")
      const dataDiv = document.createElement('div');
      dataDiv.innerHTML = `
        <p>CPC: ${keywordData.cpc}</p>
        <p>Volume: ${keywordData.vol}</p>
        <p>Competition: ${keywordData.competition}</p>
      `;
      resultsDiv.appendChild(dataDiv);
    } else {
      console.error(`Keyword not found: ${keyword}`);
    }
  });
});

