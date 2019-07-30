function ChkString(str:string)
{
var n:number=str.search("Marvellous");

if(n!=-1)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contains Marvellous in it");
}

}

ChkString("Pune Kothrud Marvellous Infosystem");