function template($aim, $link) {
    $.ajax({
        url: $link,
        type: "post",
        success: function (data) {
            // 创建正则表达{{(\w+)}}
            var regex = /{{(\w+)}}/;

            //获取id里的html标记为字符串
            var str = $aim.html();

            //执行者规则匹配，获取匹配结果
            var result = regex.exec(str);

            //如果结果result为真，则循环替换
            while (result) {
                str = str.replace(result[0], data[result[1]]);
                result = regex.exec(str);
            }

            //最后把结果替换给原来的id的html里
            $aim.html(str);
        }
    })
}