function Elephent()
{
    console.log('test');
    this.stomach=[];
}
Elephent.prototype.eat=function(Dog)
{
    this.stomach.push(Dog);

}