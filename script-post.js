// 書き換えるデータ
const newData = {
  title: "New Post",
  body: "This is a new post."
};

// json-serverのAPIエンドポイント
const apiUrl = 'http://localhost:3003/posts';

// POSTリクエストのオプション
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newData),
};

// fetchを使用してPOSTリクエストを送信
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('Data added:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
