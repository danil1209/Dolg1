import {createStore} from 'vuex'

export default createStore({
    state: {
        users: [
            {
                id: 1,
                number: 1,
                name: "Данил",
                surname: "Головань",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 3.4
            },
            {
                id: 2,
                number: 2,
                name: "Артем",
                surname: "Козилов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.4
            },
            {
                id: 3,
                number: 3,
                name: "Юрий",
                surname: "Столяров",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.6
            },
            {
                id: 4,
                number: 4,
                name: "Тимур",
                surname: "Усанов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4
            },
            {
                id: 5,
                number: 5,
                name: "Павел",
                surname: "Кучеренко",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.1
            },
            {
                id: 6,
                number: 6,
                name: "Данил",
                surname: "Головань",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 3.4
            },
            {
                id: 7,
                number: 7,
                name: "Артем",
                surname: "Козилов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.4
            },
            {
                id: 8,
                number: 8,
                name: "Юрий",
                surname: "Столяров",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.6
            },
            {
                id: 9,
                number: 9,
                name: "Тимур",
                surname: "Усанов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4
            },
            {
                id: 10,
                number: 10,
                name: "Павел",
                surname: "Кучеренко",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.1
            },
            {
                id: 11,
                number: 11,
                name: "Данил",
                surname: "Головань",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 3.4
            },
            {
                id: 12,
                number: 12,
                name: "Артем",
                surname: "Козилов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.4
            },
            {
                id: 13,
                number: 13,
                name: "Юрий",
                surname: "Столяров",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.6
            },
            {
                id: 14,
                number: 14,
                name: "Тимур",
                surname: "Усанов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4
            },
            {
                id: 15,
                number: 15,
                name: "Павел",
                surname: "Кучеренко",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.1
            },
            {
                id: 16,
                number: 16,
                name: "Данил",
                surname: "Головань",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 3.4
            },
            {
                id: 17,
                number: 17,
                name: "Артем",
                surname: "Козилов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.4
            },
            {
                id: 18,
                number: 18,
                name: "Юрий",
                surname: "Столяров",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.6
            },
            {
                id: 19,
                number: 19,
                name: "Тимур",
                surname: "Усанов",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4
            },
            {
                id: 20,
                number: 20,
                name: "Павел",
                surname: "Кучеренко",
                curse: 4,
                group: "Авб-19-2",
                midlle_mark: 4.1
            },
        ],
        sortPointState: false
    },
    getters: {
        USERS(state) {
            return state.users;
        }
    },
    actions: {
        sortPoint: (context) => {
            context.commit('sortPoint')
        },
        removeUser: (context, id) => {
            context.commit('removeUser', id)
        }
    },
    mutations: {
        removeUser: (state, id) => {
            state.users = state.users.filter(item => {
                return item.id !== id
            })
        },
        sortPoint: (state) => {
            if (!state.sortPointState) {
                state.users.sort((item_prev, item_next) => {
                    return item_prev['midlle_mark'] - item_next['midlle_mark']
                })
                state.sortPointState = true
            } else {
                state.users.reverse()
                state.sortPointState = false
            }
        }
    },
})
