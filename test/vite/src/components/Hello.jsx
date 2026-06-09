function Hello(){
    let text = 'Prabha';
    function displayName(){
        return "Prabha";
    }
 return (
    <>
    <h1>Hello from components {displayName()}{" "}{20+10}</h1>
    <h3>{text}</h3>
    </>
 )
}
export default Hello