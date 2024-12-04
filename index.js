document.getElementById("analyzeButton").addEventListener("click", function () {
  const keywordsInput = document.getElementById("keyword-input").value;

  const keywords = keywordsInput.split(",");

  keywords.forEach((keyword) => {
    const apiKey = "349dbeacc0mshf0e792106990ea3p1a894fjsn0fd1ad356298";
    // this key is from rapidapi and the api is called seo keyword research

    const fetchUrl = `https://google-keyword-insight1.p.rapidapi.com/globalkey/?keyword=${encodeURIComponent(keyword)}&lang=en`;

    let data;

    fetch(fetchUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey, // Replace with your new API key
        "x-rapidapi-host": "google-keyword-insight1.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        data = responseData;
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  console.log(data);
  console.log("test1");

      console.log("makes it here ");

      keywords.forEach((keyword) => {
        const keywordData = data.find((item) => item.text === keyword);

        console.log("test2");

        if (keywordData) {
          const resultsDiv = document.getElementById("results");
          const keywordDiv = document.createElement("div");
          keywordDiv.textContent = `Keyword: ${keyword}`;
          resultsDiv.appendChild(keywordDiv);
          console.log("test3");
          const dataDiv = document.createElement("div");
          dataDiv.innerHTML = `
        <p>CPC: ${keywordData.cpc}</p>
        <p>Volume: ${keywordData.vol}</p>
        <p>Competition: ${keywordData.competition}</p; 


               resultsDiv.appendChild(dataDiv);
        } else {
          console.error(`Keyword not found: ${keyword}`);
        }
      });
    });
