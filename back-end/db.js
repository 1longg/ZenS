const sqlite3 = require("sqlite3").verbose();
const dataArticles = require("./dataArticles.js");

class connectDB {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, async (err) => {
      if (err) {
        console.error(err.message);
      }

      console.log("Connected to the database.");
    });
  }

  runQuery(sql, params = []) {
    //Hàm do ta tự đặt tên gồm 2 tham số truyền vào.
    return new Promise((resolve, reject) => {
      //Tạo mới một Promise thực thi câu lệnh sql
      this.db.run(sql, params, function (err) {
        //this.db sẽ là biến đã kết nối csdl, ta gọi hàm run của this.db chính là gọi hàm run của sqlite3 trong NodeJS hỗ trợ (1 trong 3 hàm như đã nói ở trên)
        if (err) {
          //Trường hợp lỗi
          console.log("Error running sql " + sql);
          console.log(err);
          reject(err);
        } else {
          //Trường hợp chạy query thành công
          resolve({ id: this.all }); //Trả về kết quả là một object có id lấy từ DB.
        }
      });
    });
  }

  get(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, result) => {
        if (err) {
          console.log('Error running sql: ' + sql)
          console.log(err)
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }


}

module.exports = connectDB;
