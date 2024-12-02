        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "小吉";
            } else if (colour === "黒" && number === 1) {
                result = "中吉";
            } else if (colour === "黒" && number === 2) {
                result = "凶";
            } else if (colour === "白" && number === 0) {
                result = "中吉";
            } else if (colour === "白" && number === 1) {
                result = "中吉";
            } else if (colour === "白" && number === 2) {
                result = "大凶";
            } else if (colour === "オレンジ" && number === 0) {
                result = "凶";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "中吉";
            } else if (colour === "青" && number === 0) {
                result = "あなた今楽しいですか？";
            } else if (colour === "青" && number === 1) {
                result = "とても素晴らしいことです";
            } else if (colour === "青" && number === 2) {
                result = "この先右方向です";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
