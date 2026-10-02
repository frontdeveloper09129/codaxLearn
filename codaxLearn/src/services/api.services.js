export const fetchingGetMeProfile = async () => {
    const response = await fetch("http://localhost:5000/api/v2/userData/me", {
        method: "GET",
        credentials: "include"
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export const Logout = async () => {
    const response = await fetch("http://localhost:5000/api/v1/auth/logout", {
        method: "POST",
        credentials: "include"
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export const FetchQuestionLength = async () => {

    const response = await fetch("http://localhost:5000/api/v3/quiz/data/userId/score", {
        method: "GET",
        credentials: "include"
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message)
    }

    return data


}

export const fetchQuestionFull_stack = async () => {
    const response = await fetch("http://localhost:5000/api/v3/quiz/data/fullstack_dev_data", {
        method: "GET",
        credentials: "include"
    })

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
        
    }

    return data
}

