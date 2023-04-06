function findItemsOver20(itemsList){
    var results = [];
      for (var i=0;i<itemsList.length; i++){
      var fruitList = itemsList[i];
        if (fruitList.qty > 20){
        results.push(fruitList) 
      }
    }
    return results
    }
    