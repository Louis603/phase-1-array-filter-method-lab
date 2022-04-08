const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (drivers, str) {
    let answer = drivers.filter(element => element.toLowerCase() === str.toLowerCase());
    return answer;
}

function fuzzyMatch (drivers, str) {
    return drivers.filter(element => element.slice(0, str.length) === str)
}

function matchName (drivers, str) {
    return drivers.filter(element => element.name === str )
}