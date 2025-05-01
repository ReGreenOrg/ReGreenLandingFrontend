export default function FeatureSection() {
  return (
    <section className=" flex flex-col items-center py-10 pb-32 px-8 bg-gradient-to-b from-white to-[#E9F7FA]">
      <div className="text-center font-medium text-[#5B8992] mb-16 bg-[#E9F7FA] px-10 py-5 border-2 border-[#89B3BB] border-dashed rounded-[30px]">
        <p className="text-md sm:text-base ">
          이건 단순한 커플 앱이 아니에요. <span className="font-semibold">(속닥)</span>
        </p>
        <p className="text-md sm:text-base ">
          환경을 지키는 커플들의 비밀 아지트예요.
          <span role="img" aria-label="earth">
            🤫
          </span>
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        우이미에서는 이렇게{" "}
        <span className="bg-gradient-to-r from-[#11AC4F] to-[#1EBAE1] bg-clip-text text-transparent">
          지구를 지켜요
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { icon: "💖", text: "환경 보호 활동 인증하고 하트 모으기" },
          { icon: "🏡", text: "하트 모아서 우리만의 아지트 꾸미기" },
          { icon: "🎁", text: "둘이 함께 인증해서 추가 보상 받기" },
          { icon: "🌍", text: "지구를 지키고 이별을 미루기" },
        ].map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#FFB1CC]"
          >
            <div className="text-3xl">{feature.icon}</div>
            <p className="mt-4 text-md font-semibold">{feature.text}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-sm sm:text-base  mt-8">
        텀블러 쓰기, 대중교통 이용하기, 플로깅 인증하기.
        <br />
        <strong>작은 행동들이 쌓이면, 아름다운 우리만의 세계가 만들어져요.</strong>
      </p>
    </section>
  );
}
