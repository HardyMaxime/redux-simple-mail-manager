const initialState = {
  mails: [] ,
  filterString: "",
  filterFlag: false,
  filterRead: false,
  error : []
};


const reducer = (state = initialState, action) => {
  
    switch (action.type) {
       case 'FETCH_MAIL_SUCCESS' :
          return {
            ...state,
            mails : action.value
          }
       case 'FETCH_MAIL_FAILED' :
          return {
            ...state,
            error : action.error
          }
       case 'ON_TEXT_CHANGE' :
          return {
            ...state,
            filterString : action.value
          }
       case 'FLAG_HANDLER' :
          return { 
              ...state, 
              mails: state.mails.map(
                  mail => mail.id === action.id ? {...mail, flag : !action.flag} : mail)
          }
       case 'DELETE_MAIL' :
          return {
            ...state,
            mails : state.mails.filter(mail => mail.id !== action.id)
          }
       case 'SHOW_FLAGGED_MAIL' :
          return {
            ...state,
            filterFlag : !state.filterFlag
          }
       case 'SHOW_UNREAD_MAIL' :
          return {
            ...state,
            filterRead : !state.filterRead
          }
        case 'READ_HANDLER' :
          return { 
              ...state, 
              mails: state.mails.map(
                  mail => mail.id === action.id ? {...mail, read : true} : mail)
          }
        case 'ADD_REPLY_MESSAGE' :
          return { 
              ...state, 
              mails: state.mails.map(
                  mail => mail.id === action.idAModif ? {...mail, reply : mail.reply.concat(action.payload)  } : mail)
          }
        default: return state
         }
}

export default reducer