        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "回答してね"; // デフォルトの値

            if (colour === "とううん" ) {
                result = "残念…";
            } else if (colour === "しののめ" ) {
                result = "正解！！";
            } else if (colour === "ひがしくも" ) {
                result = "ざんねん…";
            } else if (colour === "とうのめ" ) {
                result = "惜しい！";
            } else 

document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }





