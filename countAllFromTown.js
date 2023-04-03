function allFromTown(regNo, Town){
    let registration = regNo.split(',');
      let arr = [];
      for (let i=0;i<registration.length;i++){
       let string = registration[i].trim();
        if (string.startsWith(Town)){
          arr.push(string);
        
        }
      }
      console.log(arr);
      return arr;
    }