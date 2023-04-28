import { useState } from "react";
import Line from "./Line";
import data from "../assets/emojiList_mar8cs.json";

function Search() {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <main>
      <h1>Emoji Searcher</h1>
      <input
        id="mySearch"
        type="search"
        placeholder="What emoji are you looking for ?"
        onChange={handleSearch}
        value={keyword}
      />
      <div className="results">
        {data.map((elem) => {
          const keyArr = elem.keywords.split(",");
          return keyArr.map((word) => {
            if (word.includes(keyword)) {
              return <Line title={elem.title} symbol={elem.symbol} />;
            }
          });
        })}
      </div>
    </main>
  );
}

export default Search;
