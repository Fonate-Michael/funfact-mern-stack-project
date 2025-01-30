async function FetchFun(){
    const url = "http://127.0.0.1:8000/api/funfact/";
    const content = await fetch(url);
    const data = await content.json();
    return data;

}

FetchFun();

export default FetchFun;