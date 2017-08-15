var xhr = new XMLHttpRequest()
      var self = this
      
      xhr.open('GET', apiURL, true)
      console.log("see click")
      
      xhr.onload = function() {
        console.log("see result")
        answer1 = JSON.parse(xhr.responseText)
        console.log(answer1)
        if(answer1.result='OK'){
          recordStateToggle();
        }else{
          alarm("answer1");
        }
        
     }
    xhr.send()

    function ajaxRequest(method, requestURL){
      var self = this;

      xhr.open(method, requestURL, true);
      console.log("accepted URL");

      xhr.onload = function(){
        console.log("got message!");
        var answer = JSON.parse(xhr.responseText);
        console.log("the message is:"answer);
        return answer;
      }

      xhr.send();
    }


1./hicat/stationMode?ssid=xxxxx&password=xxxxxxx
此命令不会返回成功。修改后就会失去连接
失败：{"result":"ERROR"}
2./hicat/apMode?ssid=xxxxx&password=xxxxxxx
此命令不会返回成功。修改后就会失去连接
失败：{"result":"ERROR"}
3./hicat/setTime?time=%d-%d-%d-%d-%d-%d         [time=2018-09-09-01-01-01]
成功：{"result":"OK"}    
失败：{"result":"ERROR"}
4./hicat/files

http://192.168.1.1/mmc/video/xxxxx.264
成功：{"result":"OK","files":["name":"xxxxx","name":"xxxxx"]}    
失败：{"result":"ERROR"}
5./hicat/record?save=1
 ./hicat/record?del=xxxxxxxx.h264
成功：{"result":"OK"}    
失败：{"result":"ERROR"}
// 6./hicat/setCamera?resolve=1&rotate=0
// 成功：{"result":"OK"}    
// 失败：{"result":"ERROR"}
6./hicat/setCamera?resolve=1&rotate=0&fps=20
成功：{"result":"OK"}    
失败：{"result":"ERROR"}
7./hicat/test
成功：{"result":"OK"}    
//only work under mjpg mode
8./hicat/snapshot?name=xxx.jpg&dir=/dddd//www/mmc/video/
成功：{"result":"OK"}    
注意ddd是绝对路径，而且后面要有/
建议保存在/www/mmc/video/下面，这样用/hicat/files也可以查出来，或者删掉

9./hicat/videoServer?mode=0  0-rtspserver/1-libhisiv_test
设置videoServer的类型

