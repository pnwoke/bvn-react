import { ui, firebase, googleProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleProvider); 
    };
};

// export const bbb = () => {
//     return () => {
//         return ui.start("#vlogin", {
//             signInOptions: [
//                 {
//                     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//                     requireDisplayName: false
//                 }
//             ]
//         });
//     }
// }

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        console.log('logging out...');
        return firebase.auth().signOut();
    };
};