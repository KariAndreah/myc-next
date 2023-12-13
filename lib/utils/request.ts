export const request = async (
    input: RequestInfo | URL
) => {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("GET", "POST");
    headers.append("content-type", "application/json");

    try{
        const req = await fetch(input, {headers: headers})
        const response = await req.json(); 
        if (!req.ok) {
            throw response; 
        }
        return response; 

    } catch (err){
        throw err; 
    }
};