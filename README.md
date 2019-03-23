# template.js

前端html分离json模板

## Demo

[Demo展示](https://ssyatelandisi.github.io/template/demo/index.html)

## 准备内容

- html内容

  ```html
  ...
  <div id="content">
      <h1>{{title_1}}</h1>
      <p>{{paragraph}}</p>
  </div>
  ...
  ```

- json内容

  ```json
  [
      {
          "id": "1",
          "codeName": "title_1",
          "codeText": "标题1"
      },
      {
          "id": "2",
          "codeName": "paragraph",
          "codeText": "这里是段落文本。"
      }
  ]
  ```

## 使用方法

  **模板基于jQuery，需往项目里导入[jQuery.js](https://jquery.com/download/)和tamplate.js**

1. 引用tamplate.js

   ```javascript
   ...
   <script src="jQuery.min.js"></script>
   <script src="tamplate.js"></script>
   ...
   ```


2. 调用tamplate($aim,$link,$type)

   ```js
   ...
   <script src="jQuery.min.js"></script>
   <script src="tamplate.js"></script>
   <script>
       $(function(){
       	template($("#content"),"data.json","get");
       // 等同template($("#content"),"data.json");
       });
   </script>
   ...
   ```

   |   形参   |     $aim      |    $link     |         $type         |
   | :------: | :-----------: | :----------: | :-------------------: |
   |   说明   |  目标选择器   | json文件地址 | Ajax方法，不填默认get |
   | 实参举例 | $("#content") | "data.json"  |  空着、"get"或“post”  |

## 效果

浏览器显示效果：

```html
标题1
这里是段落文本。
```
浏览器Elements内容：

```html
...
<div id="content">
    <h1>标题1</h1>
    <p>这里是段落文本。</p>
</div>
...
```