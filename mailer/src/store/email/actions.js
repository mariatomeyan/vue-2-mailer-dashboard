export function getEmails(context) {
    this.$axios.get('/emails')
        .then(res => {
           console.log('res is now', res)
            return res.data
         })
        .then(data => {
            context.commit('SET_EMAILS', data)
        })
        .catch(err => {
            console.log('err', err)
        })
}

export function getEmail(context, id) {
    this.$axios.get('emails/' + id)
        .then(res => {
            console.log('res is now ', res)
            return res.data
        })
        .then(data => {
            context.commit('SET_EMAIL', data)
        })
        .catch(err => {
            console.log('err is now this', err)
        })
}
