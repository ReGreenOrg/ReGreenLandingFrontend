// import { postPhoneNumber } from "./postPhoneNumber";

interface PhoneNumberModalProps {
  close: () => void;
}

export default function PhoneNumberModal({ close }: PhoneNumberModalProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phonePart1 = formData.get("phonePart1") as string;
    const phonePart2 = formData.get("phonePart2") as string;
    const phonePart3 = formData.get("phonePart3") as string;
    const phoneNumber = `${phonePart1}-${phonePart2}-${phonePart3}`;
    const privacyConsent = formData.get("privacyConsent");

    // 전화번호 입력 검증
    if (!phonePart1 || !phonePart2 || !phonePart3 || phoneNumber.includes("undefined")) {
      alert("전화번호를 올바르게 입력해주세요.");
      return;
    }

    // 전화번호 입력 검증
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 한국 휴대폰 번호 형식
    if (!phoneRegex.test(phoneNumber)) {
      alert("올바른 전화번호를 입력해주세요. (예: 010-1234-5678)");
      return;
    }

    // 개인정보 동의 검증
    if (!privacyConsent) {
      alert("개인정보 동의가 필요합니다.");
      return;
    }

    try {
      // await postPhoneNumber(phoneNumber);
      alert("전화번호가 성공적으로 등록되었습니다!");
      close();
    } catch {
      alert("전화번호 등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, maxLength: number) => {
    const formattedValue = e.target.value.replace(/[^0-9]/g, "").slice(0, maxLength);
    e.target.value = formattedValue;
  };

  return (
    <div className="mx-6 flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-md md:mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">사전 등록</h1>
      <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
        출시 공지를 위해 핸드폰 번호를 입력해주세요.
      </p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-between gap-2 mb-4">
          <input
            type="text"
            name="phonePart1"
            placeholder="010"
            maxLength={3}
            onChange={(e) => handleInputChange(e, 3)}
            className="border border-gray-300 rounded-lg p-3 w-1/3 text-center text-sm sm:text-base focus:ring-2 focus:ring-[#FF8EB3]"
          />
          <input
            type="text"
            name="phonePart2"
            placeholder="1234"
            maxLength={4}
            onChange={(e) => handleInputChange(e, 4)}
            className="border border-gray-300 rounded-lg p-3 w-1/3 text-center text-sm sm:text-base focus:ring-2 focus:ring-[#FF8EB3]"
          />
          <input
            type="text"
            name="phonePart3"
            placeholder="5678"
            maxLength={4}
            onChange={(e) => handleInputChange(e, 4)}
            className="border border-gray-300 rounded-lg p-3 w-1/3 text-center text-sm sm:text-base focus:ring-2 focus:ring-[#FF8EB3]"
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="privacyConsent"
            id="privacyConsent"
            className="w-5 h-5 appearance-none border-2 border-gray-300 rounded-full checked:bg-[#FF8EB3] checked:border-[#FF8EB3] focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer relative"
          />
          <label
            htmlFor="privacyConsent"
            className="ml-3 text-sm sm:text-base text-gray-600 text-center"
          >
            개인정보 동의(필수) - 출시 알림을 위해서만 사용됩니다.
          </label>
        </div>

        <style jsx>{`
          input[type="checkbox"]::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            background-color: #f472b6;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            display: none;
          }

          input[type="checkbox"]:checked::after {
            display: block;
          }
        `}</style>

        <button
          type="submit"
          className="bg-[#FF8EB3] text-white rounded-full px-6 py-3 text-sm sm:text-base font-semibold hover:bg-pink-400 shadow-md w-full"
        >
          확인
        </button>
      </form>
      <button onClick={close} className="mt-4 text-sm text-gray-500 hover:underline">
        닫기
      </button>
    </div>
  );
}
