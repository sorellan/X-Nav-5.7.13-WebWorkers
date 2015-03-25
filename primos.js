function primos(number) {
	var n = 1;
  var cont = 0;
  	primelist = "";
  	search: while (n<number) {
    	n += 1;
    	for (var i = 2; i <= Math.sqrt(n); i += 1)
      		if (n % i == 0)
        		continue search;
    	// found a prime!
      cont += 1;
      if(cont % 10000 == 0) {
          self.postMessage(primelist);
          primelist = "";
      }
    	primelist += " " + n;
	}
	//return primelist;
}

self.onmessage = function(event) {
	console.log("He recibido " + event.data);
	primos(event.data);
	//salida = primos(event.data);
	//self.postMessage(salida);
}