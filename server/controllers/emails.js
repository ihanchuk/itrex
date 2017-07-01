module.exports=(req, resp)=>{
    resp.json({
        emails: [
            {sender:'Goga', text:'dummy text'},
            {sender:'Lelik', text:'dummy text2'}
        ]
    });
};