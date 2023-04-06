function transportFee(boardingFee){
    switch(boardingFee) {
        case "morning":
            return "R20";
        case "afternoon":
            return "R10";
        //case "nightshif":
          //  return "free";
        default:
            return "free";
    }
}