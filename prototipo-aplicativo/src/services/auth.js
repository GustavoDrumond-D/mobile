import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const register = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: name
        })
        return { sucess: true, user: userCredential.user }
    } catch (error) {
        let errorMessage;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'Este email já está cadastrado';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Email inválido';
                break;
            case 'auth/weak-password':
                errorMessage = 'Senha muito fraca (mínimo 6 caracteres)';
                break;
            default:
                errorMessage = 'Erro ao cadastrar: ' + error.message;
        }
        return { success: false, error: errorMessage };
    }
};

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        let errorMessage;
        switch (error.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                errorMessage = 'Email ou senha incorretos';
                break;
            case 'auth/too-many-requests':
                errorMessage = 'Muitas tentativas. Tente mais tarde';
                break;
            default:
                errorMessage = 'Erro ao logar: ' + error.message;
        }
        return { success: false, error: errorMessage };
    }

}

export const logout = async () => {
    try {
        await signOut(auth);
        return { success: true };
    } catch (error) {
        return { success: false, error: 'Erro ao deslogar: ' + error.message };
    }
}