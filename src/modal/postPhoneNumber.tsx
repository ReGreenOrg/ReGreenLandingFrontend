export async function postPhoneNumber(phoneNumber: string) {
  try {
    const response = await fetch("https://your-firebase-api-endpoint.com/phoneNumbers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    if (!response.ok) {
      throw new Error("Failed to send phone number");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting phone number:", error);
    throw error;
  }
}
