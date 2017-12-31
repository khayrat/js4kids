<body></body>
<script src="http://gamingJS.com/Three.js"></script>
<script src="http://gamingJS.com/ChromeFixes.js"></script>
<script>
  var log = makeLog();
  
  logMessage(hello('Präsident Obama'), log);
  logMessage(hello('Papa'), log);
  logMessage(hello('Lena'), log);
  
  function hello(name) {
    return 'Hallo ' + name + '! Fassoulia ist lecker!!!'; 
  }
  
  function makeLog() {
    var holder = document.createElement('div');
    
    holder.style.height = '75px';
    holder.style.width  = '450px';
    holder.style.overflow = 'auto';
    holder.style.border = '1px solid #666';
    holder.style.backgroundColor = '#ccc';
    holder.style.padding = '8px';
    holder.style.position = 'absolute';
    holder.style.bottom = '10px';
    holder.style.right = '20px';
    document.body.appendChild(holder);
    
    return holder;
  }
  
  function logMessage(message) {
   var holder = document.createElement('div');
   
   holder.textContent = message;
   log.appendChild(holder); 
  }
  
</script>