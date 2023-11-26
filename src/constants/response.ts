const error_message = {
    default: "Error in fetching expenses",
    invalid: "Invalid expense formulation",
    payload: "Error happend in processing the expense",
};

const success_message = {
    default: "Successfully logged a expense",
    removed: "Successfully removed a expense",
    fetch: "Successfully fetched the expenses"
}

export function getResponseMessage(type: 'success' | 'error', messageType: keyof typeof error_message |  keyof typeof success_message) {
    if (type === "success") {
        return success_message[messageType as keyof typeof success_message]; 
    }
    if (type === "error") {
       return error_message[messageType as keyof typeof error_message];
    }
}