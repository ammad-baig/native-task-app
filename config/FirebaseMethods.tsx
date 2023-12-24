import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const addData = (nodeName: any, body: any) => {
    return new Promise((resolve, reject) => {
        body.id = database().ref(nodeName).push().key
        database().ref(`${nodeName}/${body.id}`).set(body)
            .then(() => {
                resolve(body)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

export const getData = (nodeName: any, id?: any) => {
    return new Promise((resolve, reject) => {
        database().ref(`${nodeName}/${id ? id : ''}`).once('value',
            (data) => {
                if (data.exists()) {

                    resolve(Object.values(data.val()))
                } else {
                    reject('No Data Found')
                }
            })
    })
}

export const deleteData = (nodeName: any, id: any) => {
    return new Promise((resolve, reject) => {
        database().ref(`${nodeName}/${id ? id : ''}`).remove()
            .then(() => {
                resolve('Data Deleted Successfully');
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const updateData = (nodeName: any, id: any, body: any) => {
    return new Promise((resolve, reject) => {
        database().ref(`${nodeName}/${id}`).set(body)
            .then(() => {
                resolve(body);
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const singUp = (model: any) => {
    return new Promise((resolve, reject) => {
        if (!model.email) {
            reject('Email is required')
            return
        }
        if (!model.password) {
            reject('Password is required')
            return
        }
        auth().createUserWithEmailAndPassword(model.email, model.password)
            .then((res) => {
                model.id = res.user.uid
                database().ref(`users/${model.id}`).set(model)
                    .then(() => {
                        resolve(model);
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const login = (model: any) => {
    return new Promise((resolve, reject) => {
        if (!model.email) {
            reject('Email is required')
            return
        }
        if (!model.password) {
            reject('Password is required')
            return
        }
        auth().signInWithEmailAndPassword(model.email, model.password)
            .then((res) => {
                model.id = res.user.uid
                database().ref(`users/${model.id}`).once('value', (data) => {
                    if (data.exists()) {
                        resolve(data.val());
                    } else {
                        reject('Data not found')

                    }
                })
            })
            .catch((error) => {
                reject(error)
            })
    })
}
