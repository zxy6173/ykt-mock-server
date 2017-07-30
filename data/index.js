var Mock = require("mockjs");
module.exports = {
    "/users/find":{
        "users|10":[{
            "id|+1":1,
            "username":"@first",
            "phone":/1[3578]\d{9}/,
            "pwd":/.{6,20}/,
            "email":"@email"
        }]
    },
    "/films/findIndexFilms":function(){
        let data = {};
        data.hot = Mock.mock({
            "hotList|8":[{
                "id|+1":1,
                "name":"测试电影@increment",
                "enname":"test-image@increment",
                "userGrade|1-9.1":1,
                "indexImage":"@image('160x220','@color','@enname')"

            }],
            "hotCount|10-100":1
        });
        data.soon = Mock.mock({
            "soonList|8":[{
                "id|+1":1,
                "name":"测试电影@increment",
                "enname":"test-image@increment",
                "userGrade|1-9.1":1,
                "wantWatch|1000-999999":1,
                "showTime":"@date('yyyy-MM-dd')",
                "indexImage":"@image('160x220','@color','@enname')"

            }],
            "soonCount|10-100":1
        });
        data.playing = Mock.mock({
            "playList|7":[{
                "id|+1":1,
                "name":"测试电影@increment",
                "enname":"test-image@increment",
                "userGrade|1-9.1":1,
                "indexImage":"@image('160x220','@color','@enname')"

            }],
            "playCount|10-100":1
        });
        data.orderByBoxOffice = (function(){
            let data = Mock.mock({
                "boxOfficeList|10":[{
                    "id|+1":1,
                    "name":"测试电影@increment",
                    "enname":"test-image@increment",
                    "userGrade|1-9.1":1,
                    "boxOffice|1000-99999.2":1,
                    "indexImage":"@image('160x220','@color','@enname')"
                }]
            });
            data.boxOfficeList.sort(function(a,b){
                return b.boxOffice - a.boxOffice;
            });
            return data;
        }())
        data.orderByWantWatch = (function(){

                let data = Mock.mock({
                    "wantWatchList|10":[{
                        "id|+1":1,
                        "name":"测试电影@increment",
                        "enname":"test-image@increment",
                        "userGrade|1-9.1":1,
                        "wantWatch|1000-999999":1,
                        "indexImage":"@image('160x220','@color','@enname')"
                    }]
                });
                data.wantWatchList.sort(function(a,b){
                    return b.wantWatch - a.wantWatch;
                });
                return data;
        }())
        data.orderByUserGrade = (function(){

                let data = Mock.mock({
                    "userGradeList|10":[{
                        "id|+1":1,
                        "name":"测试电影@increment",
                        "enname":"test-image@increment",
                        "userGrade|1-9.1":1,
                        "indexImage":"@image('160x220','@color','@enname')"
                    }]
                });
                data.userGradeList.sort(function(a,b){
                    return b.userGrade - a.userGrade;
                });
                return data;
        }())
        return data;
    }
}
