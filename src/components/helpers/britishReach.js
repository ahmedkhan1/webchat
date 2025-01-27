const { commonMethods } = require("../../helper");
const { fetchWrapper } = require("./fetch-wrapper");

let reachBSHelper = {};

function getGradeBasedOnAge(age) {
    let grade = '';
  
    if (age >= 0 && age <= 4) {
      grade = 'Nursery';
    } else if (age === 5) {
      grade = 'Reception';
    } else if (age >= 6 && age <= 10) {
      grade = 'Year ' + (age - 5);
    } else if (age === 11) {
      grade = 'Year 6';
    } else if (age === 12) {
      grade = 'Year 7 / Form 1';
    } else if (age >= 13 && age <= 14) {
      grade = 'Year ' + (age - 5);
    } else if (age >= 15 && age <= 16) {
      grade = 'Year ' + (age - 5);
    } else if (age >= 17) {
      grade = 'Post-16 Education (Sixth Form / College)';
    } else {
      grade = 'Invalid age';
    }
  
    return grade;
}

async function setUserResponse(baseurl, key, value){
    baseurl = `${baseurl}/userinfo`;
    
    let postData = { 
        orgUnit: localStorage.getItem('org'), 
        userNumber: localStorage.getItem('phone_number'), 
        key, value 
    }
    const token = {};

    const data = await fetchWrapper.post(baseurl, token, postData);

    if (data) {
        return true;
    }
}

async function getUserInfo(baseurl){
    baseurl = `${baseurl}/userinfo`;
    const url = `${baseurl}?orgUnit=${localStorage.getItem('org')}&userNumber=${localStorage.getItem('phone_number')}`;
    let token = {};
    const data = await fetchWrapper.get(url, token);
    debugger;
    if(data) {
        return data;
    }
}


