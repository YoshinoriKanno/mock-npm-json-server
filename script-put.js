// 更新するデータ
const updatedData = {
  id: 2, // 更新したいデータのID
  title: "New Post",
  author: "Yoshinori"
};

// json-serverのAPIエンドポイント
const apiUrl = `http://localhost:3003/posts/${updatedData.id}`;

// PUTリクエストのオプション
const requestOptions = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedData),
};

// fetchを使用してPUTリクエストを送信
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log('Data updated:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
