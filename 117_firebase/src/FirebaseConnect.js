import * as firebase from 'firebase';
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAsTXr8OEXxF79Mq8HwDNk5JWspOEwP38A",
    authDomain: "notereactjs-7b013.firebaseapp.com",
    databaseURL: "https://notereactjs-7b013.firebaseio.com",
    projectId: "notereactjs-7b013",
    storageBucket: "notereactjs-7b013.appspot.com",
    messagingSenderId: "770139900782"
  };
  

  export const firebaseconnect = firebase.initializeApp(config);

  //---------------------Hiển thị dữ liệu---------------------------------------------//
  var data = firebase.database().ref('DataForNote/Note1')
    // một khi lấy được dữ liệu thì in ra một function  
    // once : một khi
    // then : thì
      data.once('value').then(function(snapshot){
        // bắt buộc phải có .val() gọi là in ra giá trị
        console.log(snapshot.val());
      })
  //------------------------endl hiển thị dữ liệu ----------------------------------//






  //-------------------------sửa dữ liệu---------------------------------------------//
      
      data.set({
        id : 1,
        contentNote:"công cụ mới của google mới smml",
        titleNote:"ngày 10-7-2018 code sml"
      })

      
  //---------------------------sửa dữ liệu-------------------------------------------//