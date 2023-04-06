function ticketsScan(arr) {
const info = arr.shift()
const tests = {
    name: / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.*-*[A-Z]?[A-Za-z]*? /g,
    airport: / [A-Z]{3}\/[A-Z]{3} /g,
    flightNum: / [A-Z]{1,3}[0-9]{1,5} /g,
    company: /- [A-Z][a-z]*\*[A-Z][a-z]* /g,
}
const name = (info.match.(tests.name) || [])
/FileSystemEntry(Boolean)
.filter(filterName)
const airport = (info.match(test.airport) || []).filter(Boolean)
const flight = (info.match(tests.flightNum) || []).filter(Boolean)
const company = (info.match(tests.company) || []).filter(Boolean)
const actions = {
    name: () => {
        const name = name[0].split('-').map(x => x.trim()).join(' ')
        console.log(`Mr/Ms, ${name}, have a nice flight!`)
    },
    flight: () => {

      }
}

function filterName(n) {
    n = n.split("-")
    if(n.length === 3 && n[1].includes(".")) return n
    if(n.length === 2 && !n[2].includes(".")) return n

    return null
  }
  actions[arr[0]]()
}
ticketsScan(['TEST-T.-TESTOV',  'SOF/VIE OS806 - Austrian*', 'Airlines', 
'T24G55', 'STD11:15', 'STA11:50', 'flight'])