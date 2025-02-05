function myEach(array, callback) {
    let newArray
    if (!Array.isArray(array)) {
        newArray = Object.values(array)
    } else {
        newArray = array
    }

    for (let element of newArray) {
        callback(element)
    }
    return array
}

function myMap(collection, callback) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    const mappedArray = []
    for (let i = 0; i < newArray.length; i++) {
        mappedArray.push(callback(newArray[i]))
    }
    return mappedArray
}

function myReduce(collection, callback, acc) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    let total;
    if (acc === undefined) {
        total = newArray[0]
        newArray.shift()
    } else {
        total = acc
    }

    for (let i = 0; i < newArray.length; i++) {
        total = callback(total, newArray[i], newArray)
    }
    return total
}

function myFind(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    for (let element of newArray) {
        if (predicate(element)) {
            return element
        }
    }

}

function myFilter(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }
    let matchedElements = []
    for (let element of newArray) {
        if (predicate(element)) {
            matchedElements.push(element)
        }
    }
    return matchedElements
}

function mySize(collection) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    return newArray.length
}


function myFirst(collection, n) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    if (n) {
        let nthNumbers = []
        for (let i = 0; i < n; i++) {
            nthNumbers.push(newArray[i])
        }
        return nthNumbers
    }else{
       return newArray[0]
    }
}


function myLast(collection, n){
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection)
    } else {
        newArray = [...collection]
    }

    if(n){
       return newArray.slice(newArray.length - n)
    }else{
        return newArray[newArray.length - 1]
    }
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}