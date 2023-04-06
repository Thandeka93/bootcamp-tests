function mostProfitableDepartment(profitableDep){
    var salesData = profitableDep
    let salesTrack = {};
    for (var i=0;i<salesData.length;i++){
    var salesProfits = salesData[i];
      salesTrack[salesProfits.department] = 0;
    }
    for (var i=0;i<salesData.length;i++){
      var salesProfits = salesData[i];
      var currentDepartmentTotal = salesTrack[salesProfits.department];
       currentDepartmentTotal +=salesProfits.sales
        salesTrack[salesProfits.department] = currentDepartmentTotal;
     }
     var highestSales = 0;
  var departmentCategory = '';
  for (let sales in salesTrack){
  var itemsSold = salesTrack[sales];
  if (itemsSold > highestSales){
   highestSales = itemsSold;
      departmentCategory = sales;
    }
  }
  return departmentCategory
}
