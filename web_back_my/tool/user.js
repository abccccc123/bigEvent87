var user = {
    loginIn: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.success
        });
    },
    logOut: function(options) {
        $.ajax({
            url: USER_LOGOUT,
            type: "post",
            success: options.success,
        })
    },
    getInfo: function(options) {
        $.ajax({
            url: USER_INFO,
            success: options.success
        })
    },
    getAllInfo: function(options) {
        $.ajax({
            url: USER_ALLINFO,
            success: options.success
        })
    },
    edit: function(options) {
        $.ajax({
            url: USER_EDIT,
            type: "post",
            data: options.data,
            contentType: false, // 告诉jQuery无需设置内容类型
            processData: false, // 告诉jQuery无需进行数据的处理
            success: options.success
        })
    }
}