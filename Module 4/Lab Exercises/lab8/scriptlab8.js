
// 1. 
import { format, addMonths, addYears, isBefore, differenceInDays, differenceInYears, differenceInMonths } from 'date-fns'

const currentDate = new Date();
// const birthDate = new Date('1995-01-02');
const birthDate = format(new Date(1995, 0, 2), "dd/MM/yyyy");
console.log(birthDate)
const daysDiff = differenceInDays(currentDate, birthDate);
console.log(`The difference in days is: ${daysDiff}`);


// 2.
const yearsDiff = differenceInYears(currentDate, birthDate);
const monthsDiff = differenceInMonths(currentDate, birthDate) % 12; //To isolate months after full years, use the modulo operator (%). The 12% gives the remainder after dividing the total months by 12. Represents months left after full years.
const remainingDaysDiff = differenceInDays(
    currentDate,
    addMonths(addYears(birthDate, yearsDiff), monthsDiff)
);
console.log(`${yearsDiff} years, ${monthsDiff} months, and ${remainingDaysDiff} days`);

// 3. 
const date1 = new Date('2024-01-01');
const date2 = new Date('2023-10-01');
const closestDate = isBefore(date1, date2) ? date2 : date1; //boolean
console.log(`The date closest to the current date is: ${closestDate}`);

// 4. 
const isDate1BeforeDate2 = isBefore(date1, date2);
console.log(`The first date is ${isDate1BeforeDate2 ? 'before' : 'after'} the second date`);

// 5. 
const londonTime = format(new Date(), 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'Europe/London' });
console.log(`The current time in London is: ${londonTime}`);