reachBSHelper.handleCustomTrigger = async function(requestObject, trigger, baseurl){
    debugger;
    let botResponse = (trigger.botResponses[0] && trigger.botResponses[0].response)? trigger.botResponses[0].response : "";
    let response = commonMethods.stripResponseHtml(requestObject.userName, botResponse);


    if(trigger.id === "b9601_t11ca53229d-426b-4281-c7db-fb2e33364cb4"){
        setUserResponse(baseurl, "childAge", requestObject.userMessage);
        const grade = getGradeBasedOnAge(Number(requestObject.userMessage));
        setUserResponse(baseurl, "grade", grade);

        response = response.replace("{grade}", grade);
    }
    else if(trigger.id === "b9601_t38b0fd552-4098-44b2-ee77-8c72811b286f" || trigger.id === "b9601_t16435e1054-4fa2-4ea9-0b62-c36086fdd68a"){
        setUserResponse(baseurl, "email", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t17c784b27f-6abb-42dc-3d8b-19d341778366"){
        setUserResponse(baseurl, "mobileNumber", requestObject.userMessage);

        const userInfo = await getUserInfo(baseurl);
        if(userInfo){
            const details = JSON.parse(userInfo.details);
            if(details['user']['DETAILS'] && details['user']['DETAILS'].length){
                const obj = details['user']['DETAILS'].find(res=> res.key === "parentName");
                if(obj){
                    response = response.replace("{name}", obj.value);
                } else {
                    response = response.replace("{name}", "");
                }
            }
        }
    }
    else if(trigger.id === "b9601_t1883086a62-4282-41ad-f07d-b517c045b64c"){
        setUserResponse(baseurl, "childName", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t232e277afe-841d-4c9d-2a97-c8e11904bd5a"){
        setUserResponse(baseurl, "childName", requestObject.userMessage);
    }
    
    else if(trigger.id === "b9601_t153f5321d3-82a5-43d0-92d1-50f0a0f00e11" || trigger.id === "b9601_t2665ba7f4-5dc0-4928-48c5-ca8c6c2677ae"){
        setUserResponse(baseurl, "parentName", requestObject.userMessage);
        response = response.replace("{name}", requestObject.userMessage);
    }
    
    else if(trigger.id === "b9601_t5b5a2fe37-456f-4c9f-7f51-1be03a0c8a75"){
        const userInfo = await getUserInfo(baseurl);
        if(userInfo){
            const details = JSON.parse(userInfo.details);
            if(details['user']['DETAILS'] && details['user']['DETAILS'].length){
                const obj = details['user']['DETAILS'].find(res=> res.key === "grade");
                if(obj){
                    response = response.replace("{grade}", obj.value);
                } else {
                    response = response.replace("{grade}", "");
                }
            }
        }
    }

    else if(trigger.id === "b9601_t11bd5c3f32-6f2d-4374-0533-92e442078421"){
        setUserResponse(baseurl, "mobileNumber", requestObject.userMessage);
    }



    else if(trigger.id === "b9601_t1eefab1b8-505e-4f03-5d79-cf5bd2e46832"){
        setUserResponse(baseurl, "childName", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t1ddf28d99-869f-4435-6c62-3e0edffd74e5"){
        setUserResponse(baseurl, "grade", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t2665ba7f4-5dc0-4928-48c5-ca8c6c2677ae"){
        setUserResponse(baseurl, "parentName", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t34d6aaf0c-03d1-43e1-5515-cf2b1beed56f"){
        setUserResponse(baseurl, "email", requestObject.userMessage);
    }
    else if(trigger.id === "b9601_t4130732c0-232d-4309-b486-530b176ca63c"){
        setUserResponse(baseurl, "mobileNumber", requestObject.userMessage);
    }




    else if(requestObject.userMessage && trigger.id === "b9601_t142db9506-b407-4c59-92ef-56d534fba262"){
        setUserResponse(baseurl, "name", requestObject.userMessage);
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t21fe79d0a-a03c-47e0-f201-be42188a7128"){
        setUserResponse(baseurl, "email", requestObject.userMessage);
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t343fa14f5-ca3e-4150-ab9f-4c997a4b2730"){
        setUserResponse(baseurl, "mobileNumber", requestObject.userMessage);
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t47ea019ba-a47d-46dd-9a61-e2f2856583b8"){
        setUserResponse(baseurl, "preferredDate", requestObject.userMessage);
    }

    else if(
        requestObject.userMessage && 
        (trigger.id === "b9601_t2c6a48b18-75fd-4390-d7b0-3f549adb981f" || 
        trigger.id === "b9601_t96f5dcd36-a2b9-43ac-2a6d-ead101e7aa19")
    ){
        const userInfo = await getUserInfo(baseurl);
        if(userInfo){
            const details = JSON.parse(userInfo.details);
            if(details['user']['DETAILS'] && details['user']['DETAILS'].length){
                const parentName = details['user']['DETAILS'].find(res=> res.key === "parentName");
                const email = details['user']['DETAILS'].find(res=> res.key === "email");
                const mobileNumber = details['user']['DETAILS'].find(res=> res.key === "mobileNumber");
                response = response.replace("{name}", parentName.value);
                response = response.replace("{email}", email.value);
                response = response.replace("{phoneNumber}", mobileNumber.value);
        
                setUserResponse(baseurl, "preferredDate", requestObject.userMessage);
            }
        }
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t6e4d0bbf3-b517-4474-d57f-cd7ec9a036e9"){
        setUserResponse(baseurl, "parentName", requestObject.userMessage);
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t7901a095b-a809-44bd-f08f-781a35fc606b"){
        setUserResponse(baseurl, "email", requestObject.userMessage);
    }
    else if(requestObject.userMessage && trigger.id === "b9601_t882b93497-04e1-4b94-e3b2-63e3cea103fa"){
        setUserResponse(baseurl, "mobileNumber", requestObject.userMessage);
        const userInfo = await getUserInfo(baseurl);
        if(userInfo){
            const details = JSON.parse(userInfo.details);
            if(details['user']['DETAILS'] && details['user']['DETAILS'].length){
                const parentName = details['user']['DETAILS'].find(res=> res.key === "parentName");
                const email = details['user']['DETAILS'].find(res=> res.key === "email");
                const mobileNumber = details['user']['DETAILS'].find(res=> res.key === "mobileNumber");
                response = response.replace("{name}", parentName.value);
                response = response.replace("{email}", email.value);
                response = response.replace("{phoneNumber}", mobileNumber.value);        
            }
        }
    }

    if(trigger.id === "b9601_t21c0a71907-9173-4895-ec3c-3112ae3925d1"){
        // await whatsapphelper.sendInteractiveMessage(requestObject, response, "", [
        //     {
        //         "id": 700000,
        //         "text": "Back to Main Menu",
        //         "toTriggerId": "m"
        //     },
        //     {
        //         "id": 800000,
        //         "text": "Exit Conversation",
        //         "toTriggerId": "exit"
        //     }
        // ]);
        return { stopFlow: true };
    }

    if(trigger.botResponses && trigger.botResponses[0] && trigger.botResponses[0].response){
        trigger.botResponses[0].response = response;
    }

    return { stopFlow: false, updatedTrigger: trigger };  
}

module.exports = reachBSHelper;