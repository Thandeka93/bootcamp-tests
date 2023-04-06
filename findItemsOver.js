function findItemsOver(itemList, threshold){
    var result3 = [];
      for (var i=0;i<itemList.length;i++){
      var fruitList = itemList[i];
        if (fruitList.qty > threshold){
        result3.push(fruitList)
        }
      }
      return result3
    }