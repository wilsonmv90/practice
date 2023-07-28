const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];


//map

const testMaps = companies.map((company) => {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log("testMaps", testMaps);

const testMap = companies.map(
  (value) => `${value.name} [${value.start} - ${value.end}]`
);
console.log("testMap", testMap);

// sort
//Sort companies by start year

const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log("sortedCompanies", sortedCompanies);

const sortedCompany = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log("sortedCompany", sortedCompany);

//Reduce
const totalYears = companies.reduce((total, company)=>{
  return total + (company.end - company.start);
}, 0);
console.log('totalYears', totalYears)

const totalYear = companies.reduce((total, item) => total + (item.end - item.start),0);
console.log('totalYear', totalYear)


