function shapeArea(n) {
        result = 1
        multiple = 4
        counter = 1
        if (n === 1) {
                return result
        } else {

        while(counter < n ) {
                result = result + multiple
                multiple = multiple + 4
                counter ++
              }
        }
        return result
}
