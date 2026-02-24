let num = [5, -2, 10, -3];
let maxnum=num[0];
for(let i=0;i<num.length;i++)
{
    if(maxnum<num[i])
    {
        maxnum=num[i];
    }

}
console.log(maxnum);