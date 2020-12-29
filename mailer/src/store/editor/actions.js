import api from '../../services/api'

export function getImages(context) {
     api.get('/images')
        .then(res => {
           console.log('res is now for images: ', res)
            return res.data
         })
        .then(data => {
            context.commit('SET_IMAGES', data)
        })
        .catch(err => {
            console.log('err', err)
        })
}
export function getFrames(context) {
    api.get('/frames')
        .then(res => {
            console.log('res is now for frames: ', res)
            return res.data
        })
        .then(data => {
            context.commit('SET_FRAMES', data)
        })
        .catch(err => {
            console.log('err', err)
        })
}
export function getBackgrounds(context) {
    this.$axios.get('/backgrounds')
        .then(res => {
            console.log('res is now for backgrounds: ', res)
            return res.data
        })
        .then(data => {
            context.commit('SET_BACKGROUNDS', data)
        })
        .catch(err => {
            console.log('err', err)
        })
}
