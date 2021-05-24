function setToken(token) {
    localStorage.setItem('ACCESS_TOKEN', token);
}

function getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
}

function removeToken() {
    localStorage.removeItem('ACCESS_TOKEN');
}

//admin
function setTokenAdmin(token) {
    localStorage.setItem('ACCESS_TOKEN_ADMIN', token);
}

function getTokenAdmin() {
    return localStorage.getItem('ACCESS_TOKEN_ADMIN');
}

function removeTokenAdmin() {
    localStorage.removeItem('ACCESS_TOKEN_ADMIN');
}

function getRole() {
    if(getToken()){
        return 'user';
    }
    if(getTokenAdmin()){
        return 'admin';
    }
    return 'guest';
}

export default {
    setToken,
    getToken,
    removeToken,
    setTokenAdmin,
    getTokenAdmin,
    removeTokenAdmin,
    getRole
}