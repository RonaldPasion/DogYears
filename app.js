// Human to dog years calculation:
// First 2 human years are equivalent to 10.5 dog years per human year.
// After which it is equivalent to 4 dog years per human year.

function convertToDogYears(humanYears = 0)
{
    if (humanYears <= 2)
    {
        return humanYears * 10.5;
    }
    return (humanYears - 2) * 4 + 21;
}

console.log(convertToDogYears(101));
