const today = new Date();
console.log(today)

const date1 = new Date('1971-03-26')
const date2 = new Date('1971-12-16')

// if(date1>date2)
// {
//     console.log('March was before december')
// }
// else
// {
//     console.log('march was not before december')
// }

// jei date er milliseconds value joto kom hobe, sei date toto purana
if(date1.getTime() < date2.getTime())
{
    console.log('March was before december')
}
else
{
    console.log('march was not before december')
}

// We will use moment js to compare dates