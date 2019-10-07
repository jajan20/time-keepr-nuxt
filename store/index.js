import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [ ]
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://time-keepr.firebaseio.com/posts.json')
                .then(res => {
                    const postsArray = []
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(err => context.error(err))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vueContext, data) {
                return axios.post('https://time-keepr.firebaseio.com/posts.json', data)
                .then(result => {
                    vueContext.commit('addPost', {...data, id: result.data.name })
                })
                .catch(err => console.log('Error: ', err))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore