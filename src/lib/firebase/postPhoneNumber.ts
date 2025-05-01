import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { FirebaseError } from "firebase/app";

export async function postPhoneNumber(phoneNumber: string) {
  if (!phoneNumber) return;

  try {
    const docRef = doc(db, "phoneNumbers", phoneNumber);
    await setDoc(
      docRef,
      {
        createdAt: serverTimestamp(),
      },
      { merge: false }
    );

    console.log("✅ 전화번호 저장 성공");
    return { success: true };
  } catch (error) {
    if (error instanceof FirebaseError && error.code === "permission-denied") {
      console.warn("⚠️ 이미 등록된 전화번호입니다.");
      return { success: false, reason: "duplicate" };
    }

    console.error("❌ Firestore 저장 실패:", error);
    throw error;
  }
}
