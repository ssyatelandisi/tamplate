# tamplate
前端html分离json模板

- html内容

  ```html
  <html>
      <div id="content">
          <span>{{text}}</span>
      </div>
  </html>
  ```

- json内容

  ```json
  {
      "text":"内容"
  }
  ```

  **模板基于jQuery，需往项目里导入[jQuery.js](https://jquery.com/download/)和tamplate.js**

1. 引用tamplate.js

   ```javascript
   ...
   <script>jQuery.min.js</script>
   <script>tamplate.js</script>
   ...
   ```


2. 调用tamplate($aim,$link)

   ```js
   ...
   <script>jQuery.min.js</script>
   <script>tamplate.js</script>
   <script>
       $(function(){
       	template($("#content"),"data.json");
   	});
   </script>
   ...
   ```

   |   形参   |     $aim      |    $link     |
   | :------: | :-----------: | :----------: |
   |   说明   |    目标id     | json文件位置 |
   | 实参举例 | $("#content") |  data.json   |
