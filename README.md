# Usage

## 何はともあれインストール

```
npm i
```

## JSON-Server を起動する

```
npm run start-json-server
```

```
npx json-server db.json
```

## Post Method をつかう

```
node script-post.js
```

## Put Method をつかう

```
node script-put.js
```


## データ操作の例

### 登録（POST）
```
curl -H "Content-Type: application/json" -d '{"title":"test"}' -X POST http://localhost:3000/posts
```

### 更新（PUT）
```
curl -H "Content-Type: application/json" -d '{"title":"test update"}' -X PUT http://localhost:3000/posts/1
```

### 削除（DELETE）
```
curl -H "Content-Type: application/json" -X DELETE http://localhost:3000/posts/1
```

### 取得（GET）
```
curl -X GET http://localhost:3000/posts
```
