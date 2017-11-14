function centuryFromYear (year) {
    var century = 0
    var residuo = 0

    if (year % 100 === 0) {
        century = year / 100
        return century
    } else {
      century = year / 100
      residuo = year % 100
      residuo = residuo * 0.01
      century = century - residuo
      century = century + 1
      return century
    }
}
