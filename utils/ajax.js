import Ajax from 'simple-ajax';

export default function({url="",method="POST",data={},failHook,successHook}){
    const aj = new Ajax({
        url,method,
        data:JSON.stringify(data)

    });

    aj.on('success',(e)=>{

    });

    aj.on('error',(e)=>{
        failHook && failHook(e.target.respose);
    });

    aj.on('complete',(e)=>{
        successHook && successHook(JSON.parse(e.target.response));
    });

    aj.send();

}