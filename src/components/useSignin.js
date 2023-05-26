import { ref } from "vue";
import { projectFirestore } from "@/configs/init";

const error = ref(null);
const isPanding = ref(false);

async function signin(email, password) {
  isPanding.value = true;
  error.value = null;
  try {
    const response = await projectFirestore.signInWithEmailAndPassword(
      email,
      password
    );
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPanding.value = false;
  }
}
export function useSignIn() {
  return { error, isPanding, signin };
}
