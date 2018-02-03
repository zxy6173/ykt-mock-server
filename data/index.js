const Mock = require("mockjs");
const Random = Mock.Random;
let users = [{
    id:1,
    username:"admin",
    "phone":"13900000001",
    "password":"88888888",
    "email":"13900000001@qq.com"
},{
    id:2,
    username:"user",
    "phone":"13900000002",
    "password":"66666666",
    "email":"13900000002@qq.com"
}
];
module.exports = {
    "/users": function(type,params){
        console.log(type,params);
        if(type == "POST"){
            
            users.push(Mock.mock({
                    "id": Random.increment(1),
                    "username": "@first",
                    "phone": params.phone,
                    "password": params.password,
                    "email": "@email"
                
            }));
            return users;
            
        }else if(type == "GET"){
            console.log("users",params);
            for(let i = 0;i < users.length;i++){
                if(users[i].phone == params.phone && !params.password){
                    return users[i];
                }else if(users[i].phone == params.phone 
                    && users[i].password == params.password){
                        
                    return users[i];
                }
                
            }
        }
        return {}
    },
    "/films/hots": {
        "hotList|8": [{
            "id|+1": 1,
            "name": "测试电影@increment",
            "enname": "test-image@increment",
            "userGrade|1-9.1": 1,
            "indexImage": "@image('160x220','@color','@enname')"

        }],
        "hotCount|10-100": 1
    },
    "/films/soons": {
        "soonList|8": [{
            "id|+1": 1,
            "name": "测试电影@increment",
            "enname": "test-image@increment",
            "userGrade|1-9.1": 1,
            "wantWatch|1000-999999": 1,
            "showTime": "@date('yyyy-MM-dd')",
            "indexImage": "@image('160x220','@color','@enname')"

        }],
        "soonCount|10-100": 1
    },
    "/films/playings": {
        "playList|7": [{
            "id|+1": 1,
            "name": "测试电影@increment",
            "enname": "test-image@increment",
            "userGrade|1-9.1": 1,
            "indexImage": "@image('160x220','@color','@enname')"

        }],
        "playCount|10-100": 1
    },
    "/films/boxOffices": (function () {
        let data = Mock.mock({
            "boxOfficeList|10": [{
                "id|+1": 1,
                "name": "测试电影@increment",
                "enname": "test-image@increment",
                "userGrade|1-9.1": 1,
                "boxOffice|1000-99999.2": 1,
                "indexImage": "@image('160x220','@color','@enname')"
            }]
        });
        data.boxOfficeList.sort(function (a, b) {
            return b.boxOffice - a.boxOffice;
        });
        return data;
    }()),
    "/films/wantWatches": (function () {

        let data = Mock.mock({
            "wantWatchList|10": [{
                "id|+1": 1,
                "name": "测试电影@increment",
                "enname": "test-image@increment",
                "userGrade|1-9.1": 1,
                "wantWatch|1000-999999": 1,
                "indexImage": "@image('160x220','@color','@enname')"
            }]
        });
        data.wantWatchList.sort(function (a, b) {
            return b.wantWatch - a.wantWatch;
        });
        return data;
    }()),
    "/films/userGrades": (function () {

        let data = Mock.mock({
            "userGradeList|10": [{
                "id|+1": 1,
                "name": "测试电影@increment",
                "enname": "test-image@increment",
                "userGrade|1-9.1": 1,
                "indexImage": "@image('160x220','@color','@enname')"
            }]
        });
        data.userGradeList.sort(function (a, b) {
            return b.userGrade - a.userGrade;
        });
        return data;
    }())

}
