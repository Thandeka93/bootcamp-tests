function yearsAgo(pastyear) {
    let todaydate = new Date();
    let todayyear = todaydate.getFullYear();
    return todayyear - pastyear;
  }