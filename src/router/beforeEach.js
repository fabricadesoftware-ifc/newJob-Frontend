import store from '../store'

export default async (to, from, next) => {
  //   console.log(to)
  //   console.log(store.getters['auth/hasToken'])
  //   if (to.name !== 'Login' && !store.getters['auth/hasToken']) {
  //     try {
  //       await store.dispatch('auth/ActionCheckToken')
  //       next({ name: to.name })
  //     } catch (err) {
  //       next({ name: 'Login' })
  //     }
  //   } else {
  //     if (to.name === 'Login' && store.getters['auth/hasToken']) {
  //       next({ name: 'Home' })
  //     } else {
  //       next()
  //     }
  //   }
  try {
    await store.dispatch('auth/ActionCheckToken')
    await store.dispatch('auth/ActionLoadSession')
  } catch (e) {
    throw new Error()
  }
  next()
}
