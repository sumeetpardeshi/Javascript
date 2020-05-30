reverse('strr');
function reverse(string)
{

console.log(string);

    if(string.length==1)
    return string[0];
    else
        return reverse(string.slice(1)).concat(string[0])

}