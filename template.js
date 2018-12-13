function template($aim, $jsonLink) {

    //获取id里的html标记为字符串
    var str = $aim.html();

    //发送ajax请求
    $.ajax({
        url: $jsonLink,
        type: "post",
        dataType: "json",
        success: function (data, status) {
            if (status != "success") {
                return console.log('Ajax请求失败！');
            }

            //遍历请求到的json数据
            $.each(data, function (index, value) {
                str = str.replace(new RegExp('{{' + value.codeName + '}}', 'g'), value.codeText);
            });

            // 最后把结果替换给原来的id的html里
            $aim.html(str);
        }
    });
}