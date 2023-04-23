export const formatDate = (date) => {
    if (date === "") {
        return "";
    }

    let splitDate = date.split(" ");
    let newDate = new Date(date);
    var options = {hour: '2-digit', minute:'2-digit'};
    return newDate.toDateString() + (splitDate[1] !== undefined ? " at " + newDate.toLocaleTimeString('en-US', options) : "");
};

export const monthDate = (date) => {
    if (date === "") {
        return "";
    }
    
    let newDate = new Date(date);
    var options = { month: 'short', day: 'numeric' };

    return newDate.toLocaleDateString('en-US', options);
}