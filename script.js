//var $ = jQuery = require("./jquery-2.1.4.js");
var iRemocon = new require('iremocon');
$(function(){
  //alert("sssss");
  $("#lighton").click(function () {
    //alert("on");
    var iremo = new iRemocon('192.168.1.90');
    iremo.is('350', function(err, msg) {
      if (err) {
        console.error(err.code, err.error, err.detail);
        // e.g. 003 受信エラー 不正なリモコンデータを受信した
        return;
      }
      //console.log(msg);
      //alert(msg);
      return;
      // e.g. ic;ok
    }); 
  });

  $("#lightoff").click(function () {
    //alert("off");
    var iremo = new iRemocon('192.168.1.90');
    iremo.is('351', function(err, msg) {
      if (err) {
        console.error(err.code, err.error, err.detail);
        // e.g. 003 受信エラー 不正なリモコンデータを受信した
        return;
      }
      //console.log(msg);
      //alert(msg);
      // e.g. ic;ok
    }); 
  });
});
