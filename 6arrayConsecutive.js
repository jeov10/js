function makeArrayConsecutive2(statues) {
    var min = statues[0]
    var max = 0
    var counter = 0


    for ( var i = 0 ; i < statues.length; i++ ) {
        if (max < statues[i])
            {
                max = statues[i]
            }
        if ( min < statues[i]) {

        } else {
            min = statues[i]
        }
    }

for (var i = min ; i <= max ; i++) {
    counter ++
}

    var solution = counter - statues.length
    return solution

}
