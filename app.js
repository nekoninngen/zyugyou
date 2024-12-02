        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "回答してね"; // デフォルトの値

            if (colour === "とううん" && number === 0) {
                result = "残念…";
            } else if (colour === "黒" && number === 1) {
                result = "中吉";
            } else if (colour === "黒" && number === 2) {
                result = "凶";
            } else if (colour === "しののめ" && number === 0) {
                result = "正解！！";
            } else if (colour === "白" && number === 1) {
                result = "中吉";
            } else if (colour === "白" && number === 2) {
                result = "大凶";
            } else if (colour === "ひがしくも" && number === 0) {
                result = "ざんねん…";
            } else if (colour === "オレンジ" && number === 1) {
                result = "大吉";
            } else if (colour === "オレンジ" && number === 2) {
                result = "中吉";
            } else if (colour === "とうのめ" && number === 0) {
                result = "惜しい！";
            } else if (colour === "青" && number === 1) {
                result = "とても素晴らしいことです";
            } else if (colour === "青" && number === 2) {
                result = "この先右方向です";
            }

const prefecturalCapital = [
    {
      id: "01",
      question: "北海道の県庁所在地は？",
      answer01: "札幌",
      answer02: "福島",
      answer03: "前橋",
      answer04: "秋田",
    },
    {
      id: "02",
      question: "青森県の県庁所在地は？",
      answer01: "青森",
      answer02: "前橋",
      answer03: "秋田",
      answer04: "札幌",
    },
    {
      id: "03",
      question: "岩手県の県庁所在地は？",
      answer01: "盛岡",
      answer02: "福島",
      answer03: "仙台",
      answer04: "山形",
    },
    {
      id: "04",
      question: "宮城県の県庁所在地は？",
      answer01: "仙台",
      answer02: "札幌",
      answer03: "前橋",
      answer04: "水戸",
    },
    {
      id: "05",
      question: "秋田県の県庁所在地は？",
      answer01: "秋田",
      answer02: "盛岡",
      answer03: "青森",
      answer04: "札幌",
    },
  ];
                
            document.getElementById('result-output').innerText = "【" + result + "】";
        }
