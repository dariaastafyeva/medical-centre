const getGroups = (data) => {
    let groupArray = []
    data.forEach(element => {
        if (!groupArray.includes(element.groupId)) {
            groupArray.push(element.groupId)
        }
    })
    return groupArray;
};

const getGroupNameById = (id, services) => {
    return services && services.find(service => service.groupId === id).groupName;
}

const getGroupIdAndNameArray = (data) => {
    let resultArray = [];
    data.forEach(element => {
        if (!resultArray.some(resElement => resElement.id === element.groupId)) {
            resultArray.push({
                id: element.groupId,
                name: element.groupName
            });
        }
    })
    return resultArray;
}

const getSubGroupsByGroupId = (id, services) => {
    return services?.filter(service => service.groupId === parseInt(id))

}

const getSubGroupsArray = (supGroups) => {
    let resultArray = [];
    supGroups.forEach(element => {
        resultArray.push({
            id: element.id,
            name: element.subGroupName
        });
    })
    return resultArray;
}

export {
    getGroups,
    getGroupNameById,
    getGroupIdAndNameArray,
    getSubGroupsByGroupId,
    getSubGroupsArray
}