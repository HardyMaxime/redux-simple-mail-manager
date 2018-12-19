import axios from 'axios'

let isRender = false

export const fetchMailSuccess = data => (
    {
        type: 'FETCH_MAIL_SUCCESS',
        value : data
    }
)

export const fetchMailFailed = error => (
    {
        type : 'FETCH_MAIL_FAILED',
        error
    }
)

export const initData = () => {
     if(!isRender) {
        isRender = true
        return (
            dispatch => {
                axios
                    .get("data/fakeServerData.json")
                    .then(response => {
                        dispatch(fetchMailSuccess(response.data.mails));
                    })
                    .catch(error => {
                        dispatch(fetchMailFailed(error));
                    })
            }
             
         )
        
     }
     return dispatch => {}
}


export const onTextChange = value => (
    { 
        type: 'ON_TEXT_CHANGE',
        value
    }
)

export const flagHandler = (id, flag) => (
    { 
        type: 'FLAG_HANDLER',
        id,
        flag
    }
)
export const readHandler = (id) => (
    { 
        type: 'READ_HANDLER',
        id
    }
)

export const deleteMail = id => (
    { 
        type: 'DELETE_MAIL',
        id
    }
)
export const showAllFlaggedMail = () => (
    { 
        type: 'SHOW_FLAGGED_MAIL'
    }
)

export const showUnreadMail = () => (
    { 
        type: 'SHOW_UNREAD_MAIL'
    }
)

export const addReplyMessage = (id, message) => (
    { 
        type: 'ADD_REPLY_MESSAGE',
        idAModif : id,
        payload : {
            id: new Date(),
            author: 'Vous',
            message,
            isUser : true
        }
    }
)

