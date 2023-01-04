import dayjs from 'dayjs'
import { collection, addDoc } from 'firebase/firestore'

import { db } from './firebase.js'

// Add a new document with a generated id.
export const postDiary = async (uid = '', rate = 1, body = '') => {
  const docRef = await addDoc(collection(db, 'diaries'), {
    uid,
    rate,
    body,
    image: '',
    createdAt: dayjs().format('YYYY/MM/DD HH:mm:ss')
  })
  // console.log('Document written with ID: ', docRef.id)
  return docRef.id ? true : false
}
